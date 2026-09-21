import gsap from "gsap";

/**
 * GSAP hover animation for a Polaroid card.
 * Lifts the card up, scales slightly, levels rotation, deepens shadow.
 *
 * @param {HTMLElement} el - The polaroid element
 * @param {number} originalRotation - The card's designed rotation in degrees
 */
export function polaroidHoverIn(el, originalRotation = 0) {
    gsap.to(el, {
        scale: 1.05,
        y: -12,
        rotation: 0,
        boxShadow: "0 35px 70px rgba(173,20,87,0.28)",
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
    });
}

/**
 * GSAP mouse-leave animation — restore original state.
 *
 * @param {HTMLElement} el - The polaroid element
 * @param {number} originalRotation - The card's designed rotation in degrees
 */
export function polaroidHoverOut(el, originalRotation = 0) {
    gsap.to(el, {
        scale: 1,
        y: 0,
        rotation: originalRotation,
        boxShadow: "0 25px 55px rgba(173,20,87,0.16)",
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
    });
}

/**
 * CTA button hover in
 */
export function ctaHoverIn(el) {
    gsap.to(el, {
        scale: 1.06,
        y: -4,
        boxShadow: "0 16px 40px rgba(173,20,87,0.22)",
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
    });
}

/**
 * CTA button hover out
 */
export function ctaHoverOut(el) {
    gsap.to(el, {
        scale: 1,
        y: 0,
        boxShadow: "0 6px 20px rgba(173,20,87,0.12)",
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
    });
}

/**
 * CTA button press/click animation
 */
export function ctaPress(el, onComplete) {
    gsap.to(el, {
        scale: 0.95,
        duration: 0.12,
        ease: "power2.in",
        yoyo: true,
        repeat: 1,
        onComplete,
    });
}
