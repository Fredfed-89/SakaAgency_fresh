import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    }
  }
});
