import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RsvpService } from 'src/app/services/rsvp.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  yOffset = -10;

  constructor(
    private el: ElementRef,
    private rsvp: RsvpService,
    private router: Router
  ) {}

  scrollToElement(key: string) {
    const element = document.querySelector(`#${key}`);
    if (element) {
      // Adjust this value based on your header height
      const y =
        element.getBoundingClientRect().top + window.scrollY + this.yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  goToRsvpForm() {
    this.rsvp.goToRsvpForm();
  }
}
