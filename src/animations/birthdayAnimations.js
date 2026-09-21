import gsap from "gsap";

/**
 * Birthday page entrance timeline.
 * Sequence: bg → flowers → cake → candles → wish button
 *
 * @param {{ flowerRefs, cakeRef, candleRefs, buttonRef }} refs
 */
export function animateBirthdayEntrance({ flowerRefs, cakeRef, candleRefs, buttonRef }) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Flowers scale in
    if (flowerRefs && flowerRefs.length) {
        tl.fromTo(
            flowerRefs,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.1,
                ease: "back.out(1.7)",
                stagger: 0.1,
            },
            0
        );
    }

    // Cake slides up with bounce
    if (cakeRef) {
        tl.fromTo(
            cakeRef,
            { y: 80, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: "back.out(1.4)" },
            0.3
        );
    }

    // Candles appear with stagger
    if (candleRefs && candleRefs.length) {
        tl.fromTo(
            candleRefs,
            { scaleY: 0, opacity: 0, transformOrigin: "bottom center" },
            {
                scaleY: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.08,
            },
            0.8
        );
    }

    // Wish button fades in
    if (buttonRef) {
        tl.fromTo(
            buttonRef,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            1.1
        );
    }

    return tl;
}

/**
 * Continuous subtle candle flame flicker.
 * Call once per flame element.
 *
 * @param {HTMLElement} flameEl
 */
export function animateFlame(flameEl) {
    if (!flameEl) return;

    gsap.to(flameEl, {
        scaleX: 0.88,
        scaleY: 1.12,
        y: -3,
        rotation: gsap.utils.random(-6, 6),
        opacity: 0.88,
        duration: 0.45,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "50% 100%",
    });
}

/**
 * Blow out candle sequence.
 * Flame fades out → smoke particle puffs up.
 *
 * @param {HTMLElement} flameEl
 * @param {HTMLElement} smokeEl
 * @param {Function}    onDone
 */
export function blowOutCandle(flameEl, smokeEl, onDone) {
    const tl = gsap.timeline({ onComplete: onDone });

    if (flameEl) {
        tl.to(flameEl, {
            scaleX: 0,
            scaleY: 0,
            opacity: 0,
            duration: 0.45,
            ease: "power3.in",
        });
    }

    if (smokeEl) {
        tl.fromTo(
            smokeEl,
            { y: 0, opacity: 0.7, scale: 0.5 },
            { y: -30, opacity: 0, scale: 1.4, duration: 0.9, ease: "power1.out" },
            "<"
        );
    }

    return tl;
}

/**
 * Birthday message reveal — stars → heading → message text.
 *
 * @param {{ starsRef, headingRef, messageRef }} refs
 */
export function revealBirthdayMessage({ starsRef, headingRef, messageRef }) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (starsRef) {
        tl.fromTo(
            starsRef,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" }
        );
    }

    if (headingRef) {
        tl.fromTo(
            headingRef,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.2"
        );
    }

    if (messageRef) {
        tl.fromTo(
            messageRef,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.3"
        );
    }

    return tl;
}

/**
 * Birthday letter paper unfold animation.
 *
 * @param {HTMLElement} letterEl
 */
export function openLetter(letterEl) {
    if (!letterEl) return;
    gsap.fromTo(
        letterEl,
        { scale: 0.88, opacity: 0, y: 32 },
        { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.5)" }
    );
}
