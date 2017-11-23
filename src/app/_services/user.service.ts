import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

import {User} from '../_models/index';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class UserService {
    globalVar: Observable<User[]>;

    constructor(private http: Http,
                private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        let options = new RequestOptions({headers: headers});

        // get users from api
        if (this.globalVar) {
            return this.globalVar;
        }
        return this.http.get('/app/getUser', options)
            .map(function (response: any) {
                this.globalVar = response;
                return this.globalVar;
            });
    }
}
