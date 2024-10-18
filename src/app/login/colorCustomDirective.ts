import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customColor]',    // Selector to be used as an attribute in HTML
  standalone: true 
})
export class colorCustomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Listen for mouse enter event and change background color
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');
  }

  // Listen for mouse leave event and reset background color
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('transparent');
  }

  // Method to change the background color
  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
