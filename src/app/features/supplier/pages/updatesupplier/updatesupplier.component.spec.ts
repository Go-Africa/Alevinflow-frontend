import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesupplierComponent } from './updatesupplier.component';

describe('UpdatesupplierComponent', () => {
  let component: UpdatesupplierComponent;
  let fixture: ComponentFixture<UpdatesupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatesupplierComponent]
    });
    fixture = TestBed.createComponent(UpdatesupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
