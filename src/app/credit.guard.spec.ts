import { TestBed } from '@angular/core/testing';

import { CreditGuard } from './credit.guard';

describe('CreditGuard', () => {
  let guard: CreditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
