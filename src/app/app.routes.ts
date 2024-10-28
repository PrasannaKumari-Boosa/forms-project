import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent},
    {path:'layout', component: LayoutComponent,
      children:[
        {path:'home', component: HomeComponent},
        {path:'about', component: AboutComponent},
        {path:'contact', 
        loadComponent: () => import('./contact/contact.component').then((c) => c.ContactComponent)
       }
      ]
    }

];
