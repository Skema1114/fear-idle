/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrophyService } from './trophy.service';

describe('Service: Trophy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrophyService]
    });
  });

  it('should ...', inject([TrophyService], (service: TrophyService) => {
    expect(service).toBeTruthy();
  }));
});
