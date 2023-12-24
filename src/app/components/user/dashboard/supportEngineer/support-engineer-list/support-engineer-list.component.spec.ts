import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportEngineerListComponent } from './support-engineer-list.component';

describe('SupportEngineerListComponent', () => {
  let component: SupportEngineerListComponent;
  let fixture: ComponentFixture<SupportEngineerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportEngineerListComponent]
    });
    fixture = TestBed.createComponent(SupportEngineerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
