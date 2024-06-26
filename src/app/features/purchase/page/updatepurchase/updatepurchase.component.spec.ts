import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepurchaseComponent } from './updatepurchase.component';

describe('UpdatepurchaseComponent', () => {
  let component: UpdatepurchaseComponent;
  let fixture: ComponentFixture<UpdatepurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
