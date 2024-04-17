import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  linkColor = '#E1C565';

  isSticky: boolean = false;

  menuValue: boolean = false;
  menuIcon: string = 'bi bi-list';

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.scrollY > 0.1;
  }

  toggleMenu() {
    this.menuValue = !this.menuValue;
    this.menuIcon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuValue = false;
    this.menuIcon = 'bi bi-list';
  }

  toWelcome() {
    document.getElementsByClassName('welcome')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toEntourage() {
    document.getElementsByClassName('entourage')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toDressCode() {
    document.getElementsByClassName('dress-code')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toLocation() {
    document.getElementsByClassName('location')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toRegistry() {
    document.getElementsByClassName('registry')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toRSVP() {
    document.getElementsByClassName('rsvp')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  toContact() {
    document.getElementsByClassName('contact')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
