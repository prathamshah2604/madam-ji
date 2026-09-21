import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

/**
 * Animate a Polaroid expanding into a fullscreen modal using GSAP Flip.
 *
 * @param {HTMLElement} cardEl    - The small polaroid card element
 * @param {HTMLElement} modalEl   - The expanded modal element
 * @param {Function}    onDone    - Callback after animation completes
 */
export function flipOpen(cardEl, modalEl, onDone) {
    if (!cardEl || !modalEl) return;

    // Capture current state of the card
    const state = Flip.getState(cardEl);

    // Make modal visible at same position as card initially
    gsap.set(modalEl, { visibility: "visible", opacity: 1 });

    // Run Flip from card → modal
    Flip.from(state, {
        targets: modalEl,
        duration: 0.55,
        ease: "power3.out",
        absolute: true,
        onComplete: onDone,
    });
}

/**
 * Animate a fullscreen modal collapsing back into the Polaroid card.
 *
 * @param {HTMLElement} modalEl   - The expanded modal element
 * @param {HTMLElement} cardEl    - The small polaroid card element
 * @param {Function}    onDone    - Callback after animation completes
 */
export function flipClose(modalEl, cardEl, onDone) {
    if (!modalEl || !cardEl) return;

    // Capture current state of modal (fullscreen position)
    const state = Flip.getState(modalEl);

    // Immediately move modal to match card's rect
    Flip.from(state, {
        targets: modalEl,
        duration: 0.5,
        ease: "power3.inOut",
        absolute: true,
        onComplete: () => {
            gsap.set(modalEl, { visibility: "hidden", opacity: 0 });
            if (onDone) onDone();
        },
    });
}
