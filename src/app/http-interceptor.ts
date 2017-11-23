import {Injectable} from '@angular/core';
import {Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';
import {observable} from "rxjs/symbol/observable";


@Injectable()
export class AuthenticatedHttpService extends Http {

  constructor(private router: Router, backend: XHRBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options)
      .map(data => {
        try {
          let res = data.json();
          console.log('server data:', res);
          if (res.status === 'error') {
            console.log('error', res.status);
            this.router.navigate(['/login']);
          }
          else return res;
        }
        catch(e){

        }
      })
      .catch((error: Response) => {
        if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
          console.log('The authentication session expires or the user is not authorised. Force refresh of the current page.');
          this.router.navigate(['/login']);
        }
        console.log(error);
        return Observable.throw(error);
      });
  }
}
