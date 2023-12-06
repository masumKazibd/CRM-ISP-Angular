import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityIndexComponent } from './city-index.component';

describe('CityIndexComponent', () => {
  let component: CityIndexComponent;
  let fixture: ComponentFixture<CityIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityIndexComponent]
    });
    fixture = TestBed.createComponent(CityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
