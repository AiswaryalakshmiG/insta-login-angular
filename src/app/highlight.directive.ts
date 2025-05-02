import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'all 0.1s ease';
  }

  @HostListener('mouseenter') onMouseEnter() {  
    this.el.nativeElement.style.backgroundColor = '#1c4e7b';
    this.el.nativeElement.style.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '#2d6ca7';
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}

