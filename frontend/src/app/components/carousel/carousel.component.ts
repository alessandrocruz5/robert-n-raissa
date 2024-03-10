import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  slides = [
    { img: 'assets/images/1.jpg' },
    { img: 'assets/images/2.jpg' },
    { img: 'assets/images/3.jpg' },
    { img: 'assets/images/4.jpg' },
    { img: 'assets/images/5.jpg' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 3000,
          infinite: true,
          speed: 1000,
          fade: true,
          cssEase: 'linear',
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 3000,
          infinite: true,
          speed: 1000,
          fade: true,
          cssEase: 'linear',
          arrows: false,
        },
      },
    ],
  };
}
