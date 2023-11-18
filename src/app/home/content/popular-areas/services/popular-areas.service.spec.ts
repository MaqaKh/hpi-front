import { TestBed } from '@angular/core/testing';

import { PopularAreasService } from './popular-areas.service';

describe('PopularAreasService', () => {
  let service: PopularAreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularAreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
