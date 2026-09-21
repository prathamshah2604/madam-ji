import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered flower bloom animation.
 * Each flower fades + scales in when it enters the viewport.
 *
 * @param {HTMLElement[]} flowers - Array of flower container refs
 */
export function animateFlowers(flowers) {
    if (!flowers || flowers.length === 0) return;

    flowers.forEach((flower) => {
        if (!flower) return;
        gsap.fromTo(
            flower,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.3,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: flower,
                    start: "top 82%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });
}

/**
 * Polaroid "dealing cards" entrance animation.
 * Cards slide up from below and settle into their designed rotations.
 *
 * @param {HTMLElement[]} cards      - Array of polaroid card elements
 * @param {number[]}      rotations  - Final rotation values (degrees) per card
 */
export function animatePolaroidDeal(cards, rotations = []) {
    if (!cards || cards.length === 0) return;

    cards.forEach((card, i) => {
        if (!card) return;

        const finalRotation = rotations[i] ?? 0;
        const randomStartRotation = gsap.utils.random(-18, 18);

        gsap.fromTo(
            card,
            {
                y: 160,
                opacity: 0,
                rotation: randomStartRotation,
            },
            {
                y: 0,
                opacity: 1,
                rotation: finalRotation,
                duration: 1.0,
                ease: "power3.out",
                delay: i * 0.15,
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
            }
        );
    });
}