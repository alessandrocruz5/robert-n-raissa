import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  linkColor = '#E1C565';

  scrollTop = 0;
  scrollOffset = 1000;
  isSticky: boolean = false;

  menuValue: boolean = false;
  menuIcon: string = 'bi bi-list';

  yOffset = -10;

  @ViewChild('entourage') entourage: ElementRef;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const dynamicOffset = this.scrollOffset - window.innerHeight * 0.5;

    this.isSticky =
      (window.scrollY || document.documentElement.scrollTop || 0) >
      dynamicOffset;
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
