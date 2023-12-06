import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainEditComponent } from './complain-edit.component';

describe('ComplainEditComponent', () => {
  let component: ComplainEditComponent;
  let fixture: ComponentFixture<ComplainEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplainEditComponent]
    });
    fixture = TestBed.createComponent(ComplainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
