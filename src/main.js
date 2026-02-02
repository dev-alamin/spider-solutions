// import Swiper from 'swiper';
// import 'swiper/css/bundle';
import {initGSAPAnimations} from './scripts/animation'

import Alpine from 'alpinejs'
window.Alpine = Alpine


document.addEventListener('alpine:init', () => {
  Alpine.data('functionalityFilter', () => ({
    activeTab: 'Planlegging & optimalisering',
    categories: [
      'Planlegging & optimalisering',
      'Kompetanse, roller & kvalitet',
      'Regler, pauser & arbeidsflyt',
      'Fleksibilitet, integrasjoner & systemlogikk'
    ],
    tags: {
      'Planlegging & optimalisering': [
        'TT/ATA-tid', 'Tidligste/seneste ankomst', 'Minimering av kjøring',
        'Optimert utnytting', '2-pleieroppdrag', 'Automatisert 2P/PAR-oppsett',
        'Parallell optimalisering', 'Tunge oppdrag-begrensninger',
        'Optimert kjøring / færre stopp', '2 personer turer (dele bil)',
        'Langvarige oppdrag (optimalisering)', 'Dagsenterkjøring'
      ],
      'Kompetanse, roller & kvalitet': [
        'Kompetansematching', 'Ansvarsvakter', 'Kvalitetskontroll',
        'Brukerkontinuitet', 'Spesialist-team', 'Autorisasjonsstyring'
      ],
      'Regler, pauser & arbeidsflyt': [
        'Arbeidsmiljøloven', 'Pauseoptimalisering', 'Vaktbytte-logikk',
        'Kjøretidsberegning', 'Hviletidskontroll'
      ],
      'Fleksibilitet, integrasjoner & systemlogikk': [
        'EPJ-integrasjon', 'API-tilgang', 'Sanntidsdata',
        'Skybasert arkitektur', 'Tilpasset rapportering'
      ]
    }
  }));


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
})


Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
  
  initGSAPAnimations();

  new Swiper('.testimonial-swiper', {
    slidesPerView: 1.1, // Shows a piece of the next slide on mobile
    spaceBetween: 30,
    grabCursor: true,
    loop: false, // Recommended to keep "left edge" logic simple
    // mousewheel: true,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-prev-btn',
    },
    // autoplay: {
    //   delay: 3000, // 3 seconds
    //   disableOnInteraction: false, // Continue after interaction
    // },
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
});