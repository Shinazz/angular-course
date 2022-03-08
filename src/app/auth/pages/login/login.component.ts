import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.email]),
      newPassword: new FormControl(null, [Validators.required]),
    });
  }

  ngAfterViewInit(): void {}

  clicked() {
    // console.log(this.email);
    this.data.userName = this.email;
    this.router.navigate(['home', 'content']);
  }
  onSubmit() {
    console.log(this.loginForm.valid);
    console.log(this.loginForm.controls['email']);
    this.data.userName = this.email;
    // this.router.navigate(['home', 'content']);
  }
}
