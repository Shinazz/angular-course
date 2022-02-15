import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public get userName(): string {
    return sessionStorage.getItem('name');
  }
  public set userName(value: string) {
    sessionStorage.setItem('name', value);
  }

  constructor() {}
}
