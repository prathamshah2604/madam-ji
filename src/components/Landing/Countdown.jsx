import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { countdownConfig, getTimeRemaining } from "../../data/countdown";
import { FloralDivider } from "./FlowerDecoration";

/**
 * Romantic Countdown Timer Component
 * Maximum readability and grand screen presence:
 * - Huge, crystal-clear typography with high contrast so no zooming is needed
 * - Massive unit cards for Days, Hours, Minutes, Seconds
 * - Bold, easily legible romantic quote whispers
 * - High-contrast festive celebration mode
 */
function Countdown({ className = "" }) {
    const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(countdownConfig.targetDate));
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [previewCelebration, setPreviewCelebration] = useState(false);

    // Live 1-second countdown ticker
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining(countdownConfig.targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Rotate sweet quotes every 7 seconds
    useEffect(() => {
        if (!countdownConfig.quotes || countdownConfig.quotes.length === 0) return;
        const quoteTimer = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % countdownConfig.quotes.length);
        }, 7000);

        return () => clearInterval(quoteTimer);
    }, []);

    const isCelebration = timeLeft.isExpired || previewCelebration;

    const timeUnits = [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
    ];

    // Format single digits with leading zero
    const formatNumber = (num) => String(num).padStart(2, "0");

    return (
        <div className={`relative w-full max-w-[1650px] px-4 py-8 ${className}`}>
            {/* Main glass/paper card container (Full-Screen Proportions) */}
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[3rem]
                    border-4
                    border-[#ebd2dc]
                    bg-[#fffcf9]/98
                    p-10
                    shadow-[0_35px_100px_rgba(173,20,87,0.22)]
                    backdrop-blur-md
                    sm:p-16
                    md:p-24
                "
            >
                {/* Ornamental top border */}
                <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-transparent via-[#e0578f]/80 to-transparent" />

                {isCelebration ? (
                    /* ── CELEBRATION MODE (Grand Readable Scale) ── */
                    <div className="flex flex-col items-center py-10 text-center animate-fade-in">
                        <span className="text-8xl sm:text-9xl md:text-[11rem] animate-bounce">🎂 ✨ 💖</span>
                        
                        <h2
                            className="mt-10 font-serif font-black tracking-tight text-[#8a0e44]"
                            style={{
                                fontSize: "clamp(3.5rem, 7vw, 8rem)",
                                lineHeight: 1.05,
                            }}
                        >
                            {countdownConfig.celebrationMessage}
                        </h2>

                        <p
                            className="mt-8 max-w-4xl font-serif font-bold italic leading-relaxed text-[#2e1420]"
                            style={{
                                fontSize: "clamp(2rem, 3.2vw, 3.6rem)",
                                lineHeight: 1.45,
                            }}
                        >
                            {countdownConfig.celebrationSubtext}
                        </p>

                        <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
                            <Link
                                to="/birthday"
                                className="
                                    inline-flex
                                    items-center
                                    gap-6
                                    rounded-[2.5rem]
                                    border-4
                                    border-[#8a0e44]
                                    bg-[#8a0e44]
                                    px-20
                                    py-8
                                    font-serif
                                    text-3xl
                                    italic
                                    font-black
                                    tracking-wider
                                    text-white
                                    shadow-2xl
                                    transition-all
                                    duration-300
                                    hover:bg-[#6c0a35]
                                    hover:shadow-[0_28px_80px_rgba(138,14,68,0.6)]
                                    hover:-translate-y-2
                                    sm:px-26
                                    sm:py-10
                                    sm:text-4xl
                                    md:text-5xl
                                "
                            >
                                <span>Make Your Birthday Wish</span>
                                <span>🎂</span>
                            </Link>

                            <button
                                type="button"
                                onClick={() => setPreviewCelebration(false)}
                                className="
                                    rounded-2xl
                                    border-3
                                    border-[#ebd2dc]
                                    bg-white/95
                                    px-12
                                    py-6
                                    font-serif
                                    text-xl
                                    italic
                                    font-black
                                    text-[#4a1830]
                                    transition-all
                                    hover:bg-[#fdeef3]
                                    hover:text-[#8a0e44]
                                    sm:text-2xl
                                "
                            >
                                Back to countdown
                            </button>
                        </div>
                    </div>
                ) : (
                    /* ── ACTIVE COUNTDOWN MODE (Heroic Readable Proportions) ── */
                    <div className="flex flex-col items-center text-center">
                        {/* Eyebrow and Target Date Banner */}
                        <div className="mb-10 flex items-center justify-center gap-5">
                            <span className="text-2xl text-[#e0578f] sm:text-3xl">✿</span>
                            <span className="font-serif text-2xl uppercase tracking-[0.25em] text-[#4a1830] sm:text-3xl md:text-4xl font-black">
                                {countdownConfig.title}
                            </span>
                            <span className="text-2xl text-[#e0578f] sm:text-3xl">✿</span>
                        </div>

                        {/* Event / Target badge */}
                        <h3 className="mb-12 font-serif text-4xl font-extrabold tracking-wide text-[#2e1420] sm:text-5xl md:text-6xl lg:text-7xl">
                            Until <span className="font-black text-[#8a0e44]">{countdownConfig.countdownName || "Madam Ji"}&apos;s</span> Special Day
                            <span className="ml-5 inline-block rounded-full bg-[#fae5ed] px-8 py-3 text-2xl font-black text-[#8a0e44] sm:text-3xl md:text-4xl shadow-md">
                                {countdownConfig.dateDisplay}
                            </span>
                        </h3>

                        {/* 4 Unit Countdown Cards (Huge Screen-Filling Boxes) */}
                        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
                            {timeUnits.map((unit, index) => (
                                <div key={unit.label} className="flex items-center">
                                    {/* Countdown Card Box */}
                                    <div
                                        className="
                                            group
                                            flex
                                            w-44
                                            flex-col
                                            items-center
                                            justify-center
                                            rounded-[2.5rem]
                                            border-3
                                            border-[#edd3de]
                                            bg-gradient-to-b
                                            from-[#fffdfb]
                                            to-[#fff5f8]
                                            px-6
                                            py-10
                                            shadow-[0_16px_40px_rgba(209,79,127,0.18)]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-2
                                            hover:border-[#e0578f]
                                            hover:shadow-[0_24px_60px_rgba(209,79,127,0.3)]
                                            sm:w-60
                                            sm:py-14
                                            md:w-76
                                            md:py-18
                                            lg:w-88
                                            lg:py-20
                                            xl:w-96
                                        "
                                    >
                                        {/* Number Display (Huge & High-Contrast) */}
                                        <span
                                            className="
                                                font-serif
                                                font-black
                                                tabular-nums
                                                leading-none
                                                text-[#8a0e44]
                                            "
                                            style={{
                                                fontSize: "clamp(5rem, 9vw, 11rem)",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {formatNumber(unit.value)}
                                        </span>

                                        {/* Unit Label */}
                                        <span
                                            className="
                                                mt-6
                                                font-serif
                                                text-xl
                                                font-black
                                                tracking-[0.25em]
                                                text-[#4a1830]
                                                sm:text-2xl
                                                md:text-3xl
                                                lg:text-4xl
                                            "
                                        >
                                            {unit.label}
                                        </span>
                                    </div>

                                    {/* Heart Separator between cards */}
                                    {index < timeUnits.length - 1 && (
                                        <span
                                            className="mx-3 text-4xl text-[#e0578f] animate-pulse sm:mx-6 sm:text-5xl md:text-6xl lg:text-7xl"
                                            aria-hidden="true"
                                        >
                                            ♡
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Floral Divider */}
                        <div className="my-14 w-full">
                            <FloralDivider text="✦ ✿ ✦" />
                        </div>

                        {/* Romantic Rotating Quote Box (Large, Bold & Ultra-Legible) */}
                        <div
                            onClick={() => setQuoteIndex((prev) => (prev + 1) % countdownConfig.quotes.length)}
                            className="
                                group
                                cursor-pointer
                                rounded-[2.5rem]
                                border-3
                                border-dashed
                                border-[#ebd2dc]
                                bg-[#fff8fa]/98
                                p-10
                                shadow-md
                                transition-all
                                duration-300
                                hover:bg-[#fff0f5]
                                sm:p-14
                                md:p-18
                                max-w-5xl
                                w-full
                            "
                            title="Click for another sweet note"
                        >
                            <p
                                className="font-serif font-bold italic leading-relaxed text-[#2e1420] transition-opacity duration-500"
                                style={{
                                    fontSize: "clamp(2rem, 3.2vw, 3.6rem)",
                                    lineHeight: 1.45,
                                }}
                            >
                                &ldquo;{countdownConfig.quotes[quoteIndex]}&rdquo;
                            </p>
                            <span className="mt-6 block text-lg font-black tracking-wider text-[#8a0e44] sm:text-xl md:text-2xl">
                                ✧ tap to reveal another whisper ✧
                            </span>
                        </div>

                        {/* Bottom preview toggle */}
                        <div className="mt-12 flex items-center gap-4">
                            <button
                                type="button"
                                onClick={() => setPreviewCelebration(true)}
                                className="
                                    font-serif
                                    text-xl
                                    font-black
                                    italic
                                    tracking-wider
                                    text-[#8a0e44]
                                    underline
                                    underline-offset-8
                                    transition-colors
                                    hover:text-[#6c0a35]
                                    sm:text-2xl
                                    md:text-3xl
                                "
                            >
                                Preview Birthday Mode ✨
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Countdown;
