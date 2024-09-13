import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseIn() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'purple')
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'skyblue')
  }
}
