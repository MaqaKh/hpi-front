import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketStatsComponent } from './market-stats.component';

describe('MarketStatsComponent', () => {
  let component: MarketStatsComponent;
  let fixture: ComponentFixture<MarketStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketStatsComponent]
    });
    fixture = TestBed.createComponent(MarketStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
