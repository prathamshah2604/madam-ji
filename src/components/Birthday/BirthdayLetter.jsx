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

            {/* Vintage Stationery Letter (Maximum Expanded & Ultra Legible) */}
            <div
                ref={letterRef}
                className="
                    relative
                    z-10
                    my-auto
                    w-full
                    max-w-[96vw]
                    2xl:max-w-[1750px]
                    rounded-[3.5rem]
                    border-4
                    border-[#ebd2dc]
                    bg-[#fffcf9]
                    px-8
                    py-16
                    sm:px-20
                    sm:py-20
                    md:px-28
                    md:py-24
                    lg:px-36
                    lg:py-28
                    shadow-[0_50px_160px_rgba(173,20,87,0.5)]
                "
                role="document"
                aria-label="Personalized birthday letter"
            >
                {/* Top Rose Edge Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-5 rounded-t-3xl bg-gradient-to-r from-transparent via-[#e0578f]/80 to-transparent" />

                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="
                        absolute
                        right-8
                        top-8
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border-3
                        border-[#f0d4de]
                        bg-[#fffaf8]
                        font-serif
                        text-3xl
                        font-black
                        text-[#8a0e44]
                        shadow-xl
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
                <div className="mb-14 flex flex-col items-center text-center">
                    <div className="flex items-center gap-5">
                        <SakuraSvg size={40} color="#e0578f" />
                        <span className="font-serif text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.3em] text-[#8a0e44] font-black">
                            A Handwritten Letter For You
                        </span>
                        <SakuraSvg size={40} color="#e0578f" />
                    </div>

                    <h3 className="mt-6 font-serif text-5xl sm:text-7xl md:text-8xl font-black text-[#8a0e44]">
                        Madam Ji ♡
                    </h3>

                    {/* Rose Divider */}
                    <div className="mt-8 flex items-center justify-center gap-8">
                        <div className="h-1.5 w-32 sm:w-64 md:w-96 bg-gradient-to-r from-transparent to-[#e0578f]/70" />
                        <RoseSvg size={56} color="#e0578f" />
                        <div className="h-1.5 w-32 sm:w-64 md:w-96 bg-gradient-to-l from-transparent to-[#e0578f]/70" />
                    </div>
                </div>

                {/* Letter Body (Ultra-Clear & Huge Readable Text) */}
                <div className="space-y-10 text-center sm:text-left font-serif">
                    {LETTER_PARAGRAPHS.map((paragraph, idx) => {
                        const isGreeting = idx === 0;
                        const isClosing = idx === LETTER_PARAGRAPHS.length - 1;

                        if (isGreeting) {
                            return (
                                <p
                                    key={idx}
                                    className="font-script text-4xl sm:text-6xl md:text-7xl font-black text-[#8a0e44] mb-10 leading-snug"
                                >
                                    {paragraph}
                                </p>
                            );
                        }

                        if (isClosing) {
                            return (
                                <div key={idx} className="mt-16 pt-10 border-t-3 border-[#f0d4de] text-right">
                                    <p className="font-script text-5xl sm:text-6xl md:text-7xl font-black text-[#8a0e44]">
                                        {paragraph}
                                    </p>
                                    <p className="font-serif text-2xl sm:text-3xl italic text-[#8a0e44] mt-3 font-bold">
                                        Forever cherished ♡
                                    </p>
                                </div>
                            );
                        }

                        return (
                            <p
                                key={idx}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[2.1] text-[#220d18] font-semibold tracking-wide"
                            >
                                {paragraph}
                            </p>
                        );
                    })}
                </div>

                {/* Bottom Wax Seal Accent */}
                <div className="mt-16 flex items-center justify-center">
                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            inline-flex
                            items-center
                            gap-5
                            rounded-full
                            border-4
                            border-[#f0d4de]
                            bg-[#fffaf8]
                            px-16
                            py-5
                            font-serif
                            text-xl
                            sm:text-3xl
                            font-black
                            italic
                            text-[#8a0e44]
                            shadow-xl
                            transition-all
                            hover:-translate-y-1
                            hover:bg-[#fcedf2]
                            hover:shadow-2xl
                            cursor-pointer
                        "
                    >
                        <span>Keep in Heart ♡</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BirthdayLetter;
