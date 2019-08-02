import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { PDM } from './panduan.model';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-panduan',
  templateUrl: './panduan.page.html',
  styleUrls: ['./panduan.page.scss'],
})




export class PanduanPage implements OnInit {
  posY : any = 0;
  entity : any;
  posYMaba : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  posYKambing : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  state : boolean = false;
  

  @ViewChild('content') content;
  @ViewChild('maba1') maba1;
  @ViewChild('maba2') maba2;
  @ViewChild('maba3') maba3;
  @ViewChild('maba4') maba4;
  @ViewChild('maba5') maba5;
  @ViewChild('maba6') maba6;
  @ViewChild('maba7') maba7;
  @ViewChild('maba8') maba8;
  @ViewChild('maba9') maba9;
  @ViewChild('maba10') maba10;
  @ViewChild('maba11') maba11;
  @ViewChild('maba12') maba12;
  @ViewChild('maba13') maba13;
  @ViewChild('maba14') maba14;
  @ViewChild('maba15') maba15;
  @ViewChild('maba16') maba16;
  @ViewChild('maba17') maba17;
  @ViewChild('maba18') maba18;
  @ViewChild('maba19') maba19;
  @ViewChild('maba20') maba20;
  @ViewChild('kambing1') kambing1;
  @ViewChild('kambing2') kambing2;
  @ViewChild('kambing3') kambing3;
  @ViewChild('kambing4') kambing4;
  @ViewChild('kambing5') kambing5;
  @ViewChild('kambing6') kambing6;
  @ViewChild('kambing7') kambing7;
  @ViewChild('kambing8') kambing8;
  @ViewChild('kambing9') kambing9;
  @ViewChild('kambing10') kambing10;
  @ViewChild('kambing11') kambing11;
  @ViewChild('kambing12') kambing12;
  @ViewChild('kambing13') kambing13;
  @ViewChild('kambing14') kambing14;
  @ViewChild('kambing15') kambing15;
  @ViewChild('kambing16') kambing16;
  @ViewChild('kambing17') kambing17;
  @ViewChild('kambing18') kambing18;
  @ViewChild('kambing19') kambing19;
  @ViewChild('kambing20') kambing20;
  
  mabaArray : any[] = [this.maba1,this.maba2,this.maba3,this.maba4,this.maba5,this.maba6,this.maba7,this.maba8,this.maba9,this.maba10,this.maba11,this.maba12,this.maba12,this.maba13,this.maba14,this.maba15,this.maba16,this.maba17,this.maba18,this.maba19,this.maba20];
  kambingArray : any[] = [this.kambing1,this.kambing2,this.kambing3,this.kambing4,this.kambing5,this.kambing6,this.kambing7,this.kambing8,this.kambing9,this.kambing10,this.kambing11,this.kambing12,this.kambing12,this.kambing13,this.kambing14,this.kambing15,this.kambing16,this.kambing17,this.kambing18,this.kambing19,this.kambing20];
  
  pdmPos : any[] = [this.posYMaba, this.posYKambing];

  selecto(){
    console.log(this.maba1.nativeElement.getBoundingClientRect().y);
  }
  

  assignVal(){
    for(let i = 0; i < 20; i++){
      this.posYMaba[i] = this.mabaArray[i].nativeElement.getBoundingClientRect().y;
      this.posYKambing[i] = this.kambingArray[i].nativeElement.getBoundingClientRect().y;
      console.log(this.posYMaba[i]);
      console.log(this.posYKambing[i]);
    }
    
    
  }

  firstUse(){
    if(this.state === false){
      this.mabaArray = [this.maba1,this.maba2,this.maba3,this.maba4,this.maba5,this.maba6,this.maba7,this.maba8,this.maba9,this.maba10,this.maba11,this.maba12,this.maba12,this.maba13,this.maba14,this.maba15,this.maba16,this.maba17,this.maba18,this.maba19,this.maba20];
      this.kambingArray = [this.kambing1,this.kambing2,this.kambing3,this.kambing4,this.kambing5,this.kambing6,this.kambing7,this.kambing8,this.kambing9,this.kambing10,this.kambing11,this.kambing12,this.kambing12,this.kambing13,this.kambing14,this.kambing15,this.kambing16,this.kambing17,this.kambing18,this.kambing19,this.kambing20];
  
      

      this.assignVal();
      this.pdmPos = [this.posYMaba, this.posYKambing];
      this.state = true;
      console.log(this.posYMaba[19]);
    }
  }

  ScrollToPoint(choosein : number, chooseent : number){
    this.content.scrollToPoint(0,this.pdmPos[chooseent][choosein],100);
  }
  
  pdmMaba: PDM[] = [
    {
      bab : '',
      icon : '',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj'],
      color : 'dark'
    },
    {
      bab : '',
      icon : '',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj'],
      color : 'none'
    }
    
  ];

  pdmKambing: PDM[] = [
    {
      bab : 'Pakaian',
      icon : 'menu',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj'],
      color : 'light'
    },
    {
      bab : 'Etika',
      icon : 'menu',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj'],
      color : 'none'
    }
  ];


  @ViewChild('slides') slider: IonSlides;
  segment = 0;
  
  

  choice: string = 'pilihan';
  menua: any;

  constructor(private menu: MenuController) { 
    this.menua = menu;
    
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  ngOnInit() {
  }

  changeState(pilihan: number) {
    if (pilihan === 1) {
      this.choice = 'maba';
    } else if (pilihan === 2) {
      this.choice = 'kambing';
    }

  }

  toggleMenu() {
    this.menua.toggle('right');
  }

  

}
