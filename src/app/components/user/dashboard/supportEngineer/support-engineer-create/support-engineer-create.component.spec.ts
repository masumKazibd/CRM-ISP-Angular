import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportEngineerCreateComponent } from './support-engineer-create.component';

describe('SupportEngineerCreateComponent', () => {
  let component: SupportEngineerCreateComponent;
  let fixture: ComponentFixture<SupportEngineerCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportEngineerCreateComponent]
    });
    fixture = TestBed.createComponent(SupportEngineerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
