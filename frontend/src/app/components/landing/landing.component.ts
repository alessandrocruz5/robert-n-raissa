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
export class LandingComponent implements AfterViewInit {
  @Input() images: carouselImage[] = [];
  @ViewChild('slidesContainer') slidesContainer: ElementRef;

  slides = [
    { url: 'assets/images/1.jpg', alt: 'Slide 1' },
    { url: 'assets/images/2.jpg', alt: 'Slide 2' },
    { url: 'assets/images/3.jpg', alt: 'Slide 3' },
    { url: 'assets/images/4.jpg', alt: 'Slide 4' },
    { url: 'assets/images/5.jpg', alt: 'Slide 5' },
  ];

  private currIndex = 0;

  ngAfterViewInit(): void {
    this.animateCarousel();
  }

  animateCarousel() {
    const slidesContainer = this.slidesContainer.nativeElement;
    const slidesWidth = slidesContainer.scrollWidth / this.slides.length;

    fromEvent(slidesContainer, 'scroll')
      .pipe(
        debounceTime(100),
        map(() => slidesContainer.scrollLeft),
        map((scrollLeft) => Math.round(scrollLeft / slidesWidth)),
        distinctUntilChanged()
      )
      .subscribe((index) => {
        this.currIndex = index;
        this.slideTo(index);
      });
  }

  slideTo(index: number) {
    const slidesContainer = this.slidesContainer.nativeElement;
    const slideWidth = slidesContainer.scrollWidth / this.slides.length;
    slidesContainer.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
  }
}
