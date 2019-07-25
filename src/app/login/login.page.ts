import { Component, OnInit } from '@angular/core';
//
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  define1 = 1;
  define2 = 0;
  define3 = 0;

  constructor(
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  //
  loginUser() {
    this.authService.login();
  }

  login() {
    this.define1 = 0;
    this.define2 = 1;
    this.define3 = 0;
  }

  activate() {
    this.define1 = 0;
    this.define2 = 0;
    this.define3 = 1;
  }

  backto() {
    this.define1 = 1;
    this.define2 = 0;
    this.define3 = 0;
  }

}
