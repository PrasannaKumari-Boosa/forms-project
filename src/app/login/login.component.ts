import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './customDirective';
import { colorCustomDirective } from './colorCustomDirective';
import { HostBindingDirective } from './hostBindingDirective';
import {
  FormControlDirective,
  FormControlName,
  NgForm,
  NgModel,
  FormGroup,
  FormControl,
  FormGroupDirective,
  FormArray,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  });

  submitForm() {
    console.log(this.loginForm.value);
  }
}
