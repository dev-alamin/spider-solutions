import './vendor';
import sliderJs from './modules/slider';

document.addEventListener('alpine:init', () => {
  Alpine.store('lightbox', {
    open: false,
    source: '',
    show(src) {
      this.source = src;
      this.open = true;
      document.body.style.overflow = 'hidden'; // Stop scrolling
    },
    hide() {
      this.open = false;
      document.body.style.overflow = 'auto'; // Start scrolling
    }


  });

  // 2. Inject the Lightbox HTML into the Bottom of the Body
  const lightboxHTML = `
        <div x-data x-cloak>
            <div x-show="$store.lightbox.open" 
                 class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
                 style="display: none;"
                 @keydown.escape.window="$store.lightbox.hide()">
                
                <div x-show="$store.lightbox.open"
                     x-transition:enter="transition ease-out duration-300"
                     x-transition:enter-start="opacity-0"
                     x-transition:enter-end="opacity-100"
                     x-transition:leave="transition ease-in duration-200"
                     class="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"></div>

                <button @click="$store.lightbox.hide()" 
                        class="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-[10000] group">
                    <svg class="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div x-show="$store.lightbox.open"
                     x-transition:enter="transition ease-out duration-300"
                     x-transition:enter-start="opacity-0 scale-95 translate-y-4"
                     x-transition:enter-end="opacity-100 scale-100 translate-y-0"
                     x-transition:leave="transition ease-in duration-200"
                     @click.away="$store.lightbox.hide()"
                     class="relative max-w-[95vw] max-h-[90vh] z-10 p-2">
                    <img :src="$store.lightbox.source" 
                         class="rounded-2xl shadow-2xl border border-white/10 object-contain max-h-[85vh] mx-auto">
                    <div class="mt-4 text-center">
                        <span class="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">Esc to close</span>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML('beforeend', lightboxHTML);

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

  Alpine.data('spiderContactFormData', () => (
    {
      formData: { name: '', email: '', subject: '', message: '', privacy: false },
      errors: {},
      loading: false,
      success: false,

      validate() {
        this.errors = {};
        if (!this.formData.name) this.errors.name = 'Navn er påkrevd';
        if (!this.formData.email) {
          this.errors.email = 'E-post er påkrevd';
        } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
          this.errors.email = 'Ugyldig e-postadresse';
        }
        if (!this.formData.privacy) this.errors.privacy = 'Du må godta personvernerklæringen';

        return Object.keys(this.errors).length === 0;
      },

      submitForm() {
        if (!this.validate()) return;

        this.loading = true;
        // Simulate API call
        setTimeout(() => {
          this.loading = false;
          this.success = true;
          // Reset form after success
          this.formData = { name: '', email: '', subject: '', message: '', privacy: false };
        }, 1500);
      }
    }
  ));
})

Alpine.start();

document.addEventListener("DOMContentLoaded", () => {

  sliderJs();

  const containers = document.querySelectorAll('[data-glows]');

  if (!containers) return;

  containers.forEach(container => {
    try {
      container.style.position = 'relative';
      container.style.overflow = 'hidden';

      let rawData = container.dataset.glows;
      let glowConfigs = JSON.parse(rawData);

      // Force it into an array if the user only provided one object {}
      if (!Array.isArray(glowConfigs)) {
        glowConfigs = [glowConfigs];
      }

      glowConfigs.forEach(config => {
        const glow = document.createElement('div');
        Object.assign(glow.style, {
          position: 'absolute',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: config.zIndex || '-1',
          filter: `blur(${config.blur || '100px'})`,
          opacity: config.opacity || '0.4',
          width: config.width || '50vw',
          height: config.height || '50vh',
          background: `radial-gradient(circle, ${config.color} 0%, rgba(255,255,255,0) 70%)`,
          top: config.top || 'auto',
          bottom: config.bottom || 'auto',
          left: config.left || 'auto',
          right: config.right || 'auto'
        });
        container.appendChild(glow);
      });
    } catch (e) {
      console.error("Glow initialization failed. Check your JSON format!", e);
    }
  });


});