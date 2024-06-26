import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpurchaseComponent } from './listpurchase.component';

describe('ListpurchaseComponent', () => {
  let component: ListpurchaseComponent;
  let fixture: ComponentFixture<ListpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})

