import BaseModule from "./BaseModule"
import $ from "jquery";
import 'slick-carousel'

export default class ProfileTab extends BaseModule {
  register() {

    $('.js-slidetabs').not('.slick-initialized').slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      variableWidth: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: true,
      asNavFor: '.js-slidetabs-for',
      prevArrow: $(".arrow-icon.arrow--prev03"),
      nextArrow: $(".arrow-icon.arrow--next03"),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            centerMode: false,
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            // centerMode: true,
            slidesToShow: 4
          }
        }
      ]
    });
    $('.js-slidetabs-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-slidetabs'
    });
    // this.tabsProfile();

  }
  tabsProfile() {
    $('.tabs .tab-link').click(function () {
      const Tabid = $(this).attr('data-tab');

      $('.tabs .tab-link').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#" + Tabid).addClass('current');
    })
  }


}
