import Swiper from 'swiper';
import 'swiper/css/bundle';

import Alpine from 'alpinejs'
window.Alpine = Alpine


Alpine.data('spiderSolutionFAQ', () => (
  {
    openIndex: 4,
    faqData: [
      {
        title: 'Verdensledende optimalisering',
        content: 'SPIDER finner løsninger som ellers er nær umulige å sette opp manuelt — og gjør det på minutter med dokumentert verdensrekordnivå i krevende testcase.'
      },
      {
        title: 'Kompetanse, regler og krav — alltid riktig',
        content: 'Systemet matcher oppdrag mot kompetansekrav, tilgjengelighet og regler. Du får kvalitet og trygghet i hver eneste rute.'
      },
      {
        title: 'Fleksibilitet som tilpasses hver kommune',
        content: 'Hver kommune jobber forskjellig. SPIDER tilpasses lokale regler, praksis og behov – uten begrensninger i hvordan planer settes opp.'
      },
      {
        title: 'Bedre kontinuitet og kvalitet i tjenesten',
        content: 'SPIDER sikrer samme pleier når det er viktig, håndterer pauser riktig og gir bedre flyt i tjenesten for både pleier og pasient.'
      },
      {
        title: 'Planer ferdige på minutter',
        content: 'SPIDER finner løsninger på minutter som ellers er ekstremt krevende å planlegge manuelt – og leverer kvalitet som er dokumentert i krevende internasjonale testcase.'
      }
    ]
  }
));

Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.testimonial-swiper', {
    slidesPerView: 1.1, // Shows a piece of the next slide on mobile
    spaceBetween: 30,
    grabCursor: true,
    loop: false, // Recommended to keep "left edge" logic simple
    navigation: {
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-prev-btn',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      1280: {
        slidesPerView: 3, // Matches the 3-column Figma look
      },
    },
  });
});