import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: Http,private router: Router) {
    // set token if saved in local storage
    // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post('/app/login', {username: username, password: password})
      .map((response: any) => {
        // login successful if there's a jwt token in the response
        let status = response.token;
        if (status) {
          // localStorage.setItem('currentUser', JSON.stringify({username: username, token: status}));
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout():  Observable<boolean> {
    return this.http.post('/app/logout',{})
      .map((response: Response) => {
        this.router.navigate(['/login']);
        return true;
      });
  }
}
