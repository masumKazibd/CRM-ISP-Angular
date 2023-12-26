import { TestBed } from '@angular/core/testing';

import { PackagelistService } from './packagelist.service';

describe('PackagelistService', () => {
  let service: PackagelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
