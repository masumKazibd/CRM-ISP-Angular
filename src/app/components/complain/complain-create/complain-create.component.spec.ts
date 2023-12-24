import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainCreateComponent } from './complain-create.component';

describe('ComplainCreateComponent', () => {
  let component: ComplainCreateComponent;
  let fixture: ComponentFixture<ComplainCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplainCreateComponent]
    });
    fixture = TestBed.createComponent(ComplainCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
