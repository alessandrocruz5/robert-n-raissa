import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RsvpService } from 'src/app/services/rsvp.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(
    private el: ElementRef,
    private rsvp: RsvpService,
    private router: Router
  ) {}

  toLanding() {
    document.getElementsByClassName('landing')[0].scrollIntoView({
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

  // toLocation() {
  //   this.router.navigate(['/location']);
  // }

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

  toAboutUs() {
    document.getElementsByClassName('about-us')[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  goToRsvpForm() {
    this.rsvp.goToRsvpForm();
  }
}
