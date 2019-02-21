import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TranslateService } from '@ngx-translate/core';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imageUrls: (string | IImage)[] = [
    { url: '../assets/imgs/bg_main.png' },
    { url: '../assets/imgs/bg_main2.png'},
    { url: '../assets/imgs/bg_main.png' },
    '../assets/imgs/bg_main2.png',
  ];
  height = '750px';
  minHeight: string;
  arrowSize = '60px';
  showArrows = true;
  disableSwiping = true;
  autoPlay = true;
  stopAutoPlayOnSlide = true;
  debug = false;
  backgroundSize = 'cover';
  backgroundPosition = 'center center';
  backgroundRepeat = 'no-repeat';
  showDots = false;
  dotColor = '#000000';
  showCaptions = false;
  captionColor = '#000000';
  captionBackground = 'rgba(0, 0, 0, 0)';
  lazyLoad = false;
  hideOnNoSlides  = true;

  private  translate: TranslateService;

  constructor( translate: TranslateService) {
    this.translate = translate;
    this.translate.setDefaultLang('ko');
  }

  public Language_exchange( lang: string ): void {
    this.translate.use(lang);
  }

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

  }

}


