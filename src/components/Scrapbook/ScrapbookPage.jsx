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
                min-h-[620px]
                sm:min-h-[720px]
                w-full
                flex-col
                justify-between
                overflow-hidden
                rounded-[3rem]
                border-4
                border-[#ebd2dc]
                bg-[#fffdfb]
                p-8
                sm:p-12
                2xl:p-16
                shadow-[0_30px_80px_rgba(173,20,87,0.2)]
                transition-all
                duration-500
                hover:shadow-[0_45px_100px_rgba(173,20,87,0.32)]
                hover:border-[#e0578f]
                hover:scale-[1.01]
                ${rotation}
            `}
        >
            {/* Top decorative washi tape */}
            <div className="absolute -top-6 left-12 z-20">
                <Tape width="w-48 sm:w-64" rotation="-rotate-2" opacity={0.92} />
            </div>

            {/* Corner floral accent for GSAP bloom */}
            <div
                ref={flowerRef}
                className="pointer-events-none absolute right-8 top-8 z-10 opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
            >
                <RoseSvg size={52} color="#e0578f" />
            </div>

            {/* Top Eyebrow & Date Bar */}
            <div className="relative z-10 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <SakuraSvg size={28} color="#e0578f" />
                        <span className="font-serif text-lg sm:text-xl 2xl:text-2xl font-bold uppercase tracking-[0.25em] text-[#8a0e44]">
                            {eyebrow}
                        </span>
                    </div>

                    {date && (
                        <span className="rounded-full border-2 border-[#edd3de] bg-[#fcedf2] px-6 py-2 font-serif text-base sm:text-lg 2xl:text-xl font-bold text-[#8a0e44] shadow-sm">
                            {date}
                        </span>
                    )}
                </div>

                <div className="mt-5 h-1.5 w-full rounded-full bg-gradient-to-r from-[#e0578f]/50 via-[#f7b7cb]/70 to-transparent" />
            </div>

            {/* Main Content: Chapter Title & Handcrafted Note */}
            <div className="relative z-10 my-auto py-8">
                <h3 className="font-serif text-4xl sm:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight text-[#8a0e44] drop-shadow-[0_2px_12px_rgba(138,14,68,0.18)]">
                    {title}
                </h3>

                <div className="my-6 flex items-center gap-4">
                    <div className="h-1.5 w-20 rounded-full bg-[#e0578f]" />
                    <SakuraSvg size={26} color="#e0578f" />
                    <div className="h-1.5 w-10 rounded-full bg-[#e0578f]/40" />
                </div>

                <p className="font-serif text-2xl sm:text-3xl 2xl:text-4xl font-bold italic leading-[1.7] text-[#2e1420]">
                    &ldquo;{text}&rdquo;
                </p>
            </div>

            {/* Bottom Signature */}
            <div className="relative z-10 pt-6">
                <div className="mb-5 h-1 w-full bg-gradient-to-r from-transparent via-[#e0578f]/40 to-transparent" />

                <div className="flex items-center justify-between">
                    <p className="font-serif text-2xl sm:text-3xl 2xl:text-4xl font-black italic tracking-wide text-[#8a0e44]">
                        with love ♡
                    </p>
                    <RoseSvg size={40} color="#f498b8" />
                </div>
            </div>
        </article>
    );
}

export default ScrapbookPage;