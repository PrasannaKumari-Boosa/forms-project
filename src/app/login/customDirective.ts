import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostListener('click') onClick() {
    console.log('Host element clicked!');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered the host element!');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse left the host element!');
  }
}
