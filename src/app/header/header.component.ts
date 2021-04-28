import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from './../login/login.component';
import {AuthService} from './../auth/auth.service';
import {Subscription} from 'rxjs'
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnDestroy{
  isAuthenticated = false;
  showmessage = '';
  user:any;
  subscription = new Subscription();
  constructor(private  dialog:  MatDialog , private authService: AuthService,
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.authService.loginEmitter.subscribe(
     (data => {
      this.isAuthenticated = data.authStatus;
      this.showmessage = data.userLogged;
     })
   ) 
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '250px',
      width: '350px',
    });
  }
  logout() {
    this.authService.logout();
    this._snackBar.open('Signout Sucessful', '',{
      duration: 5000
    });
    this.router.navigate(['/']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
