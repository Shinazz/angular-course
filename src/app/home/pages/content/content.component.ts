import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  name = 'shinaz';
  constructor(
    private data: DataService,
    private http: HttpClient,
    private api: ApiService
  ) {}

  async ngOnInit() {
    const response = await this.api
      .getAllTransactions({
        custEmail: '5806546295@cred.ai',
      })
      .catch((err) => {
        console.log('error');
      });
    console.log(response);
    this.name = this.data.userName;
  }
}
