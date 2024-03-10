import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
})
export class RsvpComponent {
  isHidden = true;
  rsvpForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.rsvpForm = this.fb.group({
      _id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      address: ['', Validators.required],
      dietaryRestrictions: [''],
      plusOne: [''],
      // yPlusOne: [''],
      // nPlusone: [''],
      p1FirstName: [''],
      p1LastName: [''],
    });
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }

  onSubmit() {
    const formData = this.rsvpForm.value;

    this.http.post('http://localhost:1217/api/newForm', formData).subscribe(
      (res) => {
        console.log('RSVP Submitted!', res);
      },
      (err) => {
        console.error(err);
      }
    );

    this.rsvpForm.reset();
    alert('Thank you for submitting your RSVP!');
  }
}
