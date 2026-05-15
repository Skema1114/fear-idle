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
