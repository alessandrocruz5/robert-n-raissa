import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { lockScreenGuard } from './lock-screen.guard';

describe('lockScreenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => lockScreenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
