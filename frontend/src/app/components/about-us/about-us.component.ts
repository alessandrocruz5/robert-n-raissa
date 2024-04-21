import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  slides = [
    { img: 'assets/images/welcome.jpg' },
    { img: 'assets/images/R&I_351.JPG' },
    { img: 'assets/images/R&I_050 (1).JPG' },
    { img: 'assets/images/R&I_163.JPG' },
    { img: 'assets/images/R&I_446.JPG' },
  ];

  // { img: 'assets/images/5 hd.jpg' },

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
