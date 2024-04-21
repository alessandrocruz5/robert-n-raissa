import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateSliderPosition();
  }

  private updateSliderPosition() {
    const scrollPos =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translate(-${scrollPos}px)`
    );
  }

  ngAfterViewInit() {
    this.updateSliderPosition(); // Update
  }
}
