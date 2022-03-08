import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  name = 'shinaz';
  constructor(private data: DataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(environment.endpoint + '/getUserDetails').subscribe((res) => {
      console.log(res);
    });
    console.log('init');
    this.name = this.data.userName;
  }
}
