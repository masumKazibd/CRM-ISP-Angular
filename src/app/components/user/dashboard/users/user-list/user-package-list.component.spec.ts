import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackageListComponent } from './user-package-list.component';

describe('UserPackageListComponent', () => {
  let component: UserPackageListComponent;
  let fixture: ComponentFixture<UserPackageListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPackageListComponent]
    });
    fixture = TestBed.createComponent(UserPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
