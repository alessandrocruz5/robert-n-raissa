import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

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
}
