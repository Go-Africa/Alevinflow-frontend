import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnutritiongeComponent } from './addnutritionge.component';

describe('AddnutritiongeComponent', () => {
  let component: AddnutritiongeComponent;
  let fixture: ComponentFixture<AddnutritiongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnutritiongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnutritiongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});