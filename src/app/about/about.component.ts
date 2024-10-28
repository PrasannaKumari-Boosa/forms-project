import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AboutComponent {

  aboutTitle = "This is About Component content"
}
