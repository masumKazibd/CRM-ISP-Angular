import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainIndexComponent } from './complain-index.component';

describe('ComplainIndexComponent', () => {
  let component: ComplainIndexComponent;
  let fixture: ComponentFixture<ComplainIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplainIndexComponent]
    });
    fixture = TestBed.createComponent(ComplainIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
