import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketIntelligenceFeedComponent } from './market-intelligence-feed.component';

describe('MarketIntelligenceFeedComponent', () => {
  let component: MarketIntelligenceFeedComponent;
  let fixture: ComponentFixture<MarketIntelligenceFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketIntelligenceFeedComponent]
    });
    fixture = TestBed.createComponent(MarketIntelligenceFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
