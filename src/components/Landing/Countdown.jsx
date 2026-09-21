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
        <div className={`relative w-full max-w-5xl px-2 py-4 ${className}`}>
            {/* Main glass/paper card container */}
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    border-2
                    border-[#ebd2dc]
                    bg-[#fffcf9]/98
                    p-6
                    shadow-[0_20px_60px_rgba(173,20,87,0.15)]
                    backdrop-blur-md
                    sm:p-10
                    md:p-12
                "
            >
                {/* Ornamental top border */}
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-[#e0578f]/80 to-transparent" />

                {isCelebration ? (
                    /* ── CELEBRATION MODE ── */
                    <div className="flex flex-col items-center py-6 text-center animate-fade-in">
                        <span className="text-5xl sm:text-6xl animate-bounce">🎂 ✨ 💖</span>
                        
                        <h2
                            className="mt-6 font-serif font-black tracking-tight text-[#8a0e44]"
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                                lineHeight: 1.1,
                            }}
                        >
                            {countdownConfig.celebrationMessage}
                        </h2>

                        <p
                            className="mt-4 max-w-2xl font-serif font-bold italic leading-relaxed text-[#2e1420]"
                            style={{
                                fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                                lineHeight: 1.45,
                            }}
                        >
                            {countdownConfig.celebrationSubtext}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
                            <Link
                                to="/birthday"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border-2
                                    border-[#8a0e44]
                                    bg-[#8a0e44]
                                    px-8
                                    py-3.5
                                    font-serif
                                    text-base
                                    italic
                                    font-bold
                                    tracking-wider
                                    text-white
                                    shadow-xl
                                    transition-all
                                    duration-300
                                    hover:bg-[#6c0a35]
                                    hover:shadow-2xl
                                    hover:-translate-y-1
                                    sm:px-10
                                    sm:py-4
                                    sm:text-lg
                                "
                            >
                                <span>Make Your Birthday Wish</span>
                                <span>🎂</span>
                            </Link>

                            <button
                                type="button"
                                onClick={() => setPreviewCelebration(false)}
                                className="
                                    rounded-full
                                    border
                                    border-[#ebd2dc]
                                    bg-white/95
                                    px-6
                                    py-3
                                    font-serif
                                    text-xs
                                    italic
                                    font-bold
                                    text-[#4a1830]
                                    transition-all
                                    hover:bg-[#fdeef3]
                                    hover:text-[#8a0e44]
                                    sm:text-sm
                                "
                            >
                                Back to countdown
                            </button>
                        </div>
                    </div>
                ) : (
                    /* ── ACTIVE COUNTDOWN MODE ── */
                    <div className="flex flex-col items-center text-center">
                        {/* Eyebrow and Target Date Banner */}
                        <div className="mb-6 flex items-center justify-center gap-3">
                            <span className="text-base text-[#e0578f] sm:text-lg">✿</span>
                            <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#4a1830] sm:text-sm font-bold">
                                {countdownConfig.title}
                            </span>
                            <span className="text-base text-[#e0578f] sm:text-lg">✿</span>
                        </div>

                        {/* Event / Target badge */}
                        <h3 className="mb-8 font-serif text-xl font-bold tracking-wide text-[#2e1420] sm:text-2xl md:text-3xl">
                            Until <span className="font-black text-[#8a0e44]">{countdownConfig.countdownName || "Madam Ji"}&apos;s</span> Special Day
                            <span className="ml-3 inline-block rounded-full bg-[#fae5ed] px-4 py-1 text-sm font-bold text-[#8a0e44] sm:text-base shadow-sm">
                                {countdownConfig.dateDisplay}
                            </span>
                        </h3>

                        {/* 4 Unit Countdown Cards */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
                            {timeUnits.map((unit, index) => (
                                <div key={unit.label} className="flex items-center">
                                    {/* Countdown Card Box */}
                                    <div
                                        className="
                                            group
                                            flex
                                            w-28
                                            flex-col
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border-2
                                            border-[#edd3de]
                                            bg-gradient-to-b
                                            from-[#fffdfb]
                                            to-[#fff5f8]
                                            px-3
                                            py-5
                                            shadow-[0_8px_20px_rgba(209,79,127,0.12)]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-[#e0578f]
                                            hover:shadow-md
                                            sm:w-36
                                            sm:py-6
                                            md:w-44
                                            md:py-7
                                        "
                                    >
                                        {/* Number Display */}
                                        <span
                                            className="
                                                font-serif
                                                font-black
                                                tabular-nums
                                                leading-none
                                                text-[#8a0e44]
                                            "
                                            style={{
                                                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {formatNumber(unit.value)}
                                        </span>

                                        {/* Unit Label */}
                                        <span
                                            className="
                                                mt-2.5
                                                font-serif
                                                text-xs
                                                font-bold
                                                tracking-[0.2em]
                                                text-[#4a1830]
                                                sm:text-sm
                                            "
                                        >
                                            {unit.label}
                                        </span>
                                    </div>

                                    {/* Heart Separator between cards */}
                                    {index < timeUnits.length - 1 && (
                                        <span
                                            className="mx-1.5 text-xl text-[#e0578f] animate-pulse sm:mx-2.5 sm:text-2xl"
                                            aria-hidden="true"
                                        >
                                            ♡
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Floral Divider */}
                        <div className="my-8 w-full">
                            <FloralDivider text="✦ ✿ ✦" />
                        </div>

                        {/* Romantic Rotating Quote Box */}
                        <div
                            onClick={() => setQuoteIndex((prev) => (prev + 1) % countdownConfig.quotes.length)}
                            className="
                                group
                                cursor-pointer
                                rounded-2xl
                                border-2
                                border-dashed
                                border-[#ebd2dc]
                                bg-[#fff8fa]/98
                                p-5
                                shadow-sm
                                transition-all
                                duration-300
                                hover:bg-[#fff0f5]
                                sm:p-7
                                max-w-3xl
                                w-full
                            "
                            title="Click for another sweet note"
                        >
                            <p
                                className="font-serif font-bold italic leading-relaxed text-[#2e1420] transition-opacity duration-500"
                                style={{
                                    fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                                    lineHeight: 1.45,
                                }}
                            >
                                &ldquo;{countdownConfig.quotes[quoteIndex]}&rdquo;
                            </p>
                            <span className="mt-3 block text-xs font-bold tracking-wider text-[#8a0e44]">
                                ✧ tap to reveal another whisper ✧
                            </span>
                        </div>

                        {/* Bottom preview toggle */}
                        <div className="mt-6 flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setPreviewCelebration(true)}
                                className="
                                    font-serif
                                    text-sm
                                    font-bold
                                    italic
                                    tracking-wider
                                    text-[#8a0e44]
                                    underline
                                    underline-offset-4
                                    transition-colors
                                    hover:text-[#6c0a35]
                                    sm:text-base
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
