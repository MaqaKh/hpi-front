import { TestBed } from '@angular/core/testing';

import { EconomicDataServiceService } from './economic-data-service.service';

describe('EconomicDataServiceService', () => {
  let service: EconomicDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EconomicDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
