import {Routes} from "@angular/router";
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {AuthGuard} from './auth/auth.guard'


export const ROUTES:Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },{
    path: 'books',
    component: BookComponent,
    // canActivate: [AuthGuard],
    data: { title: 'Book List' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**',
  redirectTo: 'login'
}
];
