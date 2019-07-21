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
  }

  menu = [
    [
      { name: 'help', title: 'PKKMB', route: '/tentang' }
    ],
    [
      { name: 'book', title: 'Panduan', route: '/panduan' },

      { name: 'globe', title: 'Website', route: 'https://pkkmb.uns.ac.id/' }
    ],
    [
      { name: 'paper-plane', title: 'Presensi', route: '/presensi' }
    ],
    [
      { name: 'people', title: 'Grup', route: '/grup' },
      { name: 'bookmarks', title: 'Agenda', route: '/agenda' },
      { name: 'pin', title: 'Lokasi', route: 'https://maps.google.com/' }
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
