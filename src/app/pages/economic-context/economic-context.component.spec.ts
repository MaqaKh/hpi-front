import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicContextComponent } from './economic-context.component';

describe('EconomicContextComponent', () => {
  let component: EconomicContextComponent;
  let fixture: ComponentFixture<EconomicContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EconomicContextComponent]
    });
    fixture = TestBed.createComponent(EconomicContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
