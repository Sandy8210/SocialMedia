const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  loop: true,
  direction: "horizontal",
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  spaceBetween: 100,
});

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,
  autoplay: {
    delay: 500,
  },
  speed: 1000,
  breakpoints: {
    // whwn window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    // whwn window width is >= 768px
    768: {
      slidesPerView: 2,
    },

    // whwn window width is >= 968px
    968: {
      slidesPerView: 3,
    },
  },
});
