import { Component } from '@angular/core';

import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AuthenticationService } from '../services/authentication.service';

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
    private authService: AuthenticationService
    ) {}

  logoutUser() {
    this.authService.logout();
  }

}
