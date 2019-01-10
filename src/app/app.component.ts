import {Component, HostListener, OnInit} from '@angular/core';
import * as $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {NgsRevealConfig} from 'ng-scrollreveal';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private backgroundColor: boolean;
  private  translate: TranslateService;

  constructor( translate: TranslateService) {
    this.translate = translate;
    this.translate.setDefaultLang('ko');
  }

  public switchLanguage( lang: string ): void {
    this.translate.use(lang);
  }

/*  param = {value: 'world'};

  constructor(translate: TranslateService) {
    // 현재 사용 언어에서 해당하는 다국어 설정이 없을 경우 기본 사용하는 언어 설정
    translate.setDefaultLang('ko');

    // 현재 사용 언어 설정
    translate.use('ko');
  }*/

  /*constructor(ngsRevealConfig: NgsRevealConfig) {
    ngsRevealConfig.delay = 200;
    ngsRevealConfig.duration = 800;
  }*/

  ngOnInit() {

    $('.slide-container').slick({
      autoplay : true,
      dots: true,
      speed: 200,
      infinite: true,
      autoplaySpeed: 3000,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      centerMode: true,
      centerPadding: '0px'
    });

    function fnMove(seq) {
      const offset = $('#div' + seq).offset();
      $('html, body').animate({scrollTop : offset.top}, 400);
    }


   // for (const htmlElementJQueryElement of $('.scroll').click(function (event) {
   //    event.preventDefault();
   //    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500);
   //  })) {
   //
   //  }





  }




  @HostListener('window:scroll', ['$event']) onScroll($event) {
    // console.log('$event.srcElement.scrollTop: ',$event.srcElement.scrollingElement.scrollTop);

    if ($event.srcElement.scrollingElement.scrollTop > 250) {
      this.backgroundColor = true;
    }
  }
}


