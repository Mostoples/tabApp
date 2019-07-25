import { Component } from '@angular/core';

import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

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
    private router: Router
    ) {}

  logoutUser() {
    this.authService.logout();
  }

  next(para) {
    this.authService.isAuthenticated();
    this.router.navigate([para]);
  }

}
