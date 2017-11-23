import {Component, OnInit} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-pages-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(private http: Http) {
  }

  ngOnInit() {
    console.log('$$$$$$$$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/profile');
  }

}
