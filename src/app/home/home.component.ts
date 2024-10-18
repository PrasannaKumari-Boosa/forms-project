import { Component } from '@angular/core';
import { TitlcasePipe } from '../titlcase.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitlcasePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
homeTitle = "homecomponent"
}
