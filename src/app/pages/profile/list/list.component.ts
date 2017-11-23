import {Component, OnInit} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-pages-profile-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  profiles: any;

  constructor(private http: Http) {

  }

  ngOnInit() {
    let a = 4;
    let b = 2;
    this.http.get('/app/profiles/common?categoryType=normal&type=tbl_currency')
      .map((response: Response) => response)
      .subscribe(res => {
        console.log('res', res);
        this.profiles = res;

      });
  }

}
