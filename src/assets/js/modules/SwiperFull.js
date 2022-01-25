import BaseModule from "./BaseModule"
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class SwiperFull extends BaseModule {
  register() {
    Swiper.use([Navigation, Pagination, Autoplay])
    this.swiper = new Swiper('.swiper_slidefull', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },
      autoplay: {
        delay: 3000,
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
