import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdecesComponent } from './listdeces.component';

describe('ListdecesComponent', () => {
  let component: ListdecesComponent;
  let fixture: ComponentFixture<ListdecesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListdecesComponent]
    });
    fixture = TestBed.createComponent(ListdecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
