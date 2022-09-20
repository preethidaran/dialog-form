import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { UserFormComponent } from './user-form/user-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formDialog!: MatDialogRef<UserFormComponent>;
  constructor(private dialogModel : MatDialog){}

  open(){
    this.formDialog = this.dialogModel.open(UserFormComponent);
  }
}
