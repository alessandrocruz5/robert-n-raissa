import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  goToRsvpForm() {
    this.doc.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSfdF5HsMv-UlYGOzYX5psfd4n-fLbhNYihNfeHi3lveMCfxxQ/viewform';
  }
}
