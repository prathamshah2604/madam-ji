import { useState, useRef, useEffect } from "react";
import PageTransition from "../components/Common/PageTransition";
import FloralBorder from "../components/Common/FloralBorder";
import FloatingPetals from "../components/Common/FloatingPetals";
import Navbar from "../components/Landing/Navbar";
import { FloralCorner, RoseSvg, SakuraSvg } from "../components/Landing/FlowerDecoration";
import Tape from "../components/Common/Tape";

import Cake from "../components/Birthday/Cake";
import WishButton from "../components/Birthday/WishButton";
import BirthdayMessage from "../components/Birthday/BirthdayMessage";
import BirthdayLetter from "../components/Birthday/BirthdayLetter";
import Balloons from "../components/Birthday/Balloons";
import Confetti from "../components/Birthday/Confetti";

import { blowOutCandle } from "../animations/birthdayAnimations";
import {
    playBirthdayMusic,
    stopBirthdayMusic,
    toggleBirthdayMusic,
    playChimeSound,
} from "../utils/birthdayMusic";

const CANDLE_COUNT = 5;

/**
 * BirthdayPage.jsx
 * Grand Royal Celebration Page for Madam Ji (Harshuu).
 *
 * 3-Stage Celebration Journey:
 * 1. Make a Wish & Blow Candles (individual taps or wish button)
 * 2. Interactive Cake Cutting (drag knife across cake with mouse or touch)
 * 3. Grand Celebration & Wax-Sealed Romantic Love Letter
 */
function BirthdayPage() {
    const [isWishMade, setIsWishMade] = useState(false);
    const [isCakeCut, setIsCakeCut] = useState(false);
    const [isLetterOpen, setIsLetterOpen] = useState(false);
    const [burstTrigger, setBurstTrigger] = useState(0);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const cakeRef = useRef(null);
    const candleFlameRefs = useRef(
        Array.from({ length: CANDLE_COUNT }, () => ({ current: null }))
    );
    const candleSmokeRefs = useRef(
        Array.from({ length: CANDLE_COUNT }, () => ({ current: null }))
    );

    // Candle blow-out logic
    const handleWish = () => {
        setIsWishMade(true);
        playChimeSound();

        // Blow out each candle with stagger
        candleFlameRefs.current.forEach((ref, i) => {
            setTimeout(() => {
                blowOutCandle(ref.current, candleSmokeRefs.current[i]?.current);
            }, i * 140);
        });

        // Trigger a gentle sparkle burst
        setBurstTrigger((prev) => prev + 1);
    };

    // Cake slice completion logic
    const handleSliceComplete = () => {
        setIsCakeCut(true);
        // Trigger massive confetti cannon explosion
        setBurstTrigger((prev) => prev + 1);

        // Auto-start the instrumental birthday theme music if not already playing!
        if (!isMusicPlaying) {
            playBirthdayMusic((playing) => setIsMusicPlaying(playing));
        }
    };

    // Reset flow to celebrate again
    const handleReplay = () => {
        setIsWishMade(false);
        setIsCakeCut(false);
        setIsLetterOpen(false);
    };

    // Cleanup audio when leaving page
    useEffect(() => {
        return () => {
            stopBirthdayMusic();
        };
    }, []);

    return (
        <PageTransition>
            <main
                className="
                    relative
                    min-h-screen
                    w-full
                    overflow-x-hidden
                    bg-[#fbe4ea]
                    px-0
                    py-2
                    md:py-6
                    before:pointer-events-none
                    before:absolute
                    before:inset-0
                    before:z-0
                    before:opacity-40
                    before:bg-[radial-gradient(ellipse_at_50%_25%,rgba(255,255,255,0.75)_0%,transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(229,170,187,0.25)_0%,transparent_45%)]
                "
            >
                {/* ── Ambient Floating Layers ── */}
                <FloralBorder />
                <FloatingPetals />
                <Balloons active={true} />
                <Confetti active={isCakeCut} burstTrigger={burstTrigger} />

                {/* ── Romantic Navigation Bar ── */}
                <Navbar />

                {/* ── Floating Instrumental Music Controller ── */}
                <div className="fixed bottom-6 right-6 z-40">
                    <button
                        type="button"
                        onClick={() => toggleBirthdayMusic((playing) => setIsMusicPlaying(playing))}
                        className={`
                            group
                            flex
                            items-center
                            gap-3
                            rounded-full
                            border-3
                            border-[#f0d4de]
                            bg-[#fffcfb]/95
                            px-5
                            py-3
                            shadow-[0_10px_30px_rgba(173,20,87,0.25)]
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_15px_40px_rgba(173,20,87,0.35)]
                            cursor-pointer
                        `}
                        aria-label="Toggle instrumental birthday theme music"
                    >
                        <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#e0578f] to-[#f4a9c4] text-white shadow-sm ${
                                isMusicPlaying ? "animate-spin" : ""
                            }`}
                            style={{ animationDuration: "5s" }}
                        >
                            <RoseSvg size={24} color="#fff" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#8a0e44]">
                                {isMusicPlaying ? "Music Playing ♪" : "Play Theme Music ♪"}
                            </span>
                            <span className="font-serif text-[11px] italic text-[#a17b8c]">
                                Instrumental Music Box
                            </span>
                        </div>
                    </button>
                </div>

                {/* ── Grand Celebration Main Stage Card (Full Edge-to-Edge Scope) ── */}
                <div
                    className="relative z-10 w-full flex justify-center px-2 sm:px-4"
                >
                    <div
                        className="
                            relative
                            flex
                            w-full
                            max-w-5xl
                            flex-col
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-3xl
                            border-2
                            border-[#ebd2dc]
                            bg-[#fffcf9]/95
                            px-4
                            py-8
                            sm:px-8
                            sm:py-12
                            md:px-10
                            md:py-14
                            shadow-[0_20px_60px_rgba(173,20,87,0.18)]
                            backdrop-blur-md
                        "
                    >
                        {/* Botanical Corner Accents */}
                        <FloralCorner position="top-left" className="opacity-80 -top-6 -left-6" />
                        <FloralCorner position="top-right" className="opacity-80 -top-6 -right-6" />

                        {/* Top Rose Edge Gradient Line */}
                        <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-transparent via-[#e0578f]/80 to-transparent" />

                        {/* Corner Washi Tape Accents */}
                        <div className="absolute -top-4 left-8 sm:left-14 z-20">
                            <Tape width="w-32 sm:w-48" rotation="-rotate-2" opacity={0.92} />
                        </div>
                        <div className="absolute -top-4 right-8 sm:right-14 z-20">
                            <Tape width="w-32 sm:w-48" rotation="rotate-2" opacity={0.92} />
                        </div>

                        {/* ── Grand Celebration Header ── */}
                        <div className="mb-6 flex flex-col items-center text-center">
                            {/* Eyebrow badge */}
                            <div className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#f0d4de] bg-[#fffaf8] px-6 py-2 shadow-sm">
                                <SakuraSvg size={22} color="#e0578f" />
                                <span className="font-serif text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#8a0e44]">
                                    A Royal Celebration For Madam Ji
                                </span>
                                <SakuraSvg size={22} color="#e0578f" />
                            </div>

                            {/* Grand Title */}
                            <h1
                                className="
                                    mt-5
                                    font-serif
                                    font-black
                                    tracking-tight
                                    text-[#8a0e44]
                                    drop-shadow-[0_4px_20px_rgba(138,14,68,0.22)]
                                "
                                style={{
                                    fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                                    lineHeight: 1.1,
                                }}
                            >
                                Happy Birthday, Harshuu! ❤️
                            </h1>

                            {/* Rose Accent Divider */}
                            <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
                                <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#e0578f]/80 sm:w-32" />
                                <RoseSvg size={36} color="#e0578f" />
                                <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#e0578f]/80 sm:w-32" />
                            </div>

                            {/* Subtitle / Step Instruction */}
                            <p
                                className="
                                    mt-4
                                    max-w-2xl
                                    font-serif
                                    text-base
                                    sm:text-lg
                                    md:text-xl
                                    font-bold
                                    italic
                                    text-[#2c1420]
                                    leading-relaxed
                                "
                            >
                                {!isWishMade
                                    ? "Make a wish and blow out the candles to get ready for the cake!"
                                    : !isCakeCut
                                    ? "✨ Your wish is in motion! Now take the knife and slice your birthday cake! ✨"
                                    : "🎊 Happy Birthday! May your new year be sweeter and more radiant than ever! 🎊"}
                            </p>
                        </div>

                        {/* ── THE INTERACTIVE CAKE ── */}
                        <div className="relative my-6 sm:my-8 w-full flex flex-col items-center justify-center px-0">
                            <Cake
                                isLit={!isWishMade}
                                isSliced={isCakeCut}
                                onBlowCandles={() => setIsWishMade(true)}
                                onSliceComplete={handleSliceComplete}
                                candleRefs={candleFlameRefs.current}
                                smokeRefs={candleSmokeRefs.current}
                                cakeRef={cakeRef}
                            />
                        </div>

                        {/* ── STAGE 1: Wish Button ── */}
                        {!isWishMade && (
                            <div className="mt-8 flex justify-center w-full">
                                <WishButton onWish={handleWish} />
                            </div>
                        )}

                        {/* ── STAGE 3: Birthday Message & Wax-Sealed Letter Card ── */}
                        {isCakeCut && (
                            <BirthdayMessage
                                onOpenLetter={() => setIsLetterOpen(true)}
                                onReplay={handleReplay}
                            />
                        )}
                    </div>
                </div>

                {/* ── Parchment Love Letter Modal ── */}
                {isLetterOpen && (
                    <BirthdayLetter onClose={() => setIsLetterOpen(false)} />
                )}
            </main>
        </PageTransition>
    );
}

export default BirthdayPage;