import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[autoScale]'
})
export class AutoScaleDirective implements OnInit {
  private baseWidth = 1600; // Your design width
  private minScale = 0.8;
  private maxScale = 1.4;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.scaleView();
  }

  @HostListener('window:resize')
  onResize() {
    this.scaleView();
  }

  private scaleView() {
    const screenWidth = window.innerWidth;
    const scale = Math.min(this.maxScale, Math.max(this.minScale, screenWidth / this.baseWidth));

    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
    this.renderer.setStyle(this.el.nativeElement, 'transformOrigin', 'top center');
  }
}
