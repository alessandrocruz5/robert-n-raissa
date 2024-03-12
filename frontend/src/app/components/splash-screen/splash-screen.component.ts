import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  animations: [
    trigger('fade', [
      state(
        'visible',
        style({
          opacity: 1,
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
        })
      ),
      transition('visible => hidden', animate('1s')),
    ]),
  ],
})
export class SplashScreenComponent implements OnInit {
  windowWidth: string;
  showSplash: boolean = true;
  fadeState = 'visible';

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeState = 'hidden';
      setTimeout(() => {
        document.getElementById('splash-screen-container')?.remove();
      }, 800);
    }, 1500);
  }
}
