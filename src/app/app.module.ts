import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AuthGuard} from "./_guards/auth.guard";
import {AuthenticationService} from "./_services/authentication.service";
import {UserService} from "./_services/user.service";
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {AuthenticatedHttpService} from "./http-interceptor";
import {Http} from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoute} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoute,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    CookieService,
    {
      provide: Http,
      useClass: AuthenticatedHttpService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
