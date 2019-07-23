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
      { name: '', title: 'PKKMB', route: '/tentang', custom:'assets/icon/custom/pkkmb-1.svg'}
    ],
    [
      { name: 'book', title: 'Panduan', route: '/panduan', custom:'' },

      { name: 'globe', title: 'Website', route: 'https://pkkmb.uns.ac.id/', custom:'' }
    ],
    [
      { name: 'clipboard', title: 'Presensi', route: '/presensi', custom:'' }
    ],
    [
      { name: 'people', title: 'Grup', route: '/grup', custom:'' },
      { name: 'bookmarks', title: 'Agenda', route: '/agenda', custom:'' },
      { name: 'pin', title: 'Lokasi', route: 'https://maps.google.com/', custom:'' }
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
