import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FloralCorner, RoseSvg } from "./FlowerDecoration";
import Countdown from "./Countdown";
import Tape from "../Common/Tape";
import { memories } from "../../data/memories";
import { countdownConfig } from "../../data/countdown";

/**
 * Romantic Audio Chime helper (Web Audio API, no external audio files needed)
 * Plays a soft, dreamy music-box / harp arpeggio when triggered.
 */
function playRomanticChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Pentatonic dream scale frequencies (C5, E5, G5, A5, C6)
    const notes = [523.25, 659.25, 783.99, 880.0, 1046.5];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + idx * 0.12 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.12 + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.12);
      osc.stop(ctx.currentTime + idx * 0.12 + 1.3);
    });
  } catch (e) {
    // AudioContext disabled or not allowed before gesture
  }
}

/**
 * Hero Component
 * Maximum screen-filling grandeur with extra large, crystal-clear, high-contrast typography
 * so no zooming is ever required.
 */
function Hero() {
  const navigate = useNavigate();
  const [chimePlayed, setChimePlayed] = useState(false);

  // Mini preview memories (first 3)
  const previewPhotos = memories.slice(0, 3);

  const handlePlayMusic = () => {
    playRomanticChime();
    setChimePlayed(true);
    setTimeout(() => setChimePlayed(false), 2000);
  };

  return (
    <section
      className="
                relative
                flex
                min-h-screen
                w-full
                flex-col
                items-center
                justify-center
                overflow-hidden
                px-4
                py-10
                md:px-8
                md:py-16
            "
    >
      {/* ── Botanical Corner Bouquets (Lush & Generous) ─── */}
      <FloralCorner position="top-left" className="opacity-95" />
      <FloralCorner position="top-right" className="opacity-95" />
      <FloralCorner position="bottom-left" className="opacity-90" />
      <FloralCorner position="bottom-right" className="opacity-90" />

      {/* ── Interactive Romantic Atmosphere Sound Button ── */}
      <div className="absolute right-4 top-4 z-20 md:right-10 md:top-8">
        <button
          type="button"
          onClick={handlePlayMusic}
          title="Play sweet chime"
          className="
                        group
                        flex
                        items-center
                        gap-2.5
                        rounded-full
                        border
                        border-[#ebd2dc]
                        bg-[#fffaf8]/95
                        px-4
                        py-2
                        shadow-[0_6px_20px_rgba(173,20,87,0.12)]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-[#fff0f5]
                        hover:shadow-md
                    "
        >
          <span className={`text-lg transition-transform sm:text-xl ${chimePlayed ? "scale-125" : "group-hover:rotate-12"}`}>
            🎵
          </span>
          <span className="font-serif text-xs font-bold italic tracking-wider text-[#8a0e44] sm:text-sm">
            {chimePlayed ? "Soft Melody ♡" : "Play Chime"}
          </span>
        </button>
      </div>

      {/* ── Center Content Column (Balanced Scale) ── */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 sm:gap-10 text-center">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-3 rounded-full border-2 border-[#f0d4de] bg-[#fffcfb]/95 px-6 py-2 shadow-sm backdrop-blur-sm">
          <span className="text-sm text-[#e0578f] sm:text-base">✿</span>
          <span className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#4a1830] sm:text-sm">
            For Someone Incredibly Special
          </span>
          <span className="text-sm text-[#e0578f] sm:text-base">✿</span>
        </div>

        {/* Main Headline */}
        <div className="relative flex flex-col items-center">
          <h1
            className="
                            font-serif
                            font-black
                            tracking-tight
                            text-[#8a0e44]
                            drop-shadow-[0_4px_25px_rgba(138,14,68,0.22)]
                        "
            style={{
              fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
            }}
          >
            {countdownConfig.recipientName}
          </h1>

          {/* Rose accent divider */}
          <div className="mt-4 flex items-center justify-center gap-5">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#e0578f]/80 sm:w-32" />
            <RoseSvg size={36} className="text-[#e0578f]" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#e0578f]/80 sm:w-32" />
          </div>

          {/* Subtitle */}
          <p
            className="
                            mt-4
                            max-w-2xl
                            font-serif
                            font-bold
                            italic
                            text-[#2e1420]
                        "
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
              lineHeight: 1.4,
            }}
          >
            {countdownConfig.subheading}
          </p>
        </div>

        {/* ── Interactive Polaroid Preview Teaser ─── */}
        <div className="w-full flex flex-col items-center mt-2">
          <div className="mb-4 flex items-center gap-2">
            <span className="font-serif text-xs font-bold italic tracking-widest text-[#5c1c38] sm:text-sm">
              ✧ a sneak peek inside ✧
            </span>
          </div>

          {/* Polaroid Fan / Stack */}
          <div
            onClick={() => navigate("/scrapbook")}
            className="
                            group
                            relative
                            flex
                            w-full
                            cursor-pointer
                            items-center
                            justify-center
                            py-4
                        "
            title="Click to explore the scrapbook"
          >
            {/* 3 Floating / Overlapping Polaroids */}
            <div className="relative flex h-[280px] w-full max-w-3xl items-center justify-center sm:h-[320px] md:h-[350px]">
              {previewPhotos.map((photo, index) => {
                const rotations = [
                  "-rotate-6 -translate-x-24 sm:-translate-x-36 md:-translate-x-48",
                  "rotate-0 z-20 scale-105",
                  "rotate-6 translate-x-24 sm:translate-x-36 md:translate-x-48",
                ];
                const tapeRotations = ["-rotate-3", "rotate-2", "-rotate-2"];

                return (
                  <div
                    key={photo.id || index}
                    className={`
                                            absolute
                                            w-52
                                            rounded-2xl
                                            border-2
                                            border-[#edd3de]
                                            bg-[#fffdfa]
                                            p-3.5
                                            pb-5
                                            shadow-[0_16px_40px_rgba(173,20,87,0.18)]
                                            transition-all
                                            duration-500
                                            group-hover:scale-110
                                            group-hover:rotate-0
                                            group-hover:shadow-[0_24px_60px_rgba(173,20,87,0.28)]
                                            sm:w-60
                                            sm:p-4
                                            sm:pb-6
                                            md:w-68
                                            ${rotations[index]}
                                        `}
                  >
                    {/* Washi Tape Strip */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                      <Tape width="w-28 sm:w-36" rotation={tapeRotations[index]} opacity={0.9} />
                    </div>

                    {/* Photo thumbnail */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#f8e5eb] shadow-inner">
                      {photo.image ? (
                        <img
                          src={photo.image}
                          alt={photo.caption}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-4xl text-rose-300">
                          ✿
                        </div>
                      )}
                    </div>

                    {/* Caption label */}
                    <p className="mt-3 text-center font-serif text-sm font-bold italic tracking-wide text-[#2e1420] sm:text-base">
                      {photo.caption || "our memory"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <span className="mt-3 font-serif text-xs font-bold italic tracking-wider text-[#8a0e44] group-hover:underline sm:text-sm">
            tap photographs to open scrapbook
          </span>
        </div>

        {/* ── Countdown Component Showcase ── */}
        <div className="w-full flex justify-center mt-6">
          <Countdown />
        </div>

        {/* ── Action CTAs ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {/* Primary Button: Open Scrapbook */}
          <Link
            to="/scrapbook"
            className="
                            group
                            relative
                            inline-flex
                            items-center
                            gap-3
                            overflow-hidden
                            rounded-full
                            border-2
                            border-[#8a0e44]
                            bg-[#8a0e44]
                            px-8
                            py-3.5
                            font-serif
                            text-base
                            font-bold
                            italic
                            tracking-wider
                            text-white
                            shadow-[0_12px_35px_rgba(138,14,68,0.3)]
                            transition-all
                            duration-300
                            hover:bg-[#6c0a35]
                            hover:shadow-[0_16px_45px_rgba(138,14,68,0.45)]
                            hover:-translate-y-1
                            sm:px-10
                            sm:py-4
                            sm:text-lg
                        "
          >
            <span>Open Scrapbook</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">♡</span>
          </Link>

          {/* Secondary Button: Birthday Wish & Cake */}
          <Link
            to="/birthday"
            className="
                            group
                            inline-flex
                            items-center
                            gap-2.5
                            rounded-full
                            border-2
                            border-[#e8cbd4]
                            bg-[#fffdfa]
                            px-8
                            py-3.5
                            font-serif
                            text-base
                            font-bold
                            italic
                            tracking-wider
                            text-[#8a0e44]
                            shadow-[0_10px_25px_rgba(173,20,87,0.12)]
                            transition-all
                            duration-300
                            hover:bg-[#fff2f6]
                            hover:border-[#8a0e44]/70
                            hover:shadow-[0_14px_35px_rgba(173,20,87,0.22)]
                            hover:-translate-y-1
                            sm:px-10
                            sm:py-4
                            sm:text-lg
                        "
          >
            <span>Make a Birthday Wish</span>
            <span className="transition-transform group-hover:scale-115">🎂</span>
          </Link>
        </div>

        {/* Bottom decorative footnote */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="font-serif text-xs font-semibold italic tracking-widest text-[#4a1830] sm:text-sm">
            crafted with love for madam ji
          </span>
          <span className="text-xs text-[#e0578f] sm:text-sm">✿</span>
          <span className="font-serif text-xs font-semibold italic tracking-widest text-[#4a1830] sm:text-sm">
            {countdownConfig.dateDisplay}
          </span>
        </div>

      </div>
    </section>
  );
}

export default Hero;