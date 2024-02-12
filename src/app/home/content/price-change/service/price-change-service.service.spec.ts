import { TestBed } from '@angular/core/testing';

import { PriceChangeServiceService } from './price-change-service.service';

describe('PriceChangeServiceService', () => {
  let service: PriceChangeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceChangeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
