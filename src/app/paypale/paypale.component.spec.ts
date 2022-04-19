import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypaleComponent } from './paypale.component';

describe('PaypaleComponent', () => {
  let component: PaypaleComponent;
  let fixture: ComponentFixture<PaypaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
