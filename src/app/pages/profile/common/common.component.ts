import {Component, OnInit} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'profile-Common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommComponent implements OnInit {
  selectedProfile: any;

  constructor(private http: Http, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectedProfile = {
      createDate: '',
      user: '',
      reportCount: '',
      userUpdate: '',
      updateDate: ''
    };
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get('/app/profiles/common?categoryType=normal&type=tbl_currency')
      .map((response: any) => response)
      .subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          let r = res[i];
          if (r.id === id)
            this.selectedProfile = r;
        }

      });
  }

}
