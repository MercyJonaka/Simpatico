import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  loggedInUser = '';
  loginSource = new Subject<{authStatus: boolean, userLogged: string}>();
  loginEmitter = this.loginSource.asObservable();
  usersDB: Array<{userid: string, password: string, username: string}>= [ 
  {userid : 'abc@media.com' ,password:'abc123', username:'Tom'}, 
  {userid : 'def@media.com', password: 'def123', username:'Tick'}
  ]
  constructor() { }
  isAuthenticated(userid: string, password: string) {
  for(let users of this.usersDB) {  
  if(userid === users.userid && password === users.password) {
    this.loggedIn = true;
    this.loggedInUser = users.username;
    this.loginSource.next({authStatus: this.loggedIn,userLogged:this.loggedInUser})
  }
  }
}

logout(){
  this.loggedIn = false; 
  this.loggedInUser = '';
  this.loginSource.next({authStatus: this.loggedIn,userLogged:this.loggedInUser})
}
}
