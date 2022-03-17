import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private data: DataService) {}
  getUserdetail() {
    return this.http
      .get('https://6221f3be666291106a185975.mockapi.io/rcs/getUserDetails')
      .toPromise();

    // console.log('init');
  }

  login(body) {
    return this.http
      .post(environment.endPoints.auth + 'general/authenticate', body)
      .toPromise();

    // console.log('init');
  }

  getAllTransactions(searchRequest: any) {
    return this.http
      .post(environment.endPoints.baseUrl + 'getAllTransactions', searchRequest)
      .toPromise();
  }
  getRoboSauce(searchRequest: any) {
    return this.http
      .post(
        environment.endPoints.baseUrl + 'getRoboSauceDetails',
        searchRequest
      )
      .toPromise();
  }
}
