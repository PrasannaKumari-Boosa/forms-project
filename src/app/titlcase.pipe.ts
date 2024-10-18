import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlcase',
  standalone: true
})
export class TitlcasePipe implements PipeTransform {

  transform(value:string): string {
    if(!value) return value;

    return value.toLowerCase().split(' ').map(word => {
      word.charAt(0).toUpperCase + word.slice(1)
    }).join(' ')
  }

}
