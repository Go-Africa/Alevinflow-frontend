import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsupplierComponent } from './detailsupplier.component';

describe('DetailsupplierComponent', () => {
  let component: DetailsupplierComponent;
  let fixture: ComponentFixture<DetailsupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsupplierComponent]
    });
    fixture = TestBed.createComponent(DetailsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
