import gsap from "gsap";

/**
 * Landing page entrance animation.
 * Sequence: background → flowers → heading → subtitle → CTA
 */
export function animateLandingEntrance({ flowerRefs, headingRef, subtitleRef, ctaRef }) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Flowers scale in with stagger
    if (flowerRefs && flowerRefs.length) {
        tl.fromTo(
            flowerRefs,
            { scale: 0, opacity: 0, rotation: -20 },
            {
                scale: 1,
                opacity: 1,
                rotation: 0,
                duration: 1.2,
                ease: "back.out(1.7)",
                stagger: 0.12,
            },
            0
        );
    }

    // Heading slides up + fades in
    if (headingRef) {
        tl.fromTo(
            headingRef,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.0 },
            0.3
        );
    }

    // Subtitle fades in
    if (subtitleRef) {
        tl.fromTo(
            subtitleRef,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9 },
            0.55
        );
    }

    // CTA bounces in last
    if (ctaRef) {
        tl.fromTo(
            ctaRef,
            { y: 20, opacity: 0, scale: 0.92 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
            0.85
        );
    }

    return tl;
}

/**
 * Scrapbook page — cinematic video hero reveal.
 * scale 1.1 → 1, opacity 0 → 1
 */
export function animateHero(element) {
    if (!element) return;
    gsap.fromTo(
        element,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.4, ease: "power2.out" }
    );
}