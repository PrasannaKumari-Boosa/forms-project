import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule
} from '@angular/forms';

import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';
import { MaterialModule } from '../material/material.module';


@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgFor,
    MaterialModule
  ],
  providers: [],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  myform: FormGroup;
  fields:any[]=[]

  constructor(private fb: FormBuilder, private dataservice:DataService) {
    this.myform = this.fb.group({});
  }

  ngOnInit() {
    this.dataservice.getFormData().subscribe((formData) => {
      this.fields = formData.fields;
      this.createForm(this.fields);
    });
  }

 private createForm(fields:any[]):void {
  fields.forEach((field) => {
    const control = new FormControl(field.value, this.getValidators(field));
    this.myform.addControl(field.name, control);
  });
}

  private getValidators(field: any): any[] {

    const validators = [];
    if (field.required) {
      validators.push(Validators.required);
    }
    if (field.minLength) {
      validators.push(Validators.minLength(field.minLength));
    }
    if (field.maxLength) {
      validators.push(Validators.maxLength(field.maxLength));
    }
    if (field.pattern) {
      validators.push(Validators.pattern(field.pattern));
    }
    return validators;
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted',this.myform.value);
      // Submit the form data to the server
    } else {
      console.log('Form is invalid');
    }
  }

}

