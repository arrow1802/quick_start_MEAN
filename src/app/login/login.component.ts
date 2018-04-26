import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {AuthService} from '../auth/auth.service'
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { username:'', password:'' };
  message = '';
  data: any;
  user:any;
  cookie_data :any;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private Auth: AuthService,
    private _cookieService:CookieService
  ) { }

  ngOnInit() {
    // this._cookieService.put('user','user1|asd@123|books|booksdata')
    // this.cookie_data=this._cookieService.get('user')
    // console.log(this.cookie_data.split("|")[2] )
    // this.loginData.username=this.cookie_data.split("|")[0]
    // this.loginData.password=this.cookie_data.split("|")[1]
    // this.router.navigate([this.cookie_data.split("|")[2]]);
    
  }

  login() {
    console.log("logindata",this.loginData)
    this.Auth.getUserDetails(this.loginData).subscribe(resp => {
      this.data = resp;
      if(this.data.success){
        this.Auth.setLoggedIn(true)
        console.log("data",this.data)
        this.user = this.data.user;
        localStorage.setItem('userToken', this.data.token);
        // localStorage.setItem('user', this.data.user);
        this.router.navigate(['dashboard']);
      }
      // localStorage.setItem(setdata)
      
    }, err => {
      this.message = err.error.message;
    });
   

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
