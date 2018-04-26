import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component'
import { map } from 'rxjs/operators'
import { UserService} from '../login/user.service';

interface isLoggedIn {
  success: boolean,
  message: string
}


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,
              private router:Router,
              private user:UserService 
  ){}
  message = '';
  data: any;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // return false;
    // return this.user.isLoggedIn.apply(map(res => {
    //   if(res) {
    //     this.auth.setLoggedIn(true)
    //     return true
    //   } else {
    //     this.router.navigate(['login'])
    //     return false
    //   }
    if (localStorage.getItem('userToken') != null)
    {return true;}
    this.router.navigate(['/login']);
    {return false;}

    // if(this.auth.isLoggedIn){
    //   console.log("guard if " ,this.user.isLoggedIn)
    //   return true
    // } else {
    //   console.log("guard else " ,this.auth.isLoggedIn)
    //   this.router.navigate(['login']);
    //   return false
    // }
   

  }
}
