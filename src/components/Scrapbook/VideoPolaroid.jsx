import { useLayoutEffect, useRef } from "react";
import { animateHero } from "../../animations/heroAnimations";
import { FloralCorner, FloralDivider, RoseSvg, SakuraSvg } from "../Landing/FlowerDecoration";
import Tape from "../Common/Tape";

/**
 * VideoPolaroid - Full-Scale Hero Section for Scrapbook Page.
 * Spans full screen width horizontally with grand botanical corner bouquets,
 * imposing Playfair headline, and a massive edge-to-edge cinematic video screen.
 */
function VideoPolaroid({ video }) {
    const heroRef = useRef(null);
    const videoRef = useRef(null);

    useLayoutEffect(() => {
        animateHero(heroRef.current);
    }, []);

    const videoSrc = video && video.trim() !== "" ? video : "/videos/birthday-video.mp4";

    return (
        <section
            ref={heroRef}
            className="
                relative
                flex
                w-full
                min-h-[50vh]
                flex-col
                items-center
                justify-center
                overflow-hidden
                px-2
                py-6
                md:py-10
            "
        >
            {/* ── Botanical Corner Accents ── */}
            <FloralCorner position="top-left" className="opacity-85 -top-6 -left-6" />
            <FloralCorner position="top-right" className="opacity-85 -top-6 -right-6" />

            {/* ── Outer Hero Card Container (Balanced Presence) ── */}
            <div
                className="
                    relative
                    z-10
                    flex
                    w-full
                    max-w-5xl
                    flex-col
                    items-center
                    overflow-hidden
                    rounded-3xl
                    border-2
                    border-[#ebd2dc]
                    bg-[#fffcf9]/95
                    p-3
                    sm:p-5
                    md:p-6
                    shadow-[0_20px_60px_rgba(173,20,87,0.16)]
                    backdrop-blur-md
                "
            >
                {/* Top Rose Edge Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-transparent via-[#e0578f]/80 to-transparent" />

                {/* Corner Washi Tape Accents */}
                <div className="absolute -top-4 left-8 sm:left-14 z-20">
                    <Tape width="w-32 sm:w-44" rotation="-rotate-2" opacity={0.92} />
                </div>
                <div className="absolute -top-4 right-8 sm:right-14 z-20">
                    <Tape width="w-32 sm:w-44" rotation="rotate-2" opacity={0.92} />
                </div>

                {/* ── Header Headline Section ── */}
                <div className="mb-6 flex flex-col items-center text-center">
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#f0d4de] bg-[#fffaf8] px-6 py-2 shadow-sm backdrop-blur-sm">
                        <SakuraSvg size={20} color="#e0578f" />
                        <span className="font-serif text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#8a0e44]">
                            Your Special Video in Motion
                        </span>
                        <SakuraSvg size={20} color="#e0578f" />
                    </div>

                    {/* Grand Title */}
                    <h1
                        className="
                            mt-4
                            font-serif
                            font-black
                            tracking-tight
                            text-[#8a0e44]
                            drop-shadow-[0_4px_20px_rgba(138,14,68,0.2)]
                        "
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                        }}
                    >
                        Moments Captured on Film
                    </h1>

                    {/* Rose Accent Divider */}
                    <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#e0578f]/80 sm:w-32" />
                        <RoseSvg size={32} className="text-[#e0578f]" />
                        <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#e0578f]/80 sm:w-32" />
                    </div>

                    {/* Subtitle */}
                    <p
                        className="
                            mt-3
                            max-w-2xl
                            font-serif
                            font-bold
                            italic
                            text-[#2e1420]
                        "
                        style={{
                            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                            lineHeight: 1.4,
                        }}
                    >
                        &ldquo;Some memories are made to be watched again and again.&rdquo;
                    </p>
                </div>

                {/* ── VIDEO PLAYER ── */}
                <div
                    className="
                        relative
                        w-full
                        aspect-[16/9]
                        overflow-hidden
                        rounded-2xl
                        border-2
                        border-[#edd3de]
                        bg-black
                        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                    "
                >
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover bg-black"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* ── Bottom Bar Info & Flourish ── */}
                <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-4 px-2 sm:px-4">
                    <div className="flex items-center gap-2.5">
                        <RoseSvg size={28} color="#e0578f" />
                        <span className="font-serif text-base sm:text-lg font-black italic text-[#8a0e44]">
                            Cinematic Memory Player ♡
                        </span>
                    </div>

                    <span className="font-serif text-xs sm:text-sm font-bold italic text-[#8a0e44] bg-[#fcedf2] px-5 py-2 rounded-full border border-[#edd3de] shadow-sm">
                        Press Play to watch the celebration video
                    </span>
                </div>
            </div>
        </section>
    );
}

export default VideoPolaroid;