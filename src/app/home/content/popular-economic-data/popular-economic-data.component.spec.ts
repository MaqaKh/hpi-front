import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularEconomicDataComponent } from './popular-economic-data.component';

describe('PopularEconomicDataComponent', () => {
  let component: PopularEconomicDataComponent;
  let fixture: ComponentFixture<PopularEconomicDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularEconomicDataComponent]
    });
    fixture = TestBed.createComponent(PopularEconomicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
