import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketHotspotsComponent } from './market-hotspots.component';

describe('MarketHotspotsComponent', () => {
  let component: MarketHotspotsComponent;
  let fixture: ComponentFixture<MarketHotspotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketHotspotsComponent]
    });
    fixture = TestBed.createComponent(MarketHotspotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
