import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcustomerComponent } from './detailcustomer.component';

describe('DetailcustomerComponent', () => {
  let component: DetailcustomerComponent;
  let fixture: ComponentFixture<DetailcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcustomerComponent]
    });
    fixture = TestBed.createComponent(DetailcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
