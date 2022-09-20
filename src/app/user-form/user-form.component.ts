import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

//Error when invalid control is dirty, touched, or submitted.
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    //condition true
    const isSubmitted = form && form.submitted;
    //false
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  check = true;
  constructor(private dialogRef: MatDialogRef<UserFormComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  /*Form*/
  unameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  genderFormControl = new FormControl('', [Validators.required]);
  checkboxFormControl = new FormControl(true);
  matcher = new MyErrorStateMatcher();
}
