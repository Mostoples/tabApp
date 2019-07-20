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

  send(){
    
     
     let email = {
       to: 'mostoplesam@gmail.com',
      //  cc: 'erika@mustermann.de',
      //  bcc: ['john@doe.com', 'jane@doe.com'],
      //  attachments: [
      //    'file://img/logo.png',
      //    'res://icon.png',
      //    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      //    'file://README.pdf'
      //  ],
       subject: this.subject,
       body: this.isiEmail,
       isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
