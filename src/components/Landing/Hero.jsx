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
                px-6
                py-20
                md:px-14
                md:py-32
            "
    >
      {/* ── Botanical Corner Bouquets (Lush & Generous) ─── */}
      <FloralCorner position="top-left" className="opacity-95" />
      <FloralCorner position="top-right" className="opacity-95" />
      <FloralCorner position="bottom-left" className="opacity-90" />
      <FloralCorner position="bottom-right" className="opacity-90" />

      {/* ── Interactive Romantic Atmosphere Sound Button ── */}
      <div className="absolute right-6 top-8 z-20 md:right-14 md:top-14">
        <button
          type="button"
          onClick={handlePlayMusic}
          title="Play sweet chime"
          className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-full
                        border-2
                        border-[#ebd2dc]
                        bg-[#fffaf8]/95
                        px-8
                        py-4
                        shadow-[0_10px_30px_rgba(173,20,87,0.18)]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-[#fff0f5]
                        hover:shadow-xl
                    "
        >
          <span className={`text-2xl transition-transform sm:text-3xl ${chimePlayed ? "scale-125" : "group-hover:rotate-12"}`}>
            🎵
          </span>
          <span className="font-serif text-lg font-bold italic tracking-wider text-[#8a0e44] sm:text-xl md:text-2xl">
            {chimePlayed ? "Soft Melody ♡" : "Play Chime"}
          </span>
        </button>
      </div>

      {/* ── Center Content Column (Full-Screen Presence) ── */}
      <div className="relative z-10 flex w-full max-w-[1650px] flex-col items-center gap-16 text-center md:gap-24">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-4 rounded-full border-3 border-[#f0d4de] bg-[#fffcfb]/95 px-12 py-5 shadow-lg backdrop-blur-sm">
          <span className="text-xl text-[#e0578f] sm:text-2xl md:text-3xl">✿</span>
          <span className="font-serif text-xl font-bold uppercase tracking-[0.25em] text-[#4a1830] sm:text-2xl md:text-3xl">
            For Someone Incredibly Special
          </span>
          <span className="text-xl text-[#e0578f] sm:text-2xl md:text-3xl">✿</span>
        </div>

        {/* Main Headline (Imposing, Grand Scale) */}
        <div className="relative flex flex-col items-center">
          <h1
            className="
                            font-serif
                            font-black
                            tracking-tight
                            text-[#8a0e44]
                            drop-shadow-[0_8px_40px_rgba(138,14,68,0.3)]
                        "
            style={{
              fontSize: "clamp(6.5rem, 16vw, 19rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.92,
            }}
          >
            {countdownConfig.recipientName}
          </h1>

          {/* Rose accent divider */}
          <div className="mt-8 flex items-center justify-center gap-8 sm:gap-10">
            <div className="h-1.5 w-36 bg-gradient-to-r from-transparent to-[#e0578f]/80 sm:w-64 md:w-96" />
            <RoseSvg size={68} className="text-[#e0578f]" />
            <div className="h-1.5 w-36 bg-gradient-to-l from-transparent to-[#e0578f]/80 sm:w-64 md:w-96" />
          </div>

          {/* Subtitle (Large, High-Contrast & Legible) */}
          <p
            className="
                            mt-10
                            max-w-5xl
                            font-serif
                            font-bold
                            italic
                            text-[#2e1420]
                        "
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 4.2rem)",
              lineHeight: 1.35,
            }}
          >
            {countdownConfig.subheading}
          </p>
        </div>

        {/* ── Interactive Polaroid Preview Teaser (Substantially Enlarged) ─── */}
        <div className="w-full flex flex-col items-center mt-4">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-serif text-2xl font-bold italic tracking-widest text-[#5c1c38] sm:text-3xl md:text-4xl">
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
                            py-10
                        "
            title="Click to explore the scrapbook"
          >
            {/* 3 Floating / Overlapping Polaroids (Grand Screen Scale) */}
            <div className="relative flex h-[540px] w-full max-w-5xl items-center justify-center sm:h-[640px] md:h-[750px] lg:h-[860px] xl:max-w-6xl">
              {previewPhotos.map((photo, index) => {
                const rotations = [
                  "-rotate-8 -translate-x-32 sm:-translate-x-56 md:-translate-x-80 lg:-translate-x-96",
                  "rotate-0 z-20 scale-105 sm:scale-110",
                  "rotate-8 translate-x-32 sm:translate-x-56 md:translate-x-80 lg:translate-x-96",
                ];
                const tapeRotations = ["-rotate-3", "rotate-2", "-rotate-2"];

                return (
                  <div
                    key={photo.id || index}
                    className={`
                                            absolute
                                            w-80
                                            rounded-3xl
                                            border-3
                                            border-[#edd3de]
                                            bg-[#fffdfa]
                                            p-6
                                            shadow-[0_24px_60px_rgba(173,20,87,0.24)]
                                            transition-all
                                            duration-500
                                            group-hover:scale-110
                                            group-hover:rotate-0
                                            group-hover:shadow-[0_36px_85px_rgba(173,20,87,0.38)]
                                            sm:w-96
                                            sm:p-7
                                            md:w-[460px]
                                            md:p-8
                                            lg:w-[520px]
                                            ${rotations[index]}
                                        `}
                  >
                    {/* Washi Tape Strip */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                      <Tape width="w-44 sm:w-56 md:w-64" rotation={tapeRotations[index]} opacity={0.9} />
                    </div>

                    {/* Photo thumbnail */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#f8e5eb] shadow-inner">
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
                        <div className="flex h-full w-full items-center justify-center text-7xl text-rose-300">
                          ✿
                        </div>
                      )}
                    </div>

                    {/* Caption label */}
                    <p className="mt-5 text-center font-serif text-2xl font-bold italic tracking-wider text-[#2e1420] sm:text-3xl md:text-4xl">
                      {photo.caption || "our memory"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <span className="mt-6 font-serif text-2xl font-extrabold italic tracking-wider text-[#8a0e44] group-hover:underline sm:text-3xl md:text-4xl">
            tap photographs to open scrapbook
          </span>
        </div>

        {/* ── Countdown Component Showcase (Grand Scale) ── */}
        <div className="w-full flex justify-center mt-10">
          <Countdown />
        </div>

        {/* ── Substantial Action CTAs (Bold & Extra Large) ── */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
          {/* Primary Button: Open Scrapbook */}
          <Link
            to="/scrapbook"
            className="
                            group
                            relative
                            inline-flex
                            items-center
                            gap-6
                            overflow-hidden
                            rounded-[2rem]
                            border-3
                            border-[#8a0e44]
                            bg-[#8a0e44]
                            px-16
                            py-7
                            font-serif
                            text-3xl
                            font-black
                            italic
                            tracking-wider
                            text-white
                            shadow-[0_20px_60px_rgba(138,14,68,0.4)]
                            transition-all
                            duration-300
                            hover:bg-[#6c0a35]
                            hover:shadow-[0_28px_80px_rgba(138,14,68,0.6)]
                            hover:-translate-y-2
                            sm:px-22
                            sm:py-8
                            sm:text-4xl
                            md:px-28
                            md:py-10
                            md:text-5xl
                        "
          >
            <span>Open Scrapbook</span>
            <span className="transition-transform duration-300 group-hover:translate-x-3">♡</span>
          </Link>

          {/* Secondary Button: Birthday Wish & Cake */}
          <Link
            to="/birthday"
            className="
                            group
                            inline-flex
                            items-center
                            gap-5
                            rounded-[2rem]
                            border-3
                            border-[#e8cbd4]
                            bg-[#fffdfa]
                            px-16
                            py-7
                            font-serif
                            text-3xl
                            font-black
                            italic
                            tracking-wider
                            text-[#8a0e44]
                            shadow-[0_16px_40px_rgba(173,20,87,0.18)]
                            transition-all
                            duration-300
                            hover:bg-[#fff2f6]
                            hover:border-[#8a0e44]/70
                            hover:shadow-[0_24px_60px_rgba(173,20,87,0.3)]
                            hover:-translate-y-2
                            sm:px-22
                            sm:py-8
                            sm:text-4xl
                            md:px-28
                            md:py-10
                            md:text-5xl
                        "
          >
            <span>Make a Birthday Wish</span>
            <span className="transition-transform group-hover:scale-125">🎂</span>
          </Link>
        </div>

        {/* Bottom decorative footnote */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <span className="font-serif text-xl font-bold italic tracking-widest text-[#4a1830] sm:text-2xl md:text-3xl">
            crafted with love for madam ji
          </span>
          <span className="text-xl text-[#e0578f] sm:text-2xl md:text-3xl">✿</span>
          <span className="font-serif text-xl font-bold italic tracking-widest text-[#4a1830] sm:text-2xl md:text-3xl">
            {countdownConfig.dateDisplay}
          </span>
        </div>

      </div>
    </section>
  );
}

export default Hero;