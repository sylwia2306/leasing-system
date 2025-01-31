import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { AskAboutPriceComponent } from "./ask-about-price/ask-about-price.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, FooterComponent, AboutUsComponent, LoginComponent, AskAboutPriceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'leasing-system';
}
