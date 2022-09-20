import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AngularMaterialModule } from './material.module';
@NgModule({
  declarations: [AppComponent, UserFormComponent],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserFormComponent],
})
export class AppModule {}
