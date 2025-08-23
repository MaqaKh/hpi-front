import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickActionTilesComponent } from './quick-action-tiles.component';

describe('QuickActionTilesComponent', () => {
  let component: QuickActionTilesComponent;
  let fixture: ComponentFixture<QuickActionTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickActionTilesComponent]
    });
    fixture = TestBed.createComponent(QuickActionTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
