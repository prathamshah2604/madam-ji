import { RoseSvg, SakuraSvg } from "../Landing/FlowerDecoration";
import Tape from "../Common/Tape";

/**
 * ScrapbookPage - Substantially Scaled Journal Chapter Entry.
 * Features grand widescreen proportions, luxury parchment styling,
 * washi tape headers, and bold high-contrast Playfair typography.
 */
function ScrapbookPage({
    eyebrow,
    title,
    text,
    date,
    rotation = "",
    flowerRef,
}) {
    return (
        <article
            className={`
                group
                relative
                flex
                min-h-[360px]
                sm:min-h-[420px]
                w-full
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                sm:rounded-3xl
                border-2
                border-[#ebd2dc]
                bg-[#fffdfb]
                p-5
                sm:p-7
                md:p-8
                shadow-[0_16px_40px_rgba(173,20,87,0.15)]
                transition-all
                duration-500
                hover:shadow-[0_24px_60px_rgba(173,20,87,0.25)]
                hover:border-[#e0578f]
                hover:scale-[1.01]
                ${rotation}
            `}
        >
            {/* Top decorative washi tape */}
            <div className="absolute -top-4 left-8 z-20">
                <Tape width="w-32 sm:w-44" rotation="-rotate-2" opacity={0.92} />
            </div>

            {/* Corner floral accent for GSAP bloom */}
            <div
                ref={flowerRef}
                className="pointer-events-none absolute right-5 top-5 z-10 opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
            >
                <RoseSvg size={36} color="#e0578f" />
            </div>

            {/* Top Eyebrow & Date Bar */}
            <div className="relative z-10 pt-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <SakuraSvg size={20} color="#e0578f" />
                        <span className="font-serif text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#8a0e44]">
                            {eyebrow}
                        </span>
                    </div>

                    {date && (
                        <span className="rounded-full border border-[#edd3de] bg-[#fcedf2] px-3.5 py-1 font-serif text-xs sm:text-sm font-bold text-[#8a0e44] shadow-sm">
                            {date}
                        </span>
                    )}
                </div>

                <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-[#e0578f]/50 via-[#f7b7cb]/70 to-transparent" />
            </div>

            {/* Main Content: Chapter Title & Handcrafted Note */}
            <div className="relative z-10 my-auto py-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-black leading-tight tracking-tight text-[#8a0e44] drop-shadow-[0_1px_8px_rgba(138,14,68,0.14)]">
                    {title}
                </h3>

                <div className="my-3.5 flex items-center gap-3">
                    <div className="h-1 w-14 rounded-full bg-[#e0578f]" />
                    <SakuraSvg size={18} color="#e0578f" />
                    <div className="h-1 w-7 rounded-full bg-[#e0578f]/40" />
                </div>

                <p className="font-serif text-base sm:text-lg font-bold italic leading-[1.65] text-[#2e1420]">
                    &ldquo;{text}&rdquo;
                </p>
            </div>

            {/* Bottom Signature */}
            <div className="relative z-10 pt-3">
                <div className="mb-3 h-0.5 w-full bg-gradient-to-r from-transparent via-[#e0578f]/40 to-transparent" />

                <div className="flex items-center justify-between">
                    <p className="font-serif text-base sm:text-lg font-black italic tracking-wide text-[#8a0e44]">
                        with love ♡
                    </p>
                    <RoseSvg size={28} color="#f498b8" />
                </div>
            </div>
        </article>
    );
}

export default ScrapbookPage;