import { Component, OnInit, ViewChild } from '@angular/core';
//
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Button } from 'protractor';
import { Reg, ForLog } from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  define1 = 1;
  define2 = 0;
  define3 = 0;
  define4 = 0;
  user = '';
  pass = '';
  cpass = '';
  name = '';
  word = '';

  forLog: ForLog[] = [
    {
      usern: '007',
      paswd: 'test',
    }
  ];

  reg: Reg[] = [
    {
      user_name: 'tes',
      user_pass: 'tes',
      stat: false
    },
    {
      user_name: 'tos',
      user_pass: 'tos',
      stat: true
    }
  ];

  constructor(
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {/* belum ada http nya */}

  ngOnInit() {}

  ionViewDidLeave() {
    this.define1 = 1;
    this.define2 = 0;
    this.define3 = 0;
    this.define4 = 0;
  }

  //
  loginUser() {
    this.user = 'Kkfajslfksf';
    this.authService.setUsername(this.user);
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

  async falseData(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
    return;
  }


  login() {
    this.define1 = 0;
    this.define2 = 1;
    this.define3 = 0;
    this.define4 = 0;
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
    this.define4 = 0;
  }

  onCreate(form: NgForm) {
    this.user = form.value.nameee;
    this.pass = form.value.passss;
    this.cpass = form.value.cpassss;
    this.creating();
  }

  creating() {
    if (this.user.length === 0 || this.pass.length === 0 || this.cpass.length === 0) {
      const msg = 'Isi semua masukan data yang tersedia!';
      this.falseData(msg);
      return;
    } else if (this.pass !== this.cpass) {
      const msg = 'Input kedua Password tidak sama!';
      this.falseData(msg);
      return;
    } else if (this.user.length < 7) {
      const msg = 'Username minimal terdiri dari 7 karakter';
      this.falseData(msg);
      return;
    }
    try {
      const data = {usern: this.user, paswd: this.pass};
      this.forLog.push(data);
      this.changeStat();
      const msg = 'Akunmu telah berhasil dibuat. Silahkan login menggunakan Username dan Password yang telah dibuat.';
      this.falseData(msg);
      this.getData(this.login());
    } catch (err) {
      const msg = 'Terjadi kesalahan';
      this.falseData(msg);
      return;
    }
  }

  changeStat() {
    this.reg.map(chng => {
      if (chng.user_name === this.name) {
        chng.stat = true;
      }
    });
    console.log(this.reg);
  }

  onRegist(form: NgForm) {
    this.name = form.value.namee;
    this.word = form.value.passs;
    this.registingIn();
  }

  registingIn() {
    if (this.name.length === 0 || this.word.length === 0) {
      const msg = 'Masukkan ID dan Password!';
      this.falseData(msg);
      return;
    }
    const dummy = this.reg.find(element => element.user_name === this.name);
    try {
      if (this.name === dummy.user_name && this.word === dummy.user_pass && dummy.stat === false) {
        this.getData(this.define4);
        this.define1 = 0;
        this.define2 = 0;
        this.define3 = 0;
        this.define4 = 1;
      } else if (this.name === dummy.user_name && this.word === dummy.user_pass && dummy.stat === true) {
        const msg = 'Anda sudah melakukan aktivasi. Silahkan lakukan Login.';
        this.falseData(msg);
      } else if (this.name !== dummy.user_name || this.word !== dummy.user_pass) {
        const msg = 'ID dan atau Kode Aktivasi tidak tepat!';
        this.falseData(msg);
      }
    } catch (err) {
      const msg = 'Input ID ngawur!';
      this.falseData(msg);
    }
  }

  onLogin(form: NgForm) {
    this.user = form.value.name;
    this.pass = form.value.pass;
    this.logingIn();
  }

  logingIn() {
    if (this.user.length === 0 || this.pass.length === 0) {
      const msg = 'Masukkan Username dan Password!';
      this.falseData(msg);
      return;
    }
    const dummy = this.forLog.find(element => element.usern === this.user);
    try {
      if (this.user === dummy.usern && this.pass === dummy.paswd) {
        this.getData(this.authService.loging);
        this.authService.loging(dummy);
      } else {
        const msg = 'Username dan atau Password tidak tepat!';
        this.falseData(msg);
      }
    } catch (error) {
      const msg = 'Username tidak tersedia';
      this.falseData(msg);
    }

  }

}
