import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RsvpService } from 'src/app/services/rsvp.service';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
})
export class RsvpComponent {
  constructor(private rsvp: RsvpService) {}

  goToRsvpForm() {
    this.rsvp.goToRsvpForm();
  }
}
