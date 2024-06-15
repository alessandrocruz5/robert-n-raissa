import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from 'src/app/services/password.service';
import { fadeOutAnimation } from 'src/app/shared/route-animations';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css'],
  animations: [fadeOutAnimation],
})
export class LockScreenComponent {
  password: string = '';
  message: string = '';
  isUnlocked: boolean = false;

  constructor(private router: Router) {}

  unlockContent() {
    const correctPassword = 'UnliRaisForRobert'; // Replace with your actual password

    if (this.password === correctPassword) {
      this.message = 'Welcome!';
      this.isUnlocked = true;
      setTimeout(() => {
        this.router.navigate(['/landing']);
      }, 1000); // Delay to allow the animation to start
      // this.router.navigate(['/landing']);
    } else {
      this.message = 'Incorrect password. Please try again.';
    }
  }
}
