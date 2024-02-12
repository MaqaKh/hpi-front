import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickSliderComponent } from './slick-slider.component';

describe('SlickSliderComponent', () => {
  let component: SlickSliderComponent;
  let fixture: ComponentFixture<SlickSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlickSliderComponent]
    });
    fixture = TestBed.createComponent(SlickSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
