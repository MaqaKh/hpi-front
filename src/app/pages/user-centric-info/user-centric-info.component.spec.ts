import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCentricInfoComponent } from './user-centric-info.component';

describe('UserCentricInfoComponent', () => {
  let component: UserCentricInfoComponent;
  let fixture: ComponentFixture<UserCentricInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCentricInfoComponent]
    });
    fixture = TestBed.createComponent(UserCentricInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
