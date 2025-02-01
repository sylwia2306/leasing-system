import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { AskAboutPriceComponent } from './ask-about-price/ask-about-price.component';

export const routes: Routes = [
    { path:'', component: HomePageComponent },
    { path: 'about-us', component: AboutUsComponent},
    { path: 'ask-about-price', component: AskAboutPriceComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo:'', pathMatch:'full'}
];
