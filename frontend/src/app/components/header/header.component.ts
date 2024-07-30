import { Component } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuValue: boolean = false;
  menuIcon: string = 'bi bi-list';

  yOffset = -10;

  constructor(private rsvp: RsvpService) {}

  scrollToElement(key: string) {
    const element = document.querySelector(`#${key}`);
    if (element) {
      // Adjust this value based on your header height
      const y =
        element.getBoundingClientRect().top + window.scrollY + this.yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  toggleMenu() {
    this.menuValue = !this.menuValue;
    this.menuIcon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuValue = false;
    this.menuIcon = 'bi bi-list';
  }

  goToRsvpForm() {
    this.rsvp.goToRsvpForm();
  }
}
