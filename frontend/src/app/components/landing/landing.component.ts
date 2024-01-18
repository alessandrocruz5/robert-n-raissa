import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  slides = [
    { image: 'assets/images/1.jpg', thumbImage: 'assets/images/1.jpg' },
    { image: 'assets/images/2.jpg', thumbImage: 'assets/images/2.jpg' },
    { image: 'assets/images/3.jpg', thumbImage: 'assets/images/3.jpg' },
    { image: 'assets/images/4.jpg', thumbImage: 'assets/images/4.jpg' },
    { image: 'assets/images/5.jpg', thumbImage: 'assets/images/5.jpg' },
  ];
}
