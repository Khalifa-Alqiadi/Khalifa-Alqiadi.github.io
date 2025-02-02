(function ($) {
  "use strict";

  // Mobile Menu
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    meanMenuOpen: "<span></span> <span></span> <span></span>",
    onePage: false,
  });

  //Header Search
  // if($('.search-box-outer').length) {
  //     $('.search-box-outer').on('click', function() {
  //         $('body').addClass('search-active');
  //     });
  //     $('.close-search').on('click', function() {
  //         $('body').removeClass('search-active');
  //     });
  // }

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });

  // Loder  //
  $(function () {
    $("body").addClass("loaded");
  });
  //buddy all button
  $(function () {
    $(".animate_buton")
      .on("mouseenter", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({ top: relY, left: relX });
      })
      .on("mouseout", function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find("span").css({ top: relY, left: relX });
      });
  });
  /*---------------------
    WOW active js 
    --------------------- */
  new WOW().init();

  /* Portfolio Isotope  */
  $(".image_load").imagesLoaded(function () {
    if ($.fn.isotope) {
      var $portfolio = $(".image_load");

      $portfolio.isotope({
        itemSelector: ".grid-item",

        filter: "*",

        resizesContainer: true,

        layoutMode: "masonry",

        transitionDuration: "0.8s",
      });
      $(".menu-filtering li").on("click", function () {
        $(".menu-filtering li").removeClass("current_menu_item");

        $(this).addClass("current_menu_item");

        var selector = $(this).attr("data-filter");

        $portfolio.isotope({
          filter: selector,
        });
      });
    }
  });

  // Venubox
  $(".venobox").venobox({
    numeratio: true,
    infinigall: true,
  });

  if ($(".prgoress_indicator path").length) {
    var progressPath = document.querySelector(".prgoress_indicator path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).on("scroll", updateProgress);
    var offset = 250;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".prgoress_indicator").addClass("active-progress");
      } else {
        jQuery(".prgoress_indicator").removeClass("active-progress");
      }
    });
    jQuery(".prgoress_indicator").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  }

  /*------------- preloader js --------------*/
  var percentage = 0;
  var LoadingCounter = setInterval(function () {
    if (percentage <= 100) {
      // $('#loading-screen ').css('opacity', (100 - percentage));
      $("#loading-screen .loading-counter").text(percentage + "%");
      $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
      $("#loading-screen .progress-line").css(
        "transform",
        "scale(" + percentage / 100 + ")"
      );
      percentage++;
    } else {
      $("#loading-screen").fadeOut(500);
      setTimeout(() => {
        $("#loading-screen").remove();
      }, 500);
      clearInterval(LoadingCounter);
    }
  }, 10);
  /*-----------------  End Percentage loading screen interactions -----------------  */

  // Nav Sidebar
  ("use strict");
  jQuery(document).ready(function (o) {
    0 < o(".offset-side-bar").length &&
      o(".offset-side-bar").on("click", function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          o(".cart-group").addClass("isActive");
      }),
      0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
          e.preventDefault(), o(".cart-group").removeClass("isActive");
        }),
      0 < o(".navSidebar-button").length &&
        o(".navSidebar-button").on("click", function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            o(".info-group").addClass("isActive");
        }),
      0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
          e.preventDefault(), o(".info-group").removeClass("isActive");
        }),
      o("body").on("click", function (e) {
        o(".info-group").removeClass("isActive"),
          o(".cart-group").removeClass("isActive");
      }),
      o(".xs-sidebar-widget").on("click", function (e) {
        e.stopPropagation();
      }),
      0 < o(".xs-modal-popup").length &&
        o(".xs-modal-popup").magnificPopup({
          type: "inline",
          fixedContentPos: !2,
          fixedBgPos: !0,
          overflowY: "auto",
          closeBtnInside: !2,
          callbacks: {
            beforeOpen: function () {
              this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
            },
          },
        });
  });
})(jQuery);
