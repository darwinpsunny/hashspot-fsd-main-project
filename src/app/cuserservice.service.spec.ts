import { TestBed } from '@angular/core/testing';

import { CuserserviceService } from './cuserservice.service';

describe('CuserserviceService', () => {
  let service: CuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
