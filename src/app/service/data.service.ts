import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _accToken: string;
  public get accToken(): string {
    return this._accToken;
  }
  public set accToken(value: string) {
    this._accToken = value;
  }

  public get userName(): string {
    return sessionStorage.getItem('name');
  }
  public set userName(value: string) {
    sessionStorage.setItem('name', value);
  }

  constructor() {}
}
