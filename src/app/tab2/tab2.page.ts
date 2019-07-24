import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sliderConf = {
    spaceBetween: -22,
    centeredSlides: true,
    slidesPreview: 1.6,
  };

  menu = [
    [
      { name: '', title: '', title2: 'Tentang PKKMB', route: '/tentang', custom: 'assets/icon/custom/pkkmb-1.svg'}
    ],
    [
      { name: 'book', title: 'Panduan', title2: '', route: '/panduan', custom: '' },

      { name: 'globe', title: 'Website', title2: '', route: 'https://pkkmb.uns.ac.id/', custom: '' }
    ],
    [
      { name: 'clipboard', title: '', title2: 'Presensi', route: '/presensi', custom: '' }
    ],
    [
      { name: 'people', title: 'Grup', title2: '', route: '/grup' },
      { name: 'bookmarks', title: 'Agenda', title2: '', route: '/agenda' },
      { name: 'pin', title: 'Lokasi', title2: '', route: 'https://maps.google.com/' }
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

constructor() {}

}
