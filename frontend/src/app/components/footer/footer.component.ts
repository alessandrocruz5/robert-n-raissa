import { Component, ElementRef } from '@angular/core';
import { RsvpService } from 'src/app/services/rsvp.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private el: ElementRef, private rsvp: RsvpService) {}

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

  toRegistry() {
    document.getElementsByClassName('registry')[0].scrollIntoView({
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
