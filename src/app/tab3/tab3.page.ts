import { Component } from '@angular/core';

import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // tslint:disable-next-line: no-inferrable-types
  isiEmail: string = '(Silakan ganti dengan aduan anda yang berkaitan acara PKKMB UNS 2019...)';
  // tslint:disable-next-line: no-inferrable-types
  subject: string = '[ISI JENIS ADUAN]';


  constructor(
    private emailComposer: EmailComposer,
    private authService: AuthenticationService,
    private router: Router,
    private loadingController: LoadingController
    ) {}

  async getData(fun) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    // tslint:disable-next-line: no-unused-expression
    fun;
    loading.dismiss();
  }

  logoutUser() {
    this.getData(this.authService);
    this.authService.logout();
  }

  next(para) {
    this.authService.isAuthenticated();
    this.router.navigate([para]);
  }

}
