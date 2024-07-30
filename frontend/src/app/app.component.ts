import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeOutAnimation } from './shared/route-animations';
import { PasswordService } from './services/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeOutAnimation],
})
export class AppComponent {
  title = 'Robert & Raissa';

  images = [
    {
      imageSrc: 'assets/images/1 hd.jpg',
      imageAlt: 'r&r1',
    },
    {
      imageSrc: 'assets/images/2 hd.jpg',
      imageAlt: 'r&r2',
    },
    {
      imageSrc: 'assets/images/3 hd.jpg',
      imageAlt: 'r&r3',
    },
    {
      imageSrc: 'assets/images/4 hd.jpg',
      imageAlt: 'r&r4',
    },
    {
      imageSrc: 'assets/images/5 hd.jpg',
      imageAlt: 'r&r5',
    },
  ];

  constructor(public passwordService: PasswordService) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
