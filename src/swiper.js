fetch("../content/test.json")
  .then(data => data.json())
  .then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let element = `<div class="swiper-slide"><img src="${data[i].img}"/></div>`;
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
  },
  autoplay: {
    delay: 3000
  }
});
