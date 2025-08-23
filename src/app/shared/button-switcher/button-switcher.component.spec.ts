import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSwitcherComponent } from './button-switcher.component';

describe('ButtonSwitcherComponent', () => {
  let component: ButtonSwitcherComponent;
  let fixture: ComponentFixture<ButtonSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSwitcherComponent]
    });
    fixture = TestBed.createComponent(ButtonSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
