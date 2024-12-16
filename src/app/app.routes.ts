import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ProgressFormComponent } from './progress-form/progress-form.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent},
    {path:'progressForm', component: ProgressFormComponent},
    {path:'dynamicForm', component: DynamicFormComponent}


];
