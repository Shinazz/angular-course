import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { DataService } from 'src/app/service/data.service';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  email: string = 'vipin';
  loginForm: FormGroup;
  isRequired = true;
  constructor(
    private router: Router,
    private data: DataService,
    private http: HttpClient,
    private api: ApiService,

    private dialog: DialogService
  ) {}

  ngOnInit(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngAfterViewInit(): void {}

  clicked() {
    // console.log(this.email);
    this.data.userName = this.email;
    this.router.navigate(['home', 'content']);
  }
  async onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.controls['email']);
    this.data.userName = this.email;

    const request = {
      username: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };

    try {
      const res: any = await this.api.login(request);
      console.log(res);
      this.data.accToken = res.response.tkn.accToken;

      const something = this.parseJwt(this.data.accToken);

      console.log(something['cognito:groups'][0]);

      localStorage.setItem('tkn', res.response.tkn.accToken);
      localStorage.setItem('role', something['cognito:groups'][0]);

      if (res) this.router.navigate(['home', 'content']);
    } catch (err) {
      this.dialog.openAlertBox('Error', 'UserName invalid');
      console.log(err);
    }
  }

  parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
}
