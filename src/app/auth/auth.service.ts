import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    console.log(this.loggedInStatus,value)
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    console.log("isLoggedIn",this.loggedInStatus)
    return this.loggedInStatus
  }

  getUserDetails(loginData) {
    // post these details to API server return user info if correct
    return this.http.post('/api/signin',loginData)
  }

}
