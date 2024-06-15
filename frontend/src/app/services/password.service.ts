import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private password = 'UnliRaisForRobert';
  private isLocked = true;

  unlock(password: string): boolean {
    if (password === this.password) {
      this.isLocked = false;
      return true;
    }
    return false;
  }

  isScreenLocked(): boolean {
    return this.isLocked;
  }

  setScreenLock(lock: boolean): void {
    this.isLocked = lock;
  }
}
