import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAreasComponent } from './popular-areas.component';

describe('PopularAreasComponent', () => {
  let component: PopularAreasComponent;
  let fixture: ComponentFixture<PopularAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularAreasComponent]
    });
    fixture = TestBed.createComponent(PopularAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
