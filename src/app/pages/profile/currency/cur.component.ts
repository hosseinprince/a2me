import {Component, OnInit} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'profile-cur',
  templateUrl: './cur.component.html',
  styleUrls: ['./cur.component.css']
})
export class CurComponent implements OnInit {
  currencies: any;
  profileItems: any;
  filters: any;

  constructor(private http: Http, private route: ActivatedRoute) {
  }


  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  disableDialog() {
    this.display = false;
  }

  ngOnInit() {
    let i = 0, j = 0, currency = {};
    this.profileItems = [];



    let id = this.route.snapshot.paramMap.get('id');
    this.http.post('/app/profiles/getCurrencies', ["tbl_currency"])
      .map((response: any) => response)
      .subscribe(res => {
        this.currencies = res;
        for (j = 0; j < this.currencies.length; j++) {
          let currency = this.currencies[j];
          currency.chosen = false;
          currency.selected = false;
        }
      });

    this.http.get('/app/profiles/items?id=' + id + '&type=tbl_currency')
      .map((response: any) => response)
      .subscribe(res => {
        this.profileItems = res[0].items;
        this.filters = this.profileItems[0].filters;
        if (this.filters) {
          let items = this.filters[0].value;
          for (i = 0; i < items.length; i++) {
            let itemId = items[i];
            for (j = 0; j < this.currencies.length; j++) {
              let currency = this.currencies[j];
              if (itemId === currency.id) {
                currency.chosen = true;//یعنی در پروفایل آیتم وجود دارد
                this.profileItems.push(currency);
              }
            }
          }
        }
      });
  }

}
