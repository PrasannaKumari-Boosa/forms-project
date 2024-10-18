import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', 
     loadComponent: () => import('./about/about.component').then((c) => c.AboutComponent)
    },
    {path:'signup', 
    component: SignupComponent},
    {path:'login',
      loadComponent:() => import('./login/login.component').then((c) => c.LoginComponent)
    }
];
