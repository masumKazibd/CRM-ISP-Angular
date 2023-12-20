import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackageCreateComponent } from './user-package-create.component';

describe('UserPackageCreateComponent', () => {
  let component: UserPackageCreateComponent;
  let fixture: ComponentFixture<UserPackageCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPackageCreateComponent]
    });
    fixture = TestBed.createComponent(UserPackageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
