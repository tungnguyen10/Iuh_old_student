
import BaseModule from "./BaseModule"
import $ from "jquery";

export default class Footer extends BaseModule {
  register() {
    console.log(this)
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
    });
  }

}
