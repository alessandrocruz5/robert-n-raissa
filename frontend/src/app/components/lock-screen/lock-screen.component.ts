import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from 'src/app/services/password.service';
import {
  fadeOutAnimation,
  lockScreenAnimation,
} from 'src/app/shared/route-animations';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css'],
  animations: [fadeOutAnimation, lockScreenAnimation],
})
export class LockScreenComponent {
  password: string = '';
  message: string = '';
  isUnlocked: boolean = false;

  constructor(
    private router: Router,
    private passwordService: PasswordService
  ) {}

  unlockContent() {
    if (this.passwordService.unlock(this.password)) {
      this.message = 'Welcome!';
      this.isUnlocked = true;
      setTimeout(() => {
        this.router.navigate(['/landing']);
      }, 1000); // Delay to allow the animation to start
      // this.router.navigate(['/landing']);
    } else {
      alert(`hint: it's the wedding hashtag without the hashtag`);
      this.password = '';
      this.isUnlocked = false;
    }
  }
}
