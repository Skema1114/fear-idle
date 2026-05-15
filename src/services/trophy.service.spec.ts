import { TestBed } from '@angular/core/testing';
import { TrophyService } from './trophy.service';

describe('TrophyService', () => {
  let service: TrophyService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TrophyService] });
    service = TestBed.inject(TrophyService);
  });

  it('provides non-empty trophy list', () => {
    expect(service.getTrophiesList().length).toBeGreaterThan(0);
  });

  it('has unique trophy titles', () => {
    const titles = service.getTrophiesList().map((t) => t.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('all trophies start un-earned', () => {
    for (const t of service.getTrophiesList()) {
      expect(t.earned).toBe(false);
    }
  });

  it('every trophy has a condition registered', () => {
    const conditions = service.getTrophyConditions();
    for (const t of service.getTrophiesList()) {
      expect(conditions.has(t.title))
        .withContext(`missing condition for "${t.title}"`)
        .toBe(true);
    }
  });
});
