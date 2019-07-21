import { Component } from '@angular/core';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isiEmail: string = '(Silakan ganti dengan aduan anda yang berkaitan acara PKKMB UNS 2019...)';
  subject: string = '[ISI JENIS ADUAN]';
  

  constructor(private emailComposer: EmailComposer) {}

}
