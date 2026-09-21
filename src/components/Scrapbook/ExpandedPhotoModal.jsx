import { useEffect, useRef } from "react";
import gsap from "gsap";
import { RoseSvg, SakuraSvg } from "../Landing/FlowerDecoration";
import Tape from "../Common/Tape";

/**
 * ExpandedPhotoModal - Fullscreen memory spotlight lightbox.
 * Always renders perfectly in the dead center of the screen with a grand
 * expanded polaroid card, bold Playfair typography, and smooth scale-in animation.
 */
function ExpandedPhotoModal({ memory, onClose }) {
    const backdropRef = useRef(null);
    const cardRef = useRef(null);

    // Animate IN smoothly to the exact center of screen
    useEffect(() => {
        if (!memory || !backdropRef.current || !cardRef.current) return;

        // Fade backdrop in
        gsap.fromTo(
            backdropRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.35, ease: "power2.out" }
        );

        // Pop card into center
        gsap.fromTo(
            cardRef.current,
            { scale: 0.75, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.5)" }
        );
    }, [memory]);

    // Animate OUT on close
    const handleClose = () => {
        if (!backdropRef.current || !cardRef.current) {
            onClose();
            return;
        }

        const tl = gsap.timeline({ onComplete: onClose });

        tl.to(cardRef.current, {
            scale: 0.85,
            opacity: 0,
            y: 20,
            duration: 0.25,
            ease: "power2.in",
        });

        tl.to(backdropRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
    };

    // Close on Escape key
    useEffect(() => {
        if (!memory) return;
        const handleKey = (e) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [memory]);

    if (!memory) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
            {/* Darkened blush backdrop */}
            <div
                ref={backdropRef}
                className="fixed inset-0 bg-[#230d19]/80 backdrop-blur-md cursor-pointer"
                onClick={handleClose}
                aria-label="Close photo overlay"
                role="button"
                tabIndex={-1}
            />

            {/* Centered Expanded Paper Card */}
            <div
                ref={cardRef}
                className="
                    relative
                    z-10
                    my-auto
                    flex
                    w-full
                    max-w-4xl
                    max-h-[92vh]
                    flex-col
                    items-center
                    overflow-y-auto
                    rounded-[2.5rem]
                    border-4
                    border-[#edd3de]
                    bg-[#fffdfb]
                    p-6
                    sm:p-10
                    shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                "
                role="dialog"
                aria-modal="true"
                aria-label="Memory photo expanded"
            >
                {/* Washi tape header */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <Tape width="w-48 sm:w-60" rotation="-rotate-1" opacity={0.92} />
                </div>

                {/* Close button */}
                <button
                    type="button"
                    onClick={handleClose}
                    className="
                        absolute right-5 top-5 z-30
                        flex h-12 w-12 items-center justify-center
                        rounded-full
                        border-2 border-[#edd3de]
                        bg-[#fff]
                        font-serif text-2xl font-bold text-[#8a0e44]
                        shadow-md
                        transition-transform hover:scale-110 hover:bg-[#fcedf2]
                        cursor-pointer
                    "
                    aria-label="Close photo"
                >
                    ✕
                </button>

                {/* Top info strip */}
                <div className="mb-4 flex w-full items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                        <SakuraSvg size={24} color="#e0578f" />
                        <span className="font-serif text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-[#8a0e44]">
                            {memory.caption || "A Cherished Moment"}
                        </span>
                    </div>

                    {memory.date && (
                        <span className="rounded-full border-2 border-[#edd3de] bg-[#fcedf2] px-4 py-1 font-serif text-sm sm:text-base font-bold text-[#8a0e44]">
                            {memory.date}
                        </span>
                    )}
                </div>

                <div className="mb-6 h-1 w-full rounded-full bg-gradient-to-r from-[#e0578f]/40 via-[#f7b7cb]/60 to-transparent" />

                {/* Photo frame */}
                <div className="relative max-h-[58vh] w-full overflow-hidden rounded-2xl bg-[#fceef3] shadow-inner flex items-center justify-center">
                    {memory.image ? (
                        <img
                            src={memory.image}
                            alt={memory.caption || "Memory"}
                            className="max-h-[58vh] w-full object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-[#e0578f]">
                            <RoseSvg size={80} />
                            <p className="mt-4 font-serif text-xl font-bold italic">A beautiful moment in our hearts</p>
                        </div>
                    )}
                </div>

                {/* Caption & Message */}
                {memory.caption && (
                    <h3 className="mt-6 text-center font-serif text-3xl sm:text-4xl font-black italic text-[#8a0e44]">
                        {memory.caption}
                    </h3>
                )}

                {memory.message && (
                    <p className="mt-4 max-w-2xl text-center font-serif text-2xl sm:text-3xl font-bold italic leading-relaxed text-[#2e1420]">
                        &ldquo;{memory.message}&rdquo;
                    </p>
                )}

                {/* Bottom flourish */}
                <div className="mt-6 flex items-center gap-3">
                    <div className="h-0.5 w-16 bg-[#e0578f]/40" />
                    <RoseSvg size={28} color="#e0578f" />
                    <div className="h-0.5 w-16 bg-[#e0578f]/40" />
                </div>

                <p className="mt-2 font-serif text-xl font-black italic text-[#8a0e44]">
                    with all my love ♡
                </p>
            </div>
        </div>
    );
}

export default ExpandedPhotoModal;