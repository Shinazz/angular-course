import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { DataService } from 'src/app/service/data.service';

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
    private api: ApiService
  ) {}

  ngOnInit(): void {
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
      console.log(this.data.accToken);
      localStorage.setItem('tkn', res.response.tkn.accToken);
      if (res) this.router.navigate(['home', 'content']);
    } catch (err) {
      console.log(err);
    }
  }
}
