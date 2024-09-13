import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[setBackGround]'
})
export class SetBackGroundDirective {
  @Input('setBackGround') bgColor: any;

  constructor(private element: ElementRef, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.bgColor;
    this.element.nativeElement.style.color = 'gray';
  }

}
