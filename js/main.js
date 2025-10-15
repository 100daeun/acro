

// gnb
$(".gnb > li").mouseenter(function () {
  $(this).find(".depth2").stop().fadeIn();
});
$(".gnb > li").mouseleave(function () {
  $(this).find(".depth2").stop().fadeOut();
});

// mgnb_wrap
$(".btn_ham").click(function () {
  $(".dim").fadeIn();
  $(".mgnb_wrap").animate({
    "right": "0"
  });
});
$(".mgnb_close").click(function () {
  $(".dim").fadeOut();
  $(".mgnb_wrap").animate({
    "right": "-100%"
  });
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

// serach
$(".btn_search").click(function () {
  $(".search").fadeIn();
});
$(".search_close").click(function () {
  $(".search").fadeOut();
});

const visual_list = new Swiper(".visual_list", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: '.swiper-pagination',
    type: "fraction",

  },
  loop: true,
});

const info_list = new Swiper(".info_list", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 3,
  loop: true,
  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
});

const technology_txt_list = new Swiper(".technology_txt_list", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const technology_img_list = new Swiper(".technology_img_list", {
  effect: 'fade',
  fadeEffect: {
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
  },
});

technology_txt_list.controller.control = technology_img_list;
technology_img_list.controller.control = technology_txt_list;

//아코디언 효과
$(".gallery ul li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});

// aos
AOS.init({
  duration: 2000,
  once: true,
});