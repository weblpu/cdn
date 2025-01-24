	var npf_d = 'https://admission.lpu.in';
	var npf_c = '524';
	var npf_m = '1';
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.async = true;
	s.src = "https://track.nopaperforms.com/js/track.js";
	document.body.appendChild(s);

// Text increase decrease Start
var $affectedElements = $("p, h1, h2, h3, h4, h5, h6, div, span"); // Can be extended, ex. $("div, p, span.someClass")

// Storing the original size in a data attribute so size can be reset
$affectedElements.each(function () {
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size"));
});

$("#btn-increase").click(function () {
  changeFontSize(1);
});

$("#btn-decrease").click(function () {
  changeFontSize(-1);
});

$("#btn-orig").click(function () {
  $affectedElements.each(function () {
    var $this = $(this);
    $this.css("font-size", $this.data("orig-size"));
  });
});

function changeFontSize(direction) {
  $affectedElements.each(function () {
    var $this = $(this);
    $this.css("font-size", parseInt($this.css("font-size")) + direction);
  });
}
// Text increase decrease End
// Invert Page Start

$("#in-grey").click(function () {
  $("html").addClass("invert-color");
  $("#in-color").removeClass("dhide");
  $("#in-grey").addClass("dhide");
});
$("#in-color").click(function () {
  $("html").removeClass("invert-color");
  $("#in-color").addClass("dhide");
  $("#in-grey").removeClass("dhide");
});

// Invert Page End

// Speech start

$("#von").click(function () {
  $("#voff").removeClass("dhide");
  $("#von").addClass("dhide");
});
$("#voff").click(function () {
  $("#voff").addClass("dhide");
  $("#von").removeClass("dhide");
});

// Speech End

// magnific video popup Start
$(document).ready(function () {
  // $('.heading-wraper .main-head h2').html(function (_, html) {
  //   return html.replace(/lpu/g, '<span class="ucase">LPU</span>');
  // });
  // $('.heading-wraper .main-head h2').html(function (_, html) {
  //   return html.replace(/LPU/g, '<span class="ucase">LPU</span>');
  // });

  var selector = ".contact-numbers ul li";
  $(selector).on("click", function () {
    $(selector).removeClass("active");
    $(this).addClass("active");
  });

  $(".popup-youtube").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: true,
    fixedContentPos: false,
  });
$(".image-popup-no-margins").magnificPopup({
  type: "image",
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
  image: {
    verticalFit: true,
  },
  zoom: {
    enabled: true,
    duration: 300, // don't foget to change the duration also in CSS
  },
});
});

$(".single-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".single-next-arrow").on("click", function (e) {
  e.preventDefault();
  $(".single-slider").slick("slickNext");
});
$(".single-prev-arrow").on("click", function (e) {
  e.preventDefault();
  $(".single-slider").slick("slickPrev");
});

// magnific video popup end

  $(".influ-latest-video").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
if ($(window).width() < 1025) {
$(".diversity-slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


  // $(".hero-bottom").slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // });
  $(".ncard-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".lpu-highlight-ranking").not(".slick-initialized")
  .slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

  // Faculty Slider Start
  $(".lpu-faculty-slider").slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Faculty Slider End


if ($(window).width() < 900) {
  $(".scholarships-type-div").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  });
  $(".programmes-col").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
$(".corporate-training-programme").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
if ($(window).width() < 770 ){
$(".diversity-celebrating-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
}
if ($(window).width() < 600) {
  $(".country-services").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
}
$(".single-image-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".next_beyond_slide").on("click", function (e) {
  e.preventDefault();
  $(".beyond-classroom-slider").slick("slickNext");
});
$(".prev_beyond_slide").on("click", function (e) {
  e.preventDefault();
  $(".beyond-classroom-slider").slick("slickPrev");
});

$(".events-slider").slick({
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  autoplaySpeed: 6000,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        vertical: false,
        autoplay: true,
        verticalSwiping: false,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
$("#next_event_slide").on("click", function (e) {
  e.preventDefault();
  $(".events-slider").slick("slickNext");
});
$("#prev_event_slide").on("click", function (e) {
  e.preventDefault();
  $(".events-slider").slick("slickPrev");
});

$(".cif-slider").slick({
  infinite: true,
  autoplaySpeed: 6000,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$("#next_event_slide").on("click", function (e) {
  e.preventDefault();
  $(".cif-slider").slick("slickNext");
});
$("#prev_event_slide").on("click", function (e) {
  e.preventDefault();
  $(".cif-slider").slick("slickPrev");
});




$(".entrepreneurship-slider-innr").slick({
  infinite: true,
  autoplaySpeed: 6000,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});


$(".next_entrepreneurship1").on("click", function (e) {
  e.preventDefault();
  $(".entrepreneurship-slider-innr").slick("slickNext");
});
$(".prev_entrepreneurship1").on("click", function (e) {
  e.preventDefault();
  $(".entrepreneurship-slider-innr").slick("slickPrev");
});

$(".entrepreneurship-slider-innr2").slick({
  infinite: true,
  autoplaySpeed: 6000,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".next_entrepreneurship2").on("click", function (e) {
  e.preventDefault();
  $(".entrepreneurship-slider-innr2").slick("slickNext");
});
$(".prev_entrepreneurship2").on("click", function (e) {
  e.preventDefault();
  $(".entrepreneurship-slider-innr2").slick("slickPrev");
});


$(".inventors-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
});
$("#next-sp").on("click", function (e) {
  e.preventDefault();
  $(".inventors-slider").slick("slickNext");
});
$("#prev-sp").on("click", function (e) {
  e.preventDefault();
  $(".inventors-slider").slick("slickPrev");
});

$(".news-slider")
  .not(".slick-initialized")
  .slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

$("#next_news_slide, .next_news_slide").on("click", function (e) {
  e.preventDefault();
  $(".news-slider").slick("slickNext");
});
$("#prev_news_slide, .prev_news_slide").on("click", function (e) {
  e.preventDefault();
  $(".news-slider").slick("slickPrev");
});

$(".visitor-slider-even")
  .not(".slick-initialized")
  .slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
$(".visitor-slider-odd")
  .not(".slick-initialized")
  .slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
$(".next_visitor_even_slide").on("click", function (e) {
  e.preventDefault();
  $(".visitor-slider-even").slick("slickNext");
});
$(".prev_visitor_even_slide").on("click", function (e) {
  e.preventDefault();
  $(".visitor-slider-even").slick("slickPrev");
});
$(".next_visitor_odd_slide").on("click", function (e) {
  e.preventDefault();
  $(".visitor-slider-odd").slick("slickNext");
});
$(".prev_visitor_odd_slide").on("click", function (e) {
  e.preventDefault();
  $(".visitor-slider-odd").slick("slickPrev");
});

$(".spotlight-slider").slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  arrows: false,
});

$("#next_spotligh_slide").on("click", function (e) {
  e.preventDefault();
  $(".spotlight-slider").slick("slickNext");
});
$("#prev_spotligh_slide").on("click", function (e) {
  e.preventDefault();
  $(".spotlight-slider").slick("slickPrev");
});
$("#next-sp").on("click", function (e) {
  e.preventDefault();
  $(".spotlight-slider").slick("slickNext");
});
$("#prev-sp").on("click", function (e) {
  e.preventDefault();
  $(".spotlight-slider").slick("slickPrev");
});

$(".global-community-slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  fade: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  infinite: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#next_global-community, .next_global-community").on("click", function (e) {
  e.preventDefault();
  $(".global-community-slider").slick("slickNext");
});
$("#prev_global-community, .prev_global-community").on("click", function (e) {
  e.preventDefault();
  $(".global-community-slider").slick("slickPrev");
});

$(".chart-slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  fade: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  infinite: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#next_chart-slider").on("click", function (e) {
  e.preventDefault();
  $(".chart-slider").slick("slickNext");
});
$("#prev_chart-slider").on("click", function (e) {
  e.preventDefault();
  $(".chart-slider").slick("slickPrev");
});

$(".research-latest-achievements-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  fade: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  infinite: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#next_research-latest-achievements").on("click", function (e) {
  e.preventDefault();
  $(".research-latest-achievements-slider").slick("slickNext");
});
$("#prev_research-latest-achievements").on("click", function (e) {
  e.preventDefault();
  $(".research-latest-achievements-slider").slick("slickPrev");
});

$(".sports-slider").slick({
  //infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$("#next_sports_slide").on("click", function (e) {
  e.preventDefault();
  $(".sports-slider").slick("slickNext");
});
$("#prev_sports_slide").on("click", function (e) {
  e.preventDefault();
  $(".sports-slider").slick("slickPrev");
});

$(".single-image-slider-custom-nav").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});

$("#next_custom-nav, .next_custom-nav").on("click", function (e) {
  e.preventDefault();
  $(".single-image-slider-custom-nav").slick("slickNext");
});
$("#prev_custom-nav, .prev_custom-nav").on("click", function (e) {
  e.preventDefault();
  $(".single-image-slider-custom-nav").slick("slickPrev");
});

// Home Page Testimonial
$(".students-tesi-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".students-tesi-slider-nav #next_testimonials").on("click", function (e) {
  e.preventDefault();
  $(".students-tesi-slider").slick("slickNext");
});
$(".students-tesi-slider-nav #prev_testimonials").on("click", function (e) {
  e.preventDefault();
  $(".students-tesi-slider").slick("slickPrev");
});
// -----
$(".alumni-tesi-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});
$(".alumni-tesi-slider-nav #next_testimonials").on("click", function (e) {
  e.preventDefault();
  $(".alumni-tesi-slider").slick("slickNext");
});
$(".alumni-tesi-slider-nav #prev_testimonials").on("click", function (e) {
  e.preventDefault();
  $(".alumni-tesi-slider").slick("slickPrev");
});
// ----
$(".partners-tesi-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});
$(".partners-tesi-slider-nav #next_testimonials").on("click", function (e) {
  e.preventDefault();
  $(".partners-tesi-slider").slick("slickNext");
});
$(".partners-tesi-slider-nav #prev_testimonials").on("click", function (e) {
  e.preventDefault();
  $(".partners-tesi-slider").slick("slickPrev");
});
// ----
$(".faculty-tesi-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});
$(".faculty-tesi-slider-nav #next_testimonials").on("click", function (e) {
  e.preventDefault();
  $(".faculty-tesi-slider").slick("slickNext");
});
$(".faculty-tesi-slider-nav #prev_testimonials").on("click", function (e) {
  e.preventDefault();
  $(".faculty-tesi-slider").slick("slickPrev");
});

$(".testi-grid ul li a").on("click", function () {
  setTimeout(function () {
    $(".students-tesi-slider").slick("refresh");
    $(".alumni-tesi-slider").slick("refresh");
    $(".partners-tesi-slider").slick("refresh");
    $(".faculty-tesi-slider").slick("refresh");
    SEMICOLON.initialize.lightbox();
  }, 1);
});

$(".tabslider a").on("click", function () {
  setTimeout(function () {
    $(".entrepreneurship-slider-innr").slick("refresh");
  }, 1);
});

// Home Page Testimonial

// admission page slider

$(".admissons-slider").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#next_admissons_slide, .next_admissons_slide").on("click", function (e) {
  e.preventDefault();
  $(".admissons-slider").slick("slickNext");
});
$("#prev_admissons_slide, .prev_admissons_slide").on("click", function (e) {
  e.preventDefault();
  $(".admissons-slider").slick("slickPrev");
});

$(".inner-testimonial-slider").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  margin: 20,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#next_inner-testi_slide, .inner-testi-next-arrow").on("click", function (e) {
  e.preventDefault();
  $(".inner-testimonial-slider").slick("slickNext");
});
$("#prev_inner-testi_slide, .inner-testi-prev-arrow").on("click", function (e) {
  e.preventDefault();
  $(".inner-testimonial-slider").slick("slickPrev");
});

$(".roadmap-cards-cont").slick({
  slidesToShow: 6,
  speed: 700,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#next_roadmap_slide").on("click", function (e) {
  e.preventDefault();
  $(".roadmap-cards-cont").slick("slickNext");
});
$("#prev_roadmap_slide").on("click", function (e) {
  e.preventDefault();
  $(".roadmap-cards-cont").slick("slickPrev");
});

$(".funding-slider").slick({
  slidesToShow: 10,
  slidesToScroll: 1,
  speed: 700,
  dots: false,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
      },
    },
  ],
});

$(".scientist-slider").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  speed: 700,
  dots: false,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$("#next_scientist_slide").on("click", function (e) {
  e.preventDefault();
  $(".scientist-slider").slick("slickNext");
});
$("#prev_scientist_slide").on("click", function (e) {
  e.preventDefault();
  $(".scientist-slider").slick("slickPrev");
});

// admission page slider


//about-leaders-nav
// Anti Ragging
$(".anti-ragging-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  padding: 15,
  speed: 700,
  dots: false,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
$(".next_olympic_slide").on("click", function (e) {
  e.preventDefault();
  $(".anti-ragging-slider").slick("slickNext");
});
$(".prev_olympic_slide").on("click", function (e) {
  e.preventDefault();
  $(".anti-ragging-slider").slick("slickPrev");
});
// Research Page

$(".logo-width-slider").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$("#next_logo_slide").on("click", function (e) {
  e.preventDefault();
  $(".logo-width-slider").slick("slickNext");
});
$("#prev_logo_slide").on("click", function (e) {
  e.preventDefault();
  $(".logo-width-slider").slick("slickPrev");
});

$(".sponsored-projects-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  focusOnSelect: true,
  cssEase: "linear",
  touchMove: true,
  asNavFor: ".text-projects-slider",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// $('.text-projects-slider').slick({
//   slidesToShow: 1,
//   fade: true,
//   slidesToScroll: 1,
//   asNavFor: '.sponsored-projects-slider',
//   dots: false,
//   arrows: false,
//   focusOnSelect: false
// });
// $("#next-sp").on("click", function(e) {
//   e.preventDefault();
//   $(".sponsored-projects-slider").slick("slickNext");
// });
// $("#prev-sp").on("click", function(e) {
//   e.preventDefault();
//   $(".sponsored-projects-slider").slick("slickPrev");
// });

$(".publications-featured-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  focusOnSelect: true,
  fade: true,
  cssEase: "linear",
  touchMove: true,
});

$("#next-pub").on("click", function (e) {
  e.preventDefault();
  $(".publications-featured-slider").slick("slickNext");
});
$("#prev-pub").on("click", function (e) {
  e.preventDefault();
  $(".publications-featured-slider").slick("slickPrev");
});
// Research Page

// onscroll show sticky icons
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   var navWrap = $("header").offset().top;
//   if (y > navWrap) {
//     $(".sticky-bar").css("display", "block");
//   } else {
//     $(".sticky-bar").css("display", "none");
//   }
// });

$(".alumni-video-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  cssEase: "linear",
  touchMove: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".next-video-slide").on("click", function (e) {
  e.preventDefault();
  $(".alumni-video-slider").slick("slickNext");
});
$(".pre-video-slide").on("click", function (e) {
  e.preventDefault();
  $(".alumni-video-slider").slick("slickPrev");
});
$(".esteemed-visitors-slider").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  cssEase: "linear",
  touchMove: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
{
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
$(".next-visitors-slide").on("click", function (e) {
  e.preventDefault();
  $(".esteemed-visitors-slider").slick("slickNext");
});
$(".pre-visitors-slide").on("click", function (e) {
  e.preventDefault();
  $(".esteemed-visitors-slider").slick("slickPrev");
});

function selectCall(value) {
  value = value.substring(1);
  var vis = document.querySelector(".vis"),
    target = document.getElementById(value);

  if (vis !== null) {
    vis.className = "inv";
  }
  if (target !== null) {
    target.className = "vis";
  }
}

$(".explore-select").each(function (index, el) {
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;
  $this.addClass("select-hidden");
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');
  var $styledSelect = $this.next("div.select-styled");

  $styledSelect.text($this.children("option").eq(0).text());
  var $list = $("<ul/>", {
    class: "select-options",
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $("<li/>", {
      text: $this.children("option").eq(i).text(),
      rel: "." + $this.children("option").eq(i).val(),
      // onclick: "filterDept('"+ $this.children('option').eq(i).val() +"')",
    }).appendTo($list);
  }
  var $listItems = $list.children("li");
  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.select-styled.active")
      .not(this)
      .each(function () {
        $(this).removeClass("active").next("ul.select-options").hide();
      });
    $(this).toggleClass("active").next("ul.select-options").toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    // console.log($this.attr('id'));
    selectCall($(this).attr("rel"));
    $list.hide();
  });
  $(document).click(function () {
    $styledSelect.removeClass("active");
    $list.hide();
  });
});





// custom select start
if ($(window).width() <= 992) {
  $(".style-select").click(function () {
    $(".custom-select-list").toggle();
    $(".style-select .arrow").toggleClass("rotate");
  });
  $(".custom-select-list li a").click(function () {
    $(".custom-select-list li a").removeClass("active");
    $(this).addClass("active");
    $(".style-select").html(
      $(this).text() + ' <span class="arrow rotate"></span>'
    );
    $(".style-select .arrow").removeClass("rotate");
    $(".custom-select-list").hide();
  });
  $(document).click(function (event) {
    if (!$(event.target).closest(".custom-select-outer").length) {
      $(".custom-select-list").hide();
      $(".style-select .arrow").removeClass("rotate");
    }
  });
}
// custom select end

// custom select for internatioanl start
if ($(window).width() <= 1200) {
  $(".style-select").click(function () {
    $(".overview-custom-select-list, .edp-tabs, .schoool-program").toggle();
    $(".style-select .arrow").toggleClass("rotate");
  });
  $(".overview-custom-select-list li a, .edp-tabs li a, .schoool-program li a").click(function () {
    $(".overview-custom-select-list li a, .edp-tabs li a, .schoool-program li a").removeClass("active");
    $(this).addClass("active");
    $(".style-select").html(
      $(this).text() + ' <span class="arrow rotate"></span>'
    );
    $(".style-select .arrow").removeClass("rotate");
    $(".overview-custom-select-list, .edp-tabs, .schoool-program").hide();
  });
  $(document).click(function (event) {
    if (!$(event.target).closest(".overview-custom-select-outer, .custom-edp-outer, .programmes-options").length) {
      $(".overview-custom-select-list, .edp-tabs, .schoool-program").hide();
      $(".style-select .arrow").removeClass("rotate");
    }
  });
}
// custom select for internatioanl end

// custom navigation scroll css start
var sticky_header = $("#header");
var headerOffset = sticky_header.offset().top;
var mobile_sticky_header = $(".mobile-sticky-header");
var navOffset = mobile_sticky_header.offset().top;
$(window).scroll(function () {
  if ($(window).scrollTop() > headerOffset) {
    sticky_header.addClass("sticky");
  } else {
    sticky_header.removeClass("sticky");
  }
});

if ($(window).width() <= 1024) {
  $("#header .container-fluid").removeClass("container-fluid");
  $(".scroll-logo").addClass("mobile-scroll-logo");
  $(".mobile-scroll-logo").removeClass("scroll-logo");
  // $(".mobile-scroll-logo").attr("src","https://www.lpu.in/lpu-assets/images/logo/LPU-socila-logo.svg");
  $(window).scroll(function () {
    if ($(window).scrollTop() > navOffset) {
      mobile_sticky_header.addClass("sticky");
      sticky_header.removeClass("sticky");
      $(".mobile-scroll-logo").attr(
        "src",
        "https://www.lpu.in/lpu-assets/images/logo/LPU-socila-logo.svg"
      );
    } else {
      mobile_sticky_header.removeClass("sticky");
      $(".mobile-scroll-logo").attr(
        "src",
        "https://www.lpu.in/lpu-assets/images/logo/logo.svg"
      );
    }
  });
}

function myFunction(x) {
  x.classList.toggle("change");
}

function PlusMinusFunction(x) {
  x.classList.toggle("plusMinus");
}

if ($(window).width() >= 992) {
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    var headerWrap = $(".mobile-sticky-header").offset().top;
    //var actionWidth = $(window).width();
    if (y > headerWrap) {
      $(".page-custom-nav").addClass("fixed-nav");
    } else {
      $(".page-custom-nav").removeClass("fixed-nav");
    }
  });
}
// custom navigation scroll css end

$(document).ready(function () {
  $("a.fromscroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

let ncount = 0;
$(".feedback-btn").click(function () {
  ncount = 0;
  feedbackForms();
  $("#feedback-modal").removeAttr("style");
  $("#feedback-modal").css("display", "flex");
});
let allQuestionAnswers = [];
let firstQuestion = [];
let yesQuestion = [];
let noQuestion = [];
feedbackForms();
let lengthNumber = 0;
let totalLength = 0;
let nextIndex = 0;
let alreadyUsed = 0;

function feedbackForms() {
  $("#feebackSubmitbtn1").hide();

  $.get(
    "https://services.lpu.in/api/website/GetFeeBackQuestionAnswers",
    function (data) {
      //$.get('http://localhost:64383/api/website/GetFeeBackQuestionAnswers', function(data) {
      //debugger;
      // console.log(data);

      alreadyUsed = 0;
      nextIndex = 0;

      let linkedQue = "";
      let dt = data.filter((x) => x.LinkedQUestion != "0");

      if (dt.length > 0) {
        yesQuestion = [];
        firstQuestion = dt[0];
        let newAll = data.filter(
          (x) => x.QuestionId != dt[0]["LinkedQUestion"]
        );
        for (let i = 1; i < newAll.length; i++) {
          yesQuestion.push(newAll[i]);
        }

        // yesQuestions = data.filter(x=>x.QuestionId != dt[0]['LinkedQUestion']);
        linkedQue = dt[0]["LinkedQUestion"];
        noQuestion = [];
        //  noQuestion.push(dt[0]);
        noQuestion.push(data.filter((x) => x.QuestionId == linkedQue)[0]);
        let dddd = data;
        dddd = dddd.filter((x) => x.QuestionId != dt[0].QuestionId);
        dddd = dddd.filter((x) => x.QuestionId != linkedQue);
        for (let i = 0; i < dddd.length; i++) {
          noQuestion.push(dddd[i]);
        }
      }

      var item = yesQuestion;
      var html1 = "";
      $("#dvWaitFeeback").hide();
      $("#dvfeedback").html("");
      $("#feebackSubmitbtn").hide();
      //debugger;
      let allData = yesQuestion;
      let allDataN = noQuestion;
      allQuestionAnswers = allData;
      totalLength = allData.length;

      html1 =
        "<div id='dvQuestions0' ><h4 id='question0' class='mb10'>Q1:" +
        firstQuestion.Question +
        "</h4>";

      var htmlAnswer1 = "<div>";
      if (firstQuestion.Type == "text") {
        htmlAnswer1 +=
          "<textarea rows='4' onclick='gotonext(0);' id='AnswerQuesion_" +
          firstQuestion["QuestionId"] +
          "'  class='feedbackData form-control' style='width: 95%;resize: none;'    />";
      } else {
        for (let j = 0; j < firstQuestion.feedBackAnswers.length; j++) {
          htmlAnswer1 +=
            "<input id='Answer" +
            firstQuestion.feedBackAnswers[j]["AnswerId"] +
            "' onclick='gotonext(0);' class='radio-style feedbackData' name='radio-group-" +
            firstQuestion.QuestionId +
            "' type='radio'><label for='Answer" +
            firstQuestion.feedBackAnswers[j]["AnswerId"] +
            "' class='radio-style-2-label'>" +
            firstQuestion.feedBackAnswers[j]["Answer"] +
            "</label>";
        }
      }

      html1 += htmlAnswer1;
      $("#dvfeedback").html(html1);
    }
  );
}

function gotoNextNew() {
  $("#dvQuestions" + nextIndex).hide();
  $("#feebackSubmitbtn1").hide();

  nextIndex++;
  ncount++;
  $("#dvQuestions" + nextIndex).show();
  $("#dvWaitFeeback").hide();
  // gotonext(nextIndex);
}

function gotonext11(i) {
  alreadyUsed = 1;
  nextIndex = i;
  $("#feebackSubmitbtn1").show();
}

function gotonext(i) {
  var html = "";
  if (i == 0) {
    let ddd = firstQuestion;
    let datas = $(
      'input[name="radio-group-' + firstQuestion.QuestionId + '"]:checked'
    )[0]["id"];
    let splitValue = datas.split("Answer");
    var params = {};

    $(
      'input[name="radio-group-' + firstQuestion.QuestionId + '"]:checked'
    ).each(function () {
      var idVal = $(this).attr("id");
      if ($("label[for='" + idVal + "']").text() == "No") {
        var x = 0;
        let allQUestionsN = [];
        allQUestionsN.push(firstQuestion);
        for (let i = 0; i < noQuestion.length; i++) {
          allQUestionsN.push(noQuestion[i]);
        }
        allQuestionAnswers = allQUestionsN;
        let allData = allQuestionAnswers;
        for (let i = 1; i < allData.length; i++) {
          let qIndex = i + 1;
          html +=
            "<div id='dvQuestions" +
            i +
            "' style='display:none;'><h4 id='question" +
            i +
            "' class='mb10'>Q " +
            qIndex +
            ": " +
            allData[i].Question +
            "</h4>";

          var htmlAnswer = "<div>";
          if (allData[i].Type == "text") {
            let h = i;
            if (h + 1 == allData.length) {
              htmlAnswer +=
                "<textarea rows='4' onclick='gotonext(" +
                i +
                ");' id='AnswerQuesion_" +
                allData[i]["QuestionId"] +
                "'  class='feedbackData form-control' style='width: 95%;resize: none;'    />";
            } else {
              htmlAnswer +=
                "<textarea rows='4' onclick='gotonext11(" +
                i +
                ");' id='AnswerQuesion_" +
                allData[i]["QuestionId"] +
                "'  class='feedbackData form-control' style='width: 95%;resize: none;'    />";
            }
          } else {
            for (let j = 0; j < allData[i].feedBackAnswers.length; j++) {
              htmlAnswer +=
                "<input id='Answer" +
                allData[i].feedBackAnswers[j]["AnswerId"] +
                "' onclick='gotonext(" +
                i +
                ");' class='radio-style feedbackData' name='radio-group-" +
                allData[i].QuestionId +
                "' type='radio'><label for='Answer" +
                allData[i].feedBackAnswers[j]["AnswerId"] +
                "' class='radio-style-2-label'>" +
                allData[i].feedBackAnswers[j]["Answer"] +
                "</label>";
            }
          }
          htmlAnswer += "</div></div>";
          html += htmlAnswer;
        }

        $("#dvfeedback").append(html);

        totalLength = allData.length;
      } else {
        let allQUestionsN = [];
        allQUestionsN.push(firstQuestion);
        for (let i = 0; i < yesQuestion.length; i++) {
          allQUestionsN.push(yesQuestion[i]);
        }
        allQuestionAnswers = allQUestionsN;
        let allData = allQuestionAnswers;
        for (let i = 1; i < allData.length; i++) {
          let qIndex = i + 1;
          html +=
            "<div id='dvQuestions" +
            i +
            "' style='display:none;'><h4 id='question" +
            i +
            "' class='mb10'>Q " +
            qIndex +
            ": " +
            allData[i].Question +
            "</h4>";

          var htmlAnswer = "<div>";
          if (allData[i].Type == "text") {
            htmlAnswer +=
              "<textarea rows='4' onclick='gotonext(" +
              i +
              ");' id='AnswerQuesion_" +
              allData[i]["QuestionId"] +
              "'  class='feedbackData form-control' style='width: 95%;resize: none;'    />";
          } else {
            for (let j = 0; j < allData[i].feedBackAnswers.length; j++) {
              htmlAnswer +=
                "<input id='Answer" +
                allData[i].feedBackAnswers[j]["AnswerId"] +
                "' onclick='gotonext(" +
                i +
                ");' class='radio-style feedbackData' name='radio-group-" +
                allData[i].QuestionId +
                "' type='radio'><label for='Answer" +
                allData[i].feedBackAnswers[j]["AnswerId"] +
                "' class='radio-style-2-label'>" +
                allData[i].feedBackAnswers[j]["Answer"] +
                "</label>";
            }
          }
          htmlAnswer += "</div></div>";
          html += htmlAnswer;
        }

        $("#dvfeedback").append(html);
        totalLength = allData.length;
      }
    });
  }

  if (totalLength != ncount) {
    ncount++;
    $("#dvWaitFeeback").show();
  } else {
    $("#dvWaitFeeback").hide();
  }
  let v = i + 1;
  lengthNumber = v;
  setTimeout(function () {
    if (totalLength == ncount) {
      $("#dvWaitFeeback").hide();
      $("#feebackSubmitbtn").show();
    } else {
      $("#dvQuestions" + i).hide();
      $("#dvQuestions" + lengthNumber).show();
      $("#dvWaitFeeback").hide();
    }
    if (alreadyUsed > 0) {
      if (allQuestionAnswers[i + 1]["Type"] == "text") {
        $("#feebackSubmitbtn").show();
      }
    }
  }, 700);
}

function submitFeeback() {
  let counts = 0;
  let allAnsers = "";
  for (let i = 0; i < allQuestionAnswers.length; i++) {
    if (allQuestionAnswers[i]["Type"] == "text") {
      let newAnswers = $(
        "#AnswerQuesion_" + allQuestionAnswers[i]["QuestionId"]
      ).val();
      allAnsers += allQuestionAnswers[i].QuestionId + "," + newAnswers + "_";
    } else {
      if (
        $(
          'input[name="radio-group-' +
            allQuestionAnswers[i].QuestionId +
            '"]:checked'
        ).length > 0
      ) {
        let datas = $(
          'input[name="radio-group-' +
            allQuestionAnswers[i].QuestionId +
            '"]:checked'
        )[0]["id"];
        let splitValue = datas.split("Answer");
        var params = {};
        // params['QuestionId'] = allQuestionAnswers[i].QuestionId;
        // params['AnswereId'] = splitValue[1];
        allAnsers +=
          allQuestionAnswers[i].QuestionId + "," + splitValue[1] + "_";
        //allAnsers.push({ QuestionId: allQuestionAnswers[i].QuestionId, AnswerId: splitValue[1]});
      } else {
        counts++;
      }
    }
  }
  //debugger;
  if (counts > 0) {
    Swal.fire("Good job!", "Please fill all feedback forms !", "error");

  } else {
    var questionAnswers = [];
    var d = {
      Questions: allAnsers,
    };

    questionAnswers.push(d);
    //debugger;
    $.post(
      "https://services.lpu.in/api/website/AddFeeBackQuestionAnswers",
      d,
      function (data) {
        Swal.fire("Good job!", "Feedback captured successfully !", "success");
        feedbackForms();
        $("#feedback-modal").modal("hide");
      }
    );
  }
}

function IsEmail(email) {
  var regex =
    /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}


// international homepage counrty specific dropdown
$(document).ready(function () {
  $(".dropdown-item").click(function (event) {
    event.preventDefault();
    $("#dropdownMenuButton").text($(this).text());
    var url = $(this).attr("href");
    window.open(url, "_blank");
  });
});


// student-grievance-redressal Start
$("#btnSGOTP").click(function () {
  //  debugger;
  var SGEmail = $("#txtSGEmail").val();
  if (SGEmail != "") {
    if (IsEmail(SGEmail)) {
      $("#btnSGOTP").hide();
      $("#btnSGOtpLoader").show();
      // $.get('http://localhost:44319/Services/api/Event/sendOtp?email=' + $("#txtSGEmail").val(), function (
      $.get(
        "https://schools.lpu.in/Services/api/Event/sendOtp?email=" + SGEmail,
        function (data) {
          if (data == "success") {
            Swal.fire(
              "Success!",
              "otp sent on your email id please check !",
              "success"
            );
            $("#btnSGOTP").hide();
            $("#dvOtpSend").show();
            $("#btnSGOtpLoader").hide();
          } else {
            Swal.fire("error!", "something wrong try again later !", "error");
            $("#btnSGOTP").show();
            $("#btnSGOtpLoader").hide();
          }
        }
      );
    } else {
      Swal.fire("Error!", "Please enter valid email !", "error");
    }
  } else {
    Swal.fire("Error!", "Please enter email !", "error");
  }
});

// debugger;
var $el = $("#aStudentGrievance");
var dataType = $el.data("type");

$("#aStudentGrievance").click(function () {
  // debugger;
  var modalTarget = $el.data("bs-target");
  var $modalTitle = $(modalTarget).find(".modal-title");
  if (dataType === "caste-based") {
    $modalTitle.html("Caste-based discrimination complaints");
    $("#txtSGName").val("");
    $("#txtSGEmail").val("");
    $("#txtSGPhone").val("");
    $("#txtSGDesc").val("");
    $("#txtOtp").val("");
    $("#btnSGOTP").show();
    $("#dvOtpSend").hide();
    $("#ddlNG").hide();
    $("#btnSGOtpLoader").hide();
    $("#btnSGLoader").hide();
    $(".attachment").hide();
    $(".natureofgrievance").hide();
    $(".Subject").hide();
  } else {
    $modalTitle.html("Grievance Details");
    $("#txtSGName").val("");
    $("#txtSGEmail").val("");
    $("#txtSGPhone").val("");
    $("#txtSGDesc").val("");
    $("#txtSGSubject").val("");
    $("#ddlNG").val("");
    $("#txtOtp").val("");
    $("#btnSGOTP").show();
    $("#dvOtpSend").hide();
    $("#btnSGOtpLoader").hide();
    $("#btnSGLoader").hide();
  }
});

$("#btnSG").click(function () {
  if (dataType === "caste-based") {
    if ($("#txtSGName").val() == "") {
      Swal.fire("Error!", "Please enter name !", "error");
      return false;
    }
    if ($("#txtSGEmail").val() == "") {
      Swal.fire("Error!", "Please enter email !", "error");
      return false;
    }
    if ($("#txtSGPhone").val() == "") {
      Swal.fire("Error!", "Please enter phone !", "error");
      return false;
    }
    if ($("#txtOtp").val() == "") {
      Swal.fire("Error!", "Please enter otp !", "error");
      return false;
    }
    if ($("#txtSGDesc").val() == "") {
      Swal.fire("Error!", "Please enter description !", "error");
      return false;
    }
  } else {
    var ext = $("#txtFile").val().split(".").pop().toLowerCase();
    if ($.inArray(ext, ["gif", "png", "jpg", "jpeg", "pdf"]) == -1) {
      Swal.fire(
        "Error!",
        "Please select only jpg,png,jpeg,pdf file format !",
        "error"
      );
      return false;
    }
    // txtSGName,txtSGEmail,txtOtp,txtSGPhone,txtSGDesc
    if ($("#txtSGName").val() == "") {
      Swal.fire("Error!", "Please enter name !", "error");
      return false;
    }
    if ($("#txtSGEmail").val() == "") {
      Swal.fire("Error!", "Please enter email !", "error");
      return false;
    }
    if ($("#txtSGPhone").val() == "") {
      Swal.fire("Error!", "Please enter phone !", "error");
      return false;
    }
    if ($("#txtOtp").val() == "") {
      Swal.fire("Error!", "Please enter otp !", "error");
      return false;
    }
    if ($("#ddlNG").val() == "") {
      Swal.fire("Error!", "Please select nature of grievance !", "error");
      return false;
    }
    if ($("#txtSGSubject").val() == "") {
      Swal.fire("Error!", "Please enter subject !", "error");
      return false;
    }
    if ($("#txtSGDesc").val() == "") {
      Swal.fire("Error!", "Please enter description !", "error");
      return false;
    }
  }

  var d = {
    Name: $("#txtSGName").val(),
    Email: $("#txtSGEmail").val(),
    Phone: $("#txtSGPhone").val(),
    Desc: $("#txtSGDesc").val(),
    Otp: $("#txtOtp").val(),
  };


  $("#btnSG").hide();
  $("#btnSGLoader").show();
  // debugger;
  var formData = new FormData();
  if (dataType === "caste-based") {
    formData.append("SGName", $("#txtSGName").val());
    formData.append("SGEmail", $("#txtSGEmail").val());
    formData.append("SGPhone", $("#txtSGPhone").val());
    formData.append("SGDesc", $("#txtSGDesc").val());
    formData.append("Otp", $("#txtOtp").val());
    formData.append("nature",  $("#ddlNG").val(null));
    formData.append("SGSubject", "Caste-based discrimination complaints");
    formData.append("file", null);
  } else {
    formData.append("SGName", $("#txtSGName").val());
    formData.append("SGEmail", $("#txtSGEmail").val());
    formData.append("SGPhone", $("#txtSGPhone").val());
    formData.append("SGDesc", $("#txtSGDesc").val());
    formData.append("Otp", $("#txtOtp").val());
    formData.append("nature", $("#ddlNG").val());
    formData.append("SGSubject", $("#txtSGSubject").val());
    formData.append("file", $("#txtFile")[0].files[0]);
  }

  //debugger;
  $.ajax({
    url: "https://schools.lpu.in/Services/api/Event/AddStudentGrievance",
    //url: "http://localhost:44319/Services/api/Event/AddStudentGrievance",
    type: "POST",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function (data) {
      if (data == "otp not verified") {
        Swal.fire("Error!", "Invalid OTP !", "error");
        $("#btnSG").show();
        $("#btnSGLoader").hide();
      } else if (data == "0") {
        Swal.fire("Error!", "Something wrong try again later !", "error");
        $("#btnSG").show();
        $("#btnSGLoader").hide();
      } else {
        Swal.fire(
          "Success!",
          "Student Grievance feedback captured successfully !",
          "success"
        );
        $("#btnSG").show();
        $("#btnSGLoader").hide();
        $("#txtSGName").val("");
        $("#txtSGEmail").val("");
        $("#txtSGPhone").val("");
        $("#txtSGDesc").val("");
        $("#txtSGSubject").val("");
        $("#ddlNG").val("");
        $("#txtOtp").val("");
        $("#btnSGOTP").show();
        $("#dvOtpSend").hide();
      }
    },
  });
});

// student-grievance-redressal End



tabControl();
        var resizeTimer;
        $(window).on('resize', function(e) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                tabControl();
            }, 250);
        });

        function tabControl() {
            var tabs = $('.tabbed-content').find('.tabs');
            if (tabs.is(':visible')) {
                tabs.find('a').on('click', function(event) {
                    event.preventDefault();
                    var target = $(this).attr('href'),
                        tabs = $(this).parents('.tabs'),
                        buttons = tabs.find('a'),
                        item = tabs.parents('.tabbed-content').find('.admissions-item');
                    buttons.removeClass('active');
                    item.removeClass('active');
                    $(this).addClass('active');
                    $(target).addClass('active');
                });
            } else {
                $('.admissions-item').on('click', function() {
                    var container = $(this).parents('.tabbed-content'),
                        currId = $(this).attr('id'),
                        items = container.find('.admissions-item');
                    container.find('.tabs a').removeClass('active');
                    items.removeClass('active');
                    $(this).addClass('active');
                    container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
                });
            }
        }

