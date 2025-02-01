import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom 
})
export class AboutUsComponent {

}
