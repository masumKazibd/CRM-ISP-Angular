import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageIndexComponent } from './package-index.component';

describe('PackageIndexComponent', () => {
  let component: PackageIndexComponent;
  let fixture: ComponentFixture<PackageIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageIndexComponent]
    });
    fixture = TestBed.createComponent(PackageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
