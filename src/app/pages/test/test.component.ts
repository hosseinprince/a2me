import {Component, OnInit} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-pages-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

  constructor(private http: Http) {
  }

  ngOnInit() {
    console.log('$$$$$$$$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/test');
    this.http.post('/app/status', {u: "sdfsdf", p: "sdfsdf"})
      .map((response: Response) => response)
      .subscribe(res => {
        console.log('res', res);
        if (!!res.status) {
          this.http.post('/app/secret', {u: "sdfsdf", p: "sdfsdf"})
            .map((response: Response) => response)
            .subscribe(res => {
              console.log('res', res);
            });
        }
      });
  }

}
