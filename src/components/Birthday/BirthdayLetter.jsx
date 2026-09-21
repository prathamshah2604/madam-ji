import { useLayoutEffect, useRef } from "react";
import { openLetter } from "../../animations/birthdayAnimations";
import { countdownConfig } from "../../data/countdown";
import { RoseSvg, SakuraSvg } from "../Landing/FlowerDecoration";

/**
 * BirthdayLetter.jsx
 * Handcrafted romantic letter inside an ornate deckle-edge parchment sheet.
 * Features delicate rose flourishes, handwriting script font, and wax seal theme.
 */

const LETTER_PARAGRAPHS = [
    "To Madam Ji (Harshuu), on your special day,",
    "I wanted to put these words down so you would always hold them close — a little reminder of just how much light, warmth, and magic you bring into the world.",
    "Every single memory with you feels like soft poetry. The quiet laughter, the radiant smiles, the effortless conversations, and all the little moments in between that somehow became the most precious treasures.",
    "You have a grace that brightens even the greyest days and a heart that makes everyone around you feel genuinely cherished.",
    "On this birthday, I hope every wish you made while blowing out the candles finds its way to reality. May your upcoming year be abundant with boundless laughter, inner peace, exciting dreams, and everything beautiful.",
    "Thank you for being the wonderful, irreplaceable soul that you are.",
    "Happy Birthday HARSHUUU❤️",
];

function BirthdayLetter({ onClose }) {
    const letterRef = useRef(null);

    useLayoutEffect(() => {
        openLetter(letterRef.current);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Darkened romantic backdrop */}
            <div
                className="fixed inset-0 bg-[#3a0d1e]/50 backdrop-blur-md transition-opacity"
                onClick={onClose}
                role="button"
                tabIndex={-1}
                aria-label="Close letter backdrop"
            />

            {/* Vintage Stationery Letter */}
            <div
                ref={letterRef}
                className="
                    relative
                    z-10
                    my-auto
                    w-full
                    max-w-3xl
                    rounded-3xl
                    border-2
                    border-[#ebd2dc]
                    bg-[#fffcf9]
                    px-6
                    py-10
                    sm:px-12
                    sm:py-12
                    shadow-[0_25px_80px_rgba(173,20,87,0.35)]
                "
                role="document"
                aria-label="Personalized birthday letter"
            >
                {/* Top Rose Edge Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-3 rounded-t-3xl bg-gradient-to-r from-transparent via-[#e0578f]/80 to-transparent" />

                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="
                        absolute
                        right-4
                        top-4
                        sm:right-6
                        sm:top-6
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#f0d4de]
                        bg-[#fffaf8]
                        font-serif
                        text-lg
                        font-bold
                        text-[#8a0e44]
                        shadow-md
                        transition-transform
                        hover:scale-110
                        hover:bg-[#fcedf2]
                        cursor-pointer
                    "
                    aria-label="Close letter"
                >
                    ✕
                </button>

                {/* Letter Header */}
                <div className="mb-8 flex flex-col items-center text-center">
                    <div className="flex items-center gap-3">
                        <SakuraSvg size={20} color="#e0578f" />
                        <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8a0e44] font-bold">
                            A Handwritten Letter For You
                        </span>
                        <SakuraSvg size={20} color="#e0578f" />
                    </div>

                    <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-black text-[#8a0e44]">
                        Madam Ji ♡
                    </h3>

                    {/* Rose Divider */}
                    <div className="mt-4 flex items-center justify-center gap-4">
                        <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-transparent to-[#e0578f]/70" />
                        <RoseSvg size={28} color="#e0578f" />
                        <div className="h-1 w-20 sm:w-28 bg-gradient-to-l from-transparent to-[#e0578f]/70" />
                    </div>
                </div>

                {/* Letter Body */}
                <div className="space-y-5 text-center sm:text-left font-serif">
                    {LETTER_PARAGRAPHS.map((paragraph, idx) => {
                        const isGreeting = idx === 0;
                        const isClosing = idx === LETTER_PARAGRAPHS.length - 1;

                        if (isGreeting) {
                            return (
                                <p
                                    key={idx}
                                    className="font-script text-2xl sm:text-3xl font-bold text-[#8a0e44] mb-4 leading-snug"
                                >
                                    {paragraph}
                                </p>
                            );
                        }

                        if (isClosing) {
                            return (
                                <div key={idx} className="mt-8 pt-5 border-t border-[#f0d4de] text-right">
                                    <p className="font-script text-2xl sm:text-3xl font-bold text-[#8a0e44]">
                                        {paragraph}
                                    </p>
                                    <p className="font-serif text-sm sm:text-base italic text-[#8a0e44] mt-1.5 font-bold">
                                        Forever cherished ♡
                                    </p>
                                </div>
                            );
                        }

                        return (
                            <p
                                key={idx}
                                className="text-sm sm:text-base md:text-lg leading-[1.8] text-[#220d18] font-medium tracking-normal"
                            >
                                {paragraph}
                            </p>
                        );
                    })}
                </div>

                {/* Bottom Wax Seal Accent */}
                <div className="mt-8 flex items-center justify-center">
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border-2
                            border-[#f0d4de]
                            bg-[#fffaf8]
                            px-8
                            py-2.5
                            font-serif
                            text-sm
                            sm:text-base
                            font-bold
                            italic
                            text-[#8a0e44]
                            shadow-md
                            transition-all
                            hover:bg-[#fcedf2]
                            hover:scale-105
                            cursor-pointer
                        "
                    >
                        <span>Fold Letter & Keep Safe ♡</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BirthdayLetter;
