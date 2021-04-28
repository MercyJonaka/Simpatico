import { Component, OnInit ,Inject, Injectable} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar';
import {HeaderComponent} from './../header/header.component';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginInvalid = false;
  form: FormGroup
  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data:  any , 
    public authService: AuthService ,private _snackBar: MatSnackBar,
    private router: Router) {
    this.form = new FormGroup({
      'username' : new FormControl('', [Validators.email,Validators.required]),
      'password': new FormControl('',Validators.required)
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.valid) {
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        this.authService.isAuthenticated(username,password);
        if(this.authService.loggedIn) {
          this.loginInvalid = false; 
          this.dialogRef.close();
          this._snackBar.open('Logged In Sucessfully', '',{
            duration: 5000
          });
        }else {
          this.loginInvalid = true;
          this._snackBar.open('User not Recognized to Signin', '',{
            duration: 5000
          });
          this.dialogRef.close();
          this.router.navigate(['/']);
        }
    } 
}
onNoClick(): void {
  this.dialogRef.close();
}
}
