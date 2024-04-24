import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  slides = [
    { img: 'assets/images/location/st. benedict.jpg' },
    { img: 'assets/images/location/balay dako.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}

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
    lazyLoad: 'ondemand',
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
        breakpoint: 768,
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
        breakpoint: 480,
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
