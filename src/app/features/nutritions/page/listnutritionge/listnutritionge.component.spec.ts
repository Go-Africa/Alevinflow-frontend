import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnutritiongeComponent } from './listnutritionge.component';

describe('ListnutritiongeComponent', () => {
  let component: ListnutritiongeComponent;
  let fixture: ComponentFixture<ListnutritiongeComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnutritiongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnutritiongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})