import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBinding]',
  standalone: true
})
export class HostBindingDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('class.active') isActive: boolean;

  constructor() {
    this.backgroundColor = 'yellow'; // Binds the initial background color
    this.isActive = false;           // Binds the initial class state
  }

  @HostListener('click') onClick() {
    this.backgroundColor = this.backgroundColor === 'yellow' ? 'blue' : 'yellow';
    this.isActive = !this.isActive;
  }
}
