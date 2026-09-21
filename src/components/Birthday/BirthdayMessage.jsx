import { useLayoutEffect, useRef } from "react";
import { revealBirthdayMessage } from "../../animations/birthdayAnimations";
import { RoseSvg, SakuraSvg } from "../Landing/FlowerDecoration";

/**
 * BirthdayMessage.jsx
 * Grand celebration announcement revealed when the cake is sliced!
 * Features an interactive wax-sealed love letter envelope ready to be opened.
 */
function BirthdayMessage({ onOpenLetter, onReplay }) {
    const starsRef = useRef(null);
    const headingRef = useRef(null);
    const messageRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = revealBirthdayMessage({
            starsRef: starsRef.current,
            headingRef: headingRef.current,
            messageRef: messageRef.current,
        });
        return () => ctx && ctx.kill && ctx.kill();
    }, []);

    return (
        <div className="mt-8 flex flex-col items-center gap-6 text-center z-20">
            {/* Sparkle Header */}
            <div
                ref={starsRef}
                className="flex items-center gap-4 text-3xl sm:text-4xl text-[#e0578f]"
                aria-hidden="true"
            >
                <SakuraSvg size={36} color="#e0578f" />
                <span className="font-serif text-lg sm:text-xl font-bold uppercase tracking-[0.3em] text-[#8a0e44]">
                    🎉 The Celebration Has Begun! 🎉
                </span>
                <SakuraSvg size={36} color="#e0578f" />
            </div>

            {/* Main Grand Heading */}
            <h2
                ref={headingRef}
                className="
                    font-serif
                    text-5xl
                    sm:text-7xl
                    md:text-8xl
                    font-black
                    tracking-tight
                    text-[#8a0e44]
                    drop-shadow-[0_8px_35px_rgba(138,14,68,0.3)]
                "
            >
                Happy Birthday, Harshuu! ❤️
            </h2>

            {/* Subtitle Message */}
            <p
                ref={messageRef}
                className="
                    max-w-4xl
                    font-serif
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    italic
                    leading-relaxed
                    text-[#3a1d29]
                    font-semibold
                "
            >
                &ldquo;May every day of your new year be painted in the warmest colours,
                surrounded by love, laughter, and everything you cherish.&rdquo;
            </p>

            {/* ── INTERACTIVE WAX-SEALED ENVELOPE CARD (Grand Centerpiece Scale) ── */}
            <div
                onClick={onOpenLetter}
                className="
                    group
                    relative
                    mt-12
                    flex
                    w-full
                    max-w-4xl
                    cursor-pointer
                    flex-col
                    items-center
                    rounded-[3.5rem]
                    border-4
                    border-[#ebd2dc]
                    bg-gradient-to-b
                    from-[#fffcfb]
                    to-[#fdf2f6]
                    px-10
                    py-16
                    sm:px-20
                    sm:py-20
                    shadow-[0_40px_100px_rgba(173,20,87,0.4)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_55px_130px_rgba(173,20,87,0.6)]
                "
                role="button"
                tabIndex={0}
                aria-label="Open your wax-sealed birthday letter"
            >
                {/* Ribbon flap indicator */}
                <div className="absolute -top-3 h-3 w-80 rounded-full bg-gradient-to-r from-transparent via-[#e0578f] to-transparent" />

                {/* Wax Seal Stamp */}
                <div className="relative mb-6 flex items-center justify-center">
                    <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#d81b60] via-[#ad1457] to-[#880e4f] shadow-[0_16px_45px_rgba(173,20,87,0.6)] wax-seal group-hover:scale-110 transition-transform">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border-3 border-[#ffcdd2]/70 bg-transparent">
                            <span className="font-serif text-5xl font-black italic text-[#fff0f4]">
                                H ♡
                            </span>
                        </div>
                    </div>
                </div>

                <h4 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black text-[#8a0e44]">
                    Open Your Letter
                </h4>

                <p className="mt-4 font-serif text-2xl sm:text-3xl italic text-[#8a0e44] font-bold">
                    Tap to break the wax seal and read what is inside ♡
                </p>

                <div className="mt-10 flex items-center gap-5 rounded-full border-3 border-[#f0d4de] bg-[#fffaf8] px-16 py-6 shadow-lg group-hover:bg-[#fcedf2] transition-colors">
                    <RoseSvg size={44} color="#e0578f" />
                    <span className="font-serif text-2xl sm:text-3xl uppercase tracking-widest text-[#8a0e44] font-black">
                        Tap to Unfold Letter
                    </span>
                </div>
            </div>

            {/* Replay Option */}
            {onReplay && (
                <button
                    type="button"
                    onClick={onReplay}
                    className="mt-6 font-serif text-2xl sm:text-3xl font-black italic text-[#8a0e44] hover:text-[#e0578f] transition-colors cursor-pointer underline underline-offset-8"
                >
                    ↻ Celebrate again (Light candles & slice)
                </button>
            )}
        </div>
    );
}

export default BirthdayMessage;
