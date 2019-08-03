import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-aduan',
  templateUrl: './aduan.page.html',
  styleUrls: ['./aduan.page.scss'],
})

export class AduanPage implements OnInit {

  isiEmail: string = '';
  subject: string = '';
  

  constructor(private emailComposer: EmailComposer, private device: Device, private platform : Platform) {
    platform.ready().then(() => {
      console.log(device.uuid);
    });
  }
  

  send(){
     let email = {
       to: 'purwabrata@gmail.com',
       subject: this.subject,
       body: this.isiEmail,
       isHtml: true
     }
     
     this.emailComposer.open(email);

  }

  ngOnInit(){
    
  }


}
