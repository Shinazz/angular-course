import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  getUserdetail() {
    this.http.get(
      'https://6221f3be666291106a185975.mockapi.io/rcs/getUserDetails'
    );

    console.log('init');
  }
}
