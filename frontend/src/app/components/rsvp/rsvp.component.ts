import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
})
export class RsvpComponent {
  isHidden = true;

  constructor(private fb: FormBuilder) {}

  rsvpForm = this.fb.group({
    _id: [null],
    firstName: [''],
    lastName: [''],
    phoneNo: [''],
    email: [''],
    address: [''],
    dietaryRestrictions: [''],
    plusOne: [''],
    // yPlusOne: [''],
    // nPlusone: [''],
    p1FirstName: [''],
    p1LastName: [''],
  });

  toggle() {
    this.isHidden = !this.isHidden;
  }

  onSubmit() {
    console.log(this.rsvpForm.value);
  }
}
