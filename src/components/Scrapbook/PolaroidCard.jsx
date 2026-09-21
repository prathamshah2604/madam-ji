import { forwardRef, useRef } from "react";
import { polaroidHoverIn, polaroidHoverOut } from "../../animations/hoverAnimations";
import Tape from "../Common/Tape";

/**
 * PolaroidCard - Substantially Scaled Keepsake Photo Card.
 * Features a grand photo frame, large washi tape, deep drop shadow,
 * and high-contrast Playfair typography.
 */
const PolaroidCard = forwardRef(function PolaroidCard(
    {
        image,
        rotation = "rotate-2",
        rotationDeg = 2,
        onClick,
        caption = "",
        flipId,
    },
    ref
) {
    const innerRef = useRef(null);
    const cardRef = ref || innerRef;

    const handleMouseEnter = () => polaroidHoverIn(cardRef.current, rotationDeg);
    const handleMouseLeave = () => polaroidHoverOut(cardRef.current, rotationDeg);

    return (
        <button
            ref={cardRef}
            type="button"
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-flip-id={flipId}
            className={`
                group
                relative
                flex
                w-full
                min-h-[620px]
                sm:min-h-[720px]
                flex-col
                items-center
                justify-between
                border-4
                border-[#edd3de]
                bg-[#fffdfa]
                p-8
                sm:p-12
                pb-14
                shadow-[0_30px_80px_rgba(173,20,87,0.22)]
                transition-all
                duration-500
                hover:shadow-[0_45px_100px_rgba(173,20,87,0.38)]
                hover:border-[#e0578f]
                hover:scale-[1.02]
                ${rotation}
                cursor-pointer
                focus:outline-none
                rounded-[3rem]
            `}
            aria-label={caption ? `Open memory: ${caption}` : "Open memory photo"}
            style={{ willChange: "transform" }}
        >
            {/* Washi Tape Strip on Top */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <Tape width="w-56 sm:w-72" rotation={rotationDeg > 0 ? "-rotate-2" : "rotate-2"} opacity={0.92} />
            </div>

            {/* Photo container */}
            <div className="relative aspect-[4/4.5] sm:aspect-[4/4.2] w-full min-h-[420px] sm:min-h-[520px] overflow-hidden rounded-[2.2rem] bg-[#f8e5eb] shadow-inner">
                {image ? (
                    <img
                        src={image}
                        alt={caption || "Memory"}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-8xl text-rose-300">
                        ✿
                    </div>
                )}

                {/* Floating "View Memory" hover badge */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                    <span className="rounded-full bg-white/95 px-8 py-3.5 font-serif text-xl sm:text-2xl font-black italic text-[#8a0e44] shadow-2xl">
                        View Memory ♡
                    </span>
                </div>
            </div>

            {/* Caption */}
            {caption && (
                <p className="mt-8 text-center font-serif text-3xl sm:text-4xl 2xl:text-5xl font-black italic leading-snug text-[#2e1420]">
                    {caption}
                </p>
            )}
        </button>
    );
});

export default PolaroidCard;