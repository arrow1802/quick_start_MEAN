import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {ROUTES} from "./app.routes";
import {AuthService} from './auth/auth.service'
import {AuthGuard} from './auth/auth.guard'
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './login/user.service';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from './components/charts/flotChart';
import { IboxtoolsModule } from './components/common/iboxtools/iboxtools.module';
import { PeityModule } from './components/charts/peity';
import { SparklineModule } from './components/charts/sparkline';
import { JVectorMapModule } from './components/map/jvectorMap';

import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ChartsModule, 
    FlotModule,
    IboxtoolsModule,
    PeityModule,
    SparklineModule,
    JVectorMapModule
  ],
  providers: [AuthGuard,AuthService,UserService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
