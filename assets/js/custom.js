/*----------theme js-----------------*/

(function ($) {
  "use strict";

  // home-1 testi active js
  var slider = new Swiper(".slider-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1400: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".testi-next",
      prevEl: ".testi-prev",
    },
    pagination: {
      el: ".slider-dotss.about_area",
      clickable: true,
    },
  });
  // ux services
  var slider = new Swiper(".ux_services", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    speed: 4000,
    loop: true,
    breakpoints: {
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".ux-slider-dots",
      clickable: true,
    },
  });
  // home-1 testi active js
  for (let index = 0; index < 3; index++) {
    var slider = new Swiper(".services_" + (index + 1), {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        1400: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: ".service-" + (index + 1) + "-next",
        prevEl: ".service-" + (index + 1) + "-prev",
      },
    });
  }
  // ux services
  var slider = new Swiper(".clients", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: true,
    speed: 3000,
    loop: true,
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
})(jQuery);
