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
                min-h-[85vh]
                flex-col
                items-center
                justify-center
                overflow-hidden
                px-0
                
                py-10
                md:py-20
            "
        >
            {/* ── Botanical Corner Accents ── */}
            <FloralCorner position="top-left" className="opacity-85 -top-6 -left-6" />
            <FloralCorner position="top-right" className="opacity-85 -top-6 -right-6" />

            {/* ── Outer Hero Card Container (Full-Width Grand Presence) ── */}
            <div
                className="
                    relative
                    z-10
                    flex
                    w-full
                    max-w-[150vw]
                    2xl:max-w-[2580px]
                    flex-col
                    items-center
                    overflow-hidden
                    rounded-[2.5rem]
                    sm:rounded-[3.5rem]
                    border-4
                    border-[#ebd2dc]
                    bg-[#fffcf9]/95
                    p-2
                    sm:p-4
                    md:p-6
                    lg:p-8
                    shadow-[0_35px_110px_rgba(173,20,87,0.24)]
                    backdrop-blur-md
                "
            >
                {/* Top Rose Edge Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-transparent via-[#e0578f]/80 to-transparent" />

                {/* Corner Washi Tape Accents */}
                <div className="absolute -top-5 left-10 sm:left-16 z-20">
                    <Tape width="w-56 sm:w-72" rotation="-rotate-2" opacity={0.94} />
                </div>
                <div className="absolute -top-5 right-10 sm:right-16 z-20">
                    <Tape width="w-56 sm:w-72" rotation="rotate-2" opacity={0.94} />
                </div>

                {/* ── Header Headline Section ── */}
                <div className="mb-8 md:mb-12 flex flex-col items-center text-center">
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-4 rounded-full border-3 border-[#f0d4de] bg-[#fffaf8] px-10 py-3.5 shadow-md backdrop-blur-sm">
                        <SakuraSvg size={28} color="#e0578f" />
                        <span className="font-serif text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-[#8a0e44]">
                            Your Special Video in Motion
                        </span>
                        <SakuraSvg size={28} color="#e0578f" />
                    </div>

                    {/* Grand Title (Imposing Hero Scale) */}
                    <h1
                        className="
                            mt-6
                            font-serif
                            font-black
                            tracking-tight
                            text-[#8a0e44]
                            drop-shadow-[0_6px_30px_rgba(138,14,68,0.28)]
                        "
                        style={{
                            fontSize: "clamp(3.5rem, 7.5vw, 8rem)",
                            letterSpacing: "-0.02em",
                            lineHeight: 0.96,
                        }}
                    >
                        Moments Captured on Film
                    </h1>

                    {/* Rose Accent Divider */}
                    <div className="mt-6 flex items-center justify-center gap-8 sm:gap-10">
                        <div className="h-1.5 w-32 bg-gradient-to-r from-transparent to-[#e0578f]/80 sm:w-60 md:w-96" />
                        <RoseSvg size={60} className="text-[#e0578f]" />
                        <div className="h-1.5 w-32 bg-gradient-to-l from-transparent to-[#e0578f]/80 sm:w-60 md:w-96" />
                    </div>

                    {/* Subtitle */}
                    <p
                        className="
                            mt-6
                            max-w-6xl
                            font-serif
                            font-bold
                            italic
                            text-[#2e1420]
                        "
                        style={{
                            fontSize: "clamp(2rem, 3.2vw, 3.8rem)",
                            lineHeight: 1.35,
                        }}
                    >
                        &ldquo;Some memories are made to be watched again and again.&rdquo;
                    </p>
                </div>

                {/* ── FULL HORIZONTAL SCREEN-FILLING VIDEO PLAYER ── */}
                <div
                    className="
                        relative
                        w-full
                        aspect-[16/9]
                        overflow-hidden
                        rounded-[2rem]
                        sm:rounded-[3rem]
                        border-4
                        border-[#edd3de]
                        bg-black
                        shadow-[0_35px_120px_rgba(0,0,0,0.7)]
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
                <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-6 px-4 sm:px-8">
                    <div className="flex items-center gap-4">
                        <RoseSvg size={44} color="#e0578f" />
                        <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-black italic text-[#8a0e44]">
                            Cinematic Memory Player ♡
                        </span>
                    </div>

                    <span className="font-serif text-lg sm:text-2xl font-bold italic text-[#8a0e44] bg-[#fcedf2] px-10 py-3.5 rounded-full border-2 border-[#edd3de] shadow-md">
                        Press Play to watch the celebration video
                    </span>
                </div>
            </div>
        </section>
    );
}

export default VideoPolaroid;