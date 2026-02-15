import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from 'gsap/SplitText';
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

gsap.config({
    nullTargetWarn: false,
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize Lenis

export const initGSAPAnimations = () => {

    const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.07,
        anchors: true,
        anchors: {
            offset: -100,
        }
    });

    // --- 1. GLOBAL HEADINGS (.reveal-type) ---
    const headings = document.querySelectorAll('.reveal-type');
    headings.forEach((heading) => {
        // 1. Split text into characters and lines
        // Wrapping in lines helps handle responsive wraps correctly
        const split = new SplitText(heading, {
            type: 'lines, chars',
            linesClass: 'overflow-hidden' // Ensures characters are "masked" by their line
        });

        // 2. The Animation
        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: heading,
                start: 'top 90%', // Starts when heading is 85% from top of viewport
                end: 'bottom 10%',
                toggleActions: 'restart none none none',
            },
            y: 100,              // Slide up from 100px
            opacity: 0,          // Fade in
            filter: "blur(10px)",
            rotateX: -45,        // Subtle 3D tilt for a premium feel
            stagger: 0.01,       // Speed between letters
            duration: 1.2,       // Total time for each letter
            ease: 'power4.out',  // High-end smooth deceleration
            onComplete: () => {
                // Revert splitting to keep the DOM clean/accessible after animation
                // split.revert(); 
            }
        });
    });

    // --- 2. GLOBAL STAGGERED GRIDS (.reveal-grid) ---
    const grids = document.querySelectorAll('.reveal-grid');
    grids.forEach((grid) => {
        gsap.from(grid.querySelectorAll('.reveal-card'), {
            y: 60,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.2,
            stagger: 0.25,
            ease: "power3.out",
            scrollTrigger: {
                trigger: grid,
                start: "top 80%",
                toggleActions: "restart none none none"
            }
        });
    });

    // --- 3. GLOBAL COUNTER-UP (.counter-up) ---
    const counters = document.querySelectorAll('.counter-up');
    counters.forEach((counter) => {
        const targetValue = parseFloat(counter.innerText);
        const suffix = counter.innerText.replace(/[0-9.]/g, ''); // Extract %, +, M, etc.

        // Reset text to 0 initially
        counter.innerText = "0" + suffix;

        gsap.to(counter, {
            innerText: targetValue,
            duration: 2,
            snap: { innerText: 1 }, // Steps by 1 (or 0.1 for decimals)
            ease: "power2.out",
            scrollTrigger: {
                trigger: counter,
                start: "top 90%",
                toggleActions: "restart none none none",
            },
            onUpdate: function () {
                // Keep the suffix (%, M, +) during the count
                counter.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
            }
        });
    });

    // --- 4. GLOBAL BUTTON REVEAL (.reveal-button) ---
    const buttons = document.querySelectorAll('.reveal-button');
    buttons.forEach((btn) => {
        gsap.from(btn, {
            y: 30,              // Rise up from below
            opacity: 0,
            scale: 0.8,         // Start slightly smaller
            duration: 2,
            ease: "back.out(1.7)", // The "Spring" effect
            scrollTrigger: {
                trigger: btn,
                start: "top 95%", // Trigger as soon as it nears the screen
                toggleActions: "restart none none none"
            }
        });
    });

    // --- 5. FAQ LIST ITEMS (.reveal-faq-list .faq-item) ---
    gsap.from(".reveal-faq-list .faq-item", {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".reveal-faq-list",
            start: "top 85%",
            toggleActions: "restart none none none"
        }
    });

    // --- 6. GLOBAL IMAGE REVEAL & MAGNETIC TILT ---

    // 1. Entrance Reveal for all images
    const imageReveals = document.querySelectorAll('.spider__image-reveal');
    imageReveals.forEach((reveal) => {
        const img = reveal.querySelector('img');
        if (!img) return;

        gsap.from(img, {
            scale: 1.3,
            duration: 2,
            filter: "blur(10px)",
            ease: "power2.out",
            scrollTrigger: {
                trigger: reveal,
                start: "top 90%",
                toggleActions: "restart none none none"
            }
        });
    });

    // 2. Magnetic Tilt for all cards
    const magneticCards = document.querySelectorAll('.spider__image-magnetic-animation');

    magneticCards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();

            // Find the center of the card
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate distance between mouse and center
            const moveX = (e.clientX - centerX) * 0.15; // Multiply by 'intensity' (0.15 = 15%)
            const moveY = (e.clientY - centerY) * 0.15;

            gsap.to(card, {
                x: moveX,
                y: moveY,
                ease: "power2.out",
                duration: 0.6
            });
        });

        // Reset position when mouse leaves
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                x: 0,
                y: 0,
                ease: "elastic.out(1, 0.3)", // Adds a nice 'snap back' bounce
                duration: 0.8
            });
        });
    });

    // List item anim 
    const lists = document.querySelectorAll('.reveal-list');

    lists.forEach((list) => {
        const items = list.querySelectorAll('li');

        gsap.from(items, {
            scrollTrigger: {
                trigger: list,
                start: "top 85%", // Starts when the list is 85% from the top
                toggleActions: "restart none none none"
            },
            y: 30,
            opacity: 0,
            filter: "blur(10px)",
            blur: 10,
            stagger: 0.25, // Delay between each item
            duration: 1,
            ease: "expo.out",
            clearProps: "all" // Cleans up styles after animation
        });

        // Bonus: Animate the dots separately for a "Pop" effect
        const dots = list.querySelectorAll('span:first-child');
        gsap.from(dots, {
            scrollTrigger: { trigger: list, start: "top 85%" },
            scale: 0,
            rotation: 90,
            stagger: 0.15,
            duration: 0.6,
            ease: "back.out(2)"
        });
    });

    gsap.fromTo(".footer-logo img",
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
        {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".footer-logo",
                start: "top 90%",
                end: "bottom bottom",
                scrub: 1
            }
        }
    );

    // Stack Card Anim 
    // 3. Find all stacking wrappers on the page
    const wrappers = document.querySelectorAll('.gsap-pin-wrapper');

    wrappers.forEach((wrapper) => {
        const panels = wrapper.querySelectorAll('.gsap-pin-panel');

        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": function () {
                panels.forEach((panel) => {
                    ScrollTrigger.create({
                        trigger: panel,
                        start: "top 361px", // Adjust based on your header height
                        endTrigger: wrapper,
                        end: "bottom 85%",
                        pin: true,
                        pinSpacing: false,
                        scrub: true,
                        invalidateOnRefresh: true
                    });
                });
            }
        });
    });

    // Select all paragraphs inside the animated aside or any element with .reveal-text
    const paragraphs = document.querySelectorAll('.reveal-text p');

    paragraphs.forEach((p) => {
        // 1. Split text into lines
        const split = new SplitText(p, { type: "lines", linesClass: "overflow-hidden" });

        // 2. Animate each line from below the 'mask'
        gsap.from(split.lines, {
            y: 40,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1, // Creates the 'wave' effect between lines
            scrollTrigger: {
                trigger: p,
                start: "top 85%", // Starts when the paragraph enters the bottom 15% of screen
                toggleActions: "restart none none none", // Plays once
            }
        });
    });

    // Target the SVG rect or a wrapper
    gsap.to(".play-ripple", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        stagger: 0.5,
        ease: "power2.out"
    });
}