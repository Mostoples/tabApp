import { Component, ViewChild } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';





@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('content') private content: any;

  user = '';

<<<<<<< HEAD
  sliderConf: {};
=======
  

>>>>>>> f4c9ec310c11f16b0268e026cce22b79c58e4a3a

  menu = [
    [
      { name: '', title2: 'Tentang PKKMB', route: 'tabs/tentang', type: 'btn', custom: 'assets/icon/custom/pkkmb-1.svg'}
    ],
    [
      { name: 'book', title: 'Panduan', route: 'tabs/panduan', type: 'btn' },

      { name: 'globe', title: 'Website', route: 'https://pkkmb.uns.ac.id/', type: 'lnk' }
    ],
    [
      { name: 'clipboard', title2: 'Presensi', route: 'tabs/presensi', type: 'btn' }
    ],
    [
      { name: 'people', title: 'Grup', route: 'tabs/grup', type: 'btn' },
      { name: 'bookmarks', title: 'Agenda', route: 'tabs/agenda', type: 'btn' },
      { name: 'pin', title: 'Lokasi', route: 'https://maps.google.com/', type: 'lnk' }
    ]
  ];

  ads = [
    // tslint:disable-next-line: max-line-length
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hyundai_i40_with_Dalkin_Advertising_operating_under_Comfort_taxis.jpg/512px-Hyundai_i40_with_Dalkin_Advertising_operating_under_Comfort_taxis.jpg',
    // tslint:disable-next-line: max-line-length
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hyundai_i40_with_Dalkin_Advertising_operating_under_Comfort_taxis.jpg/512px-Hyundai_i40_with_Dalkin_Advertising_operating_under_Comfort_taxis.jpg',
    // tslint:disable-next-line: max-line-length
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Hyundai_i40_with_Dalkin_Advertising_operating_under_Comfort_taxis.jpg/512px-Hyundai_i40_with_Dalkin_Advertising_operating_under_Comfort_taxis.jpg'
  ];

  constructor(
    private authService: AuthenticationService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private loadingController: LoadingController
    ) {
      this.user = 'Kamu~';
    }

    sliderConf = {
      spaceBetween: -22,
      centeredSlides: true,
      slidesPreview: 1.6,
      loop: false,
      autoplay:false,
    };

    
ionViewWillEnter() {
  if (this.authenticationService.usernm) {
    this.user = this.authenticationService.usernm;
  }
  this.scrollToBottomOnInit();
<<<<<<< HEAD
  this.sliderConf = {
    spaceBetween: -22,
    centeredSlides: true,
    slidesPreview: 1.6,
    loop: true,
    autoplay: true

  };


=======
  this.sliderConf.loop = true;
  this.sliderConf.autoplay = true;
  
  
>>>>>>> f4c9ec310c11f16b0268e026cce22b79c58e4a3a
}

scrollToBottomOnInit() {
  this.content.scrollToTop(300);
}

  next(para) {
    this.getData(this.authService);
    this.authenticationService.isAuthenticated();
    this.router.navigate([para]);
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

}

