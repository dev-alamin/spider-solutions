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
        openIndex: 0, // Default to first item
        activeImage: '/images/technology-section-main.png',
        
        init() {
            this.$watch('openIndex', (val) => {
                if (val !== null) {
                    // Start fade out logic or just switch
                    this.activeImage = this.faqData[val].image;
                }
            })
        },
      faqData: [
        {
          title: 'Planer ferdige på minutter',
          content: 'SPIDER finner løsninger på minutter som ellers er ekstremt krevende å planlegge manuelt – og leverer kvalitet som er dokumentert i krevende internasjonale testcase.',
          image: '/images/technology-section-main.png'
        },
        {
          title: 'Verdensledende optimalisering',
          content: 'SPIDER finner løsninger som ellers er nær umulige å sette opp manuelt — og gjør det på minutter med dokumentert verdensrekordnivå i krevende testcase.',
          image: 'https://images.unsplash.com/photo-1557825835-a526494be845?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Kompetanse, regler og krav — alltid riktig',
          content: 'Systemet matcher oppdrag mot kompetansekrav, tilgjengelighet og regler. Du får kvalitet og trygghet i hver eneste rute.',
          image: 'https://images.unsplash.com/photo-1726607424562-62cf93236dd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Fleksibilitet som tilpasses hver kommune',
          content: 'Hver kommune jobber forskjellig. SPIDER tilpasses lokale regler, praksis og behov – uten begrensninger i hvordan planer settes opp.',
          image: 'https://images.unsplash.com/photo-1726066012751-2adfb5485977?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'Bedre kontinuitet og kvalitet i tjenesten',
          content: 'SPIDER sikrer samme pleier når det er viktig, håndterer pauser riktig og gir bedre flyt i tjenesten for både pleier og pasient.',
          image: 'https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
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