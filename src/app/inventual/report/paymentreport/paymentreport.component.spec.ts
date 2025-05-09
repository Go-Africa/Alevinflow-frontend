import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentreportComponent } from './paymentreport.component';

describe('PaymentreportComponent', () => {
  let component: PaymentreportComponent;
  let fixture: ComponentFixture<PaymentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
