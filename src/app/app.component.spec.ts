import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    localStorage.removeItem('fearIdleGame');
  });

  afterEach(() => {
    localStorage.removeItem('fearIdleGame');
    component.ngOnDestroy();
  });

  describe('initial state', () => {
    it('creates component', () => {
      expect(component).toBeTruthy();
    });

    it('starts with zero essence', () => {
      expect(component.essence()).toBe(0);
      expect(component.totalEssence()).toBe(0);
    });

    it('starts with baseClickValue of 1', () => {
      expect(component.baseClickValue()).toBe(1);
    });

    it('starts with globalMultiplier of 1', () => {
      expect(component.globalMultiplier()).toBe(1);
    });

    it('loads non-empty upgrade lists', () => {
      expect(component.upgradesList().length).toBeGreaterThan(0);
      expect(component.clickUpgradesList().length).toBeGreaterThan(0);
      expect(component.prestigeUpgradesList().length).toBeGreaterThan(0);
      expect(component.trophiesList().length).toBeGreaterThan(0);
    });
  });

  describe('manualClick', () => {
    beforeEach(() => {
      // Esvazia trofeus para isolar a matematica do click (trofeus dao bonus).
      component.trophiesList.set([]);
    });

    it('increments essence on click (combo already counts on first hit)', () => {
      component.manualClick();
      // combo=1 → 1 * 1.02 * 1 = 1.02
      expect(component.essence()).toBeCloseTo(1.02, 5);
      expect(component.totalManualClicks()).toBe(1);
    });

    it('increments combo and tracks highest', () => {
      component.manualClick();
      component.manualClick();
      component.manualClick();
      expect(component.comboCount()).toBe(3);
      expect(component.highestCombo()).toBe(3);
    });

    it('applies combo multiplier (1 + count * 0.02)', () => {
      component.manualClick();
      component.manualClick();
      const before = component.essence();
      component.manualClick();
      const gain = component.essence() - before;
      // 3rd click: combo=3 → 1.06
      expect(gain).toBeCloseTo(1.06, 5);
    });
  });

  describe('formatNumber', () => {
    it('formats small numbers without suffix', () => {
      expect(component.formatNumber(0)).toBe('0');
      expect(component.formatNumber(42)).toBe('42');
      expect(component.formatNumber(999)).toBe('999');
    });

    it('uses K/M/B/T suffixes', () => {
      expect(component.formatNumber(1500)).toContain('K');
      expect(component.formatNumber(2_500_000)).toContain('M');
      expect(component.formatNumber(7_000_000_000)).toContain('B');
      expect(component.formatNumber(3_000_000_000_000)).toContain('T');
    });

    it('uses exponential for >= 1e36', () => {
      expect(component.formatNumber(1e40)).toContain('e');
    });

    it('handles Infinity/NaN safely', () => {
      expect(component.formatNumber(Infinity)).toBe('∞');
      expect(component.formatNumber(-Infinity)).toBe('-∞');
      expect(component.formatNumber(NaN)).toBe('?');
    });
  });

  describe('calculatePrestigeGain', () => {
    it('returns 0 below threshold', () => {
      component.totalEssence.set(9_999_999);
      expect(component.calculatePrestigeGain()).toBe(0);
    });

    it('returns 1 at threshold', () => {
      component.totalEssence.set(10_000_000);
      expect(component.calculatePrestigeGain()).toBe(1);
    });

    it('uses cbrt formula', () => {
      component.totalEssence.set(80_000_000); // cbrt(8) = 2
      expect(component.calculatePrestigeGain()).toBe(2);
      component.totalEssence.set(270_000_000); // cbrt(27) = 3
      expect(component.calculatePrestigeGain()).toBe(3);
    });

    it('threshold scales by 1.5^prestigeLevel', () => {
      expect(component.prestigeThreshold()).toBeCloseTo(10_000_000, 0);
      component.prestigeLevel.set(1);
      expect(component.prestigeThreshold()).toBeCloseTo(15_000_000, 0);
      component.prestigeLevel.set(5);
      expect(component.prestigeThreshold()).toBeCloseTo(10_000_000 * Math.pow(1.5, 5), 0);
    });
  });

  describe('trophy bonus', () => {
    it('adds 0.5% global per earned trophy', () => {
      const all = component.trophiesList().map((t) => ({ ...t, earned: true }));
      component.trophiesList.set(all);
      const expected = 1 + 0.005 * all.length;
      expect(component.trophyBonus()).toBeCloseTo(expected, 5);
      expect(component.globalMultiplier()).toBeCloseTo(expected, 5);
    });

    it('is 1 when no trophies earned', () => {
      component.trophiesList.set([]);
      expect(component.trophyBonus()).toBe(1);
    });
  });

  describe('multiplier safety', () => {
    it('clamps globalMultiplier to finite value even with extreme amounts', () => {
      const prestige = component.prestigeUpgradesList();
      const trono = prestige.findIndex((u) => u.name === 'Trono do Caos (Global)');
      expect(trono).toBeGreaterThanOrEqual(0);
      const copy = [...prestige];
      copy[trono] = { ...copy[trono], amount: 1000 };
      component.prestigeUpgradesList.set(copy);
      const mult = component.globalMultiplier();
      expect(Number.isFinite(mult)).toBe(true);
      expect(mult).toBeGreaterThan(1);
    });

    it('preserves full power below soft cap (amount=10)', () => {
      const prestige = component.prestigeUpgradesList();
      const idx = prestige.findIndex((u) => u.name === 'Essência Primordial (Global)');
      const copy = [...prestige];
      copy[idx] = { ...copy[idx], amount: 10 };
      component.prestigeUpgradesList.set(copy);
      // 1.5^10 * (1 + 0 * 0.1) = 57.665
      expect(component.globalMultiplier()).toBeCloseTo(Math.pow(1.5, 10), 3);
    });
  });

  describe('buyUpgrade', () => {
    it('deducts cumulative cost and increments amount (auto, 1x)', () => {
      component.essence.set(1000);
      component.totalEssence.set(1000);
      const name = component.upgradesList()[0].name;
      const beforeAmount = component.upgradesList()[0].amount;
      const beforeCost = component.upgradesList()[0].cost;
      component.buyUpgrade(0, 1, 'auto');
      const after = component.upgradesList().find((u) => u.name === name)!;
      expect(after.amount).toBe(beforeAmount + 1);
      expect(component.essence()).toBe(1000 - beforeCost);
    });

    it('cost grows by 1.15x per purchase (auto, 3x)', () => {
      component.essence.set(1e9);
      component.totalEssence.set(1e9);
      const baseCost = component.upgradesList()[0].cost;
      const expectedTotal =
        baseCost +
        Math.round(baseCost * 1.15) +
        Math.round(Math.round(baseCost * 1.15) * 1.15);
      const startEssence = component.essence();
      component.buyUpgrade(0, 3, 'auto');
      expect(startEssence - component.essence()).toBe(expectedTotal);
    });
  });

  describe('save round-trip', () => {
    it('persists essence and upgrades across reload', () => {
      component.essence.set(12345);
      component.totalEssence.set(99999);
      component.totalManualClicks.set(77);
      component.saveGameManually();
      component.closeAlert();

      const fresh = TestBed.createComponent(AppComponent).componentInstance;
      fresh.ngOnInit();
      expect(fresh.essence()).toBe(12345);
      expect(fresh.totalEssence()).toBe(99999);
      expect(fresh.totalManualClicks()).toBe(77);
      fresh.ngOnDestroy();
    });
  });
});
