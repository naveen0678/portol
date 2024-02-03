import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl,} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  department: any = [];
  designation: any = [];
  repotingManager: any = [];

  ngOnInit() {
    this.department = [
      { name: 'Software' },
      { name: 'Accountent' },
      { name: 'Technical' },
      { name: ' Production' },
    ];
    this.designation = [
      { name: 'Manager' },
      { name: 'Arcitecture' },
      { name: 'Doctor' },
      { name: 'Engineer' },
    ];
    this.repotingManager = [
      { name: 'Communication' },
      { name: 'Communication' },
      { name: 'Communication' },
      { name: 'Communication' },
    ];
  }
  signupForm: FormGroup;
  submited!: boolean;

  get formControls(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  constructor(private fb: FormBuilder, private _router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.email, Validators.required]],
      workEmail: ['', [Validators.email, Validators.required]],
      mobileNumber: ['', [Validators.minLength(10), Validators.required]],
      employeeId: ['', [Validators.minLength(6), Validators.required]],
      salary: ['', [Validators.minLength(5), Validators.required]],
      department: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      repotingManager: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submited = true;
    if (this.signupForm.invalid) {
      return;
    }
    console.log(this.signupForm.value);
    this._router.navigateByUrl('');
  }
}
