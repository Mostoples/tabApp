import { Component, OnInit, ViewChild } from '@angular/core';
//
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Button } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('f') courseForm: NgForm;

  define1 = 1;
  define2 = 0;
  define3 = 0;
  define4 = 0;
  user = '';
  word = '';

  constructor(
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {/* belum ada http nya */ }

  ngOnInit() {
  }

  //
  loginUser() {
    this.authService.login();
  }

  async getData(fun) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    // tslint:disable-next-line: no-unused-expression
    fun;
    loading.dismiss();
  }

  async falseData() {
    const alert = await this.alertController.create({
      message: 'Username dan atau Password tidak tepat!',
      buttons: ['Ok'],
    });
    await alert.present();
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

  register() {
    this.define1 = 0;
    this.define2 = 0;
    this.define3 = 0;
    this.define4 = 1;
  }

  backto() {
    this.define1 = 1;
    this.define2 = 0;
    this.define3 = 0;
    this.define4 = 0;
  }

  onLogin(form: NgForm) {
    this.user = form.value.name;
    this.word = form.value.pass;
    this.logingIn();
  }

  logingIn() {
    const dummyResponse = {
      user_name: '007',
      user_pass: 'test',
    };
    if ( this.user === dummyResponse.user_name && this.word === dummyResponse.user_pass ) {
        this.authService.loging(dummyResponse);
    } else {
      this.falseData();
    }
  }

}
