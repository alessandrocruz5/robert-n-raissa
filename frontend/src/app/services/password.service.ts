import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private storageKey = 'screen-lock-expiration'; // Define the key used in localStorage

  unlock(password: string): boolean {
    const correctPassword = 'UnliRaisForRobert'; // Your correct password
    if (password === correctPassword) {
      // Set expiration time to a distant future (e.g., 1 hour from now)
      const expirationTime = new Date().getTime() + 3600000; // 1 hour = 3600000 ms
      localStorage.setItem(this.storageKey, expirationTime.toString());
      return true;
    }
    return false;
  }

  isScreenLocked(): boolean {
    const expirationTimeStr = localStorage.getItem(this.storageKey);
    if (expirationTimeStr) {
      const expirationTime = parseInt(expirationTimeStr, 10);
      if (!isNaN(expirationTime)) {
        const currentTime = new Date().getTime();
        return currentTime >= expirationTime; // Locked if currentTime is greater than or equal to expirationTime
      }
    }
    return true; // Default to locked if there's no valid expirationTime
  }
}
