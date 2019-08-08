import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tentang',
  templateUrl: './tentang.page.html',
  styleUrls: ['./tentang.page.scss'],
})
export class TentangPage implements OnInit {
	heightTentang: String = '50vw';
	opacityTentang: Number = 1;
	opacityTentang2: Number = 0;
	visibilityTentang: String = 'visible';
	visibilityTentang2: String = 'hidden';
	
	@ViewChild('slides') slider: IonSlides;
	segment = 0;
  
  

  choice: number = 1;
  menua: any;
	
	
	
	
  sliderOpts = {
    speed : 2000,
    autoplay : true,
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }    

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('content1') content1;
  
  
  changeHeight(){
	  this.heightTentang= '92vh';
	  this.opacityTentang = 0;
	  this.opacityTentang2 = 1;
	  
	  this.visibilityTentang = 'hidden';
	  this.visibilityTentang2 = 'visible';
	  
	  
	  this.content1.scrollY = false;
  }
  
  changeHeightReverse(){
	  this.heightTentang= '50vw';
	  this.opacityTentang = 1;
	  this.opacityTentang2 = 0;
	  
	  this.visibilityTentang = 'visible';
	  this.visibilityTentang2 = 'hidden';
	  
	  
	  this.content1.scrollY = true;
  }
  
  ngAfterViewInit() {
    this.slider.lockSwipes(true);
  }

  async segmentChanged() {
	this.slider.lockSwipes(false);
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
	this.slider.lockSwipes(true);
	if(this.segment == 0){
		this.choice = 1;
	}else{
		this.choice = 2;
	}
  }



  changeState(pilihan: number) {
    if (pilihan === 1) {
      this.choice = 1;
    } else if (pilihan === 2) {
      this.choice = 2;
    }

  }

  

}
