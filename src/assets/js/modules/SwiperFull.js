import BaseModule from "./BaseModule"
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay , EffectFade} from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class SwiperFull extends BaseModule {
  register() {
    Swiper.use([Navigation, Pagination, Autoplay, EffectFade])
    this.swiper = new Swiper('.swiper_slidefull', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      // effect: 'coverflow',
      // coverflowEffect: {
      //   rotate: 30,
      //   slideShadows: false,
      // },
      autoplay: {
        delay: 4000,
        waitForTransition:false
      },

      pagination: {
        // el: '.swiper-pagination',
        // type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  

}
