import { Component, OnInit, importProvidersFrom } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
  FormsModule
} from '@angular/forms';

import { DataService } from '../data.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgFor,
    MaterialModule,
    HttpClientModule
    ],
  providers: [
    DataService
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit{

  myform: FormGroup;
  fields:any[]=[]
  progress:number = 0;

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
  this.myform.statusChanges.subscribe(() => {
    this.updateProgress();
  });
}
updateProgress() {
  const totalFields =this.fields.length;
  const completedFields = Object.keys(this.myform.controls).filter(
    (key) => this.myform.get(key)?.valid
  ).length;
  this.progress = Math.round((completedFields / totalFields) * 100);
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

