
import BaseModule from "./BaseModule"
import $ from "jquery";

export default class Footer extends BaseModule {
  register() {
    this.accordion()
  }
  accordion() {
    $(window).bind("load resize", function () {
      if ($(window).width() < 767) {
        $('.f-title').on('click', function () {
          $(this).toggleClass('is-active').next().stop().slideToggle(300);
          return false;
        });
      } 
      $("a.btn-support").on('click', function (e) {
        e.stopPropagation();
        $(".support-content").slideToggle();
      });
    });
  }
  
  
  

}
