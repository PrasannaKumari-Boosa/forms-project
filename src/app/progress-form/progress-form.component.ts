import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-progress-form',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule,NgIf
  ],
  templateUrl: './progress-form.component.html',
  styleUrl: './progress-form.component.css',
})
export class ProgressFormComponent {
  title = 'AngularProject';
  progress = 0;
  myform: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      documentType: new FormControl('', [Validators.required]),
      documentName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(32),
      ]),
      category: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]),
    });

    this.myform.valueChanges.subscribe(() => {
      this.updateProgress();
    });
  }

  updateProgress() {
    const totalFields = Object.keys(this.myform.controls).length;
    const completedFields = Object.values(this.myform.controls).filter(
      (control) => control.valid
    ).length;
    this.progress = (completedFields / totalFields) * 100;
  }
  onSubmit() {
    if (this.myform.valid) {
      alert("Your Form is successfully submitted ")
      console.log('Form Submitted', this.myform.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
