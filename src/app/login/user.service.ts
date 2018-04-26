import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Urls} from '../../../config/api_url'

@Injectable()

export class UserService {
  
    constructor(private http: HttpClient,) { }
 
  
    isLoggedIn() {
      // post these details to API server return user info if correct
      // return this.http.get('http://localhost:3000/api/isloggedIn')
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
      return this.http.get(Urls.isloggedIn)
     
    }
  
  }
