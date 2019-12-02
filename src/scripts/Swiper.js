export default class Slider {
  constructor() {
    fetch("http://fra-oven.dk/wordpress/wp-json/acf/v3/slideshow_post/")
      .then(data => data.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          let element = `<div class="swiper-slide"><img src="${data[i].acf.pic}"/><div class="slide-overlay"></div><h2 class="slide-text">${data[i].acf.text}</h2></div>`;
          swiper.appendSlide(element);
        }
      })
      .catch(err => {
        console.error(err);
      });

    let swiper = new Swiper(".swiper-container", {
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
  }
}
