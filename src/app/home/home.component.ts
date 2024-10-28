import { Component } from '@angular/core';
import { TitlcasePipe } from '../titlcase.pipe';
import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitlcasePipe, DatePipe, TitleCasePipe, JsonPipe, LowerCasePipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeTitle = 'HOMECOMPONENT';
  currentDate = new Date();
  person = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA',
    },
  };
}
