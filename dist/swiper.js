"use strict";

fetch("../content/test.json").then(function (data) {
  return data.json();
}).then(function (data) {
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    var element = "<div class=\"swiper-slide\"><img src=\"".concat(data[i].img, "\"/></div>");
    swiper.appendSlide(element);
  }
})["catch"](function (err) {
  console.error(err);
});
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});