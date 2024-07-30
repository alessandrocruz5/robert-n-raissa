import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { PasswordService } from '../services/password.service';

export const parentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const passwordService = inject(PasswordService);

  if (passwordService.isScreenLocked()) {
    router.navigate(['/password']);
    return false;
  }
  return true;
};

export const AutoLoginGuard: CanActivateChildFn = (route, state) => {
  const router = inject(Router);
  const passwordService = inject(PasswordService);

  if (!passwordService.isScreenLocked()) {
    router.navigate(['/landing']);
    return false;
  }
  return true;
};
