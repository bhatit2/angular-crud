import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AppService
  ]
})
export class AppComponent implements OnInit {
  title = 'bloggingApp';
  res: any;
  data;
  constructor(private appService: AppService) { }
  ngOnInit() {

  }
  getData() {
    this.appService.getData().subscribe(res => {
      this.data = res;
      this.res = JSON.stringify(res);
    });
  }

  postData() {
    this.appService.postData().subscribe(res => {
      this.res = JSON.stringify(res);
    });
  }

  putData() {
    this.appService.putData().subscribe(res => {
      this.res = JSON.stringify(res);
    });
  }

  deleteData() {
    this.appService.deleteData().subscribe(res => {
      this.res = JSON.stringify(res);
    });
  }

}
