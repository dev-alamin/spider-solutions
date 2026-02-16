const sliderJs = () => {
    const el = document.querySelector('.testimonial-swiper');

    const { Navigation, Pagination } = window.SwiperModules;

    new window.Swiper(el, {
        modules: [Navigation, Pagination],
        speed: 500
    });

    new window.Swiper('.testimonial-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.1, // Shows a piece of the next slide on mobile
    spaceBetween: 30,
    grabCursor: true,
    loop: true, // Recommended to keep "left edge" logic simple
    // mousewheel: true,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-prev-btn',
    },
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false, // Continue after interaction
    },
    speed: 500,
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      1280: {
        slidesPerView: 3, // Matches the 3-column Figma look
      },
    },
  });

  new window.Swiper('.value-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1.2,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: '.swiper-next-custom',
      prevEl: '.swiper-prev-custom',
    },
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false, // Continue after interaction
    },
    breakpoints: {
      640: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 2.9,
      },
    },
  });

  new window.Swiper('.functionalities-slider', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },

    freeMode: true, // Crucial for ticker effect
    // breakpoints: {
    //   640: { slidesPerView: 2.2 },
    //   1024: { slidesPerView: 5.5 },
    // },
  });
};

export default sliderJs;
