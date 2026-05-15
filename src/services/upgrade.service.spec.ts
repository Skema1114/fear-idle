import { TestBed } from '@angular/core/testing';
import { UpgradeService } from './upgrade.service';

describe('UpgradeService', () => {
  let service: UpgradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UpgradeService] });
    service = TestBed.inject(UpgradeService);
  });

  it('provides non-empty lists', () => {
    expect(service.getIdleUpgradesList().length).toBeGreaterThan(0);
    expect(service.getClickUpgradesList().length).toBeGreaterThan(0);
    expect(service.getPrestigeUpgradesList().length).toBeGreaterThan(0);
  });

  it('has unique upgrade names per list', () => {
    const auto = service.getIdleUpgradesList().map((u) => u.name);
    expect(new Set(auto).size).toBe(auto.length);

    const click = service.getClickUpgradesList().map((u) => u.name);
    expect(new Set(click).size).toBe(click.length);

    const prestige = service.getPrestigeUpgradesList().map((u) => u.name);
    expect(new Set(prestige).size).toBe(prestige.length);
  });

  it('idle upgrades have positive cost and dps', () => {
    for (const up of service.getIdleUpgradesList()) {
      expect(up.cost).toBeGreaterThan(0);
      expect(up.dps).toBeGreaterThan(0);
      expect(Number.isFinite(up.cost)).toBe(true);
      expect(Number.isFinite(up.dps)).toBe(true);
    }
  });

  it('click upgrade costs are strictly increasing', () => {
    const list = service.getClickUpgradesList();
    for (let i = 1; i < list.length; i++) {
      expect(list[i].cost).toBeGreaterThan(list[i - 1].cost);
    }
  });

  it('click multipliers are monotonically non-decreasing (regression: tier 5 was broken)', () => {
    const list = service.getClickUpgradesList();
    for (let i = 1; i < list.length; i++) {
      expect(list[i].clickMultiplier).toBeGreaterThanOrEqual(
        list[i - 1].clickMultiplier,
      );
    }
  });

  it('idle upgrade costs are strictly increasing', () => {
    const list = service.getIdleUpgradesList();
    for (let i = 1; i < list.length; i++) {
      expect(list[i].cost).toBeGreaterThan(list[i - 1].cost);
    }
  });

  it('click upgrades reference valid unlockAfter chain', () => {
    const list = service.getClickUpgradesList();
    const names = new Set(list.map((u) => u.name));
    for (const up of list) {
      if (up.unlockAfter) {
        expect(names.has(up.unlockAfter)).toBe(true);
      }
    }
  });
});
