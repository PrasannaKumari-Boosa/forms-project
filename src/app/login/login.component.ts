import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './customDirective';
import { colorCustomDirective } from './colorCustomDirective';
import { HostBindingDirective } from './hostBindingDirective';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private router:Router){}

    emailInputField = new FormControl('',[Validators.required, Validators.email])
    passwordField = new FormControl('',[Validators.required, Validators.minLength(4)])

   loginForm:FormGroup  = new FormGroup({

    email : this.emailInputField,
    password : this.passwordField

   })



  submitForm() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }

  }
}
