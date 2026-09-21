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

    const setCardRef = (node) => {
        innerRef.current = node;
        if (typeof ref === "function") {
            ref(node);
        } else if (ref) {
            ref.current = node;
        }
    };

    const handleMouseEnter = () => {
        if (innerRef.current) polaroidHoverIn(innerRef.current, rotationDeg);
    };
    const handleMouseLeave = () => {
        if (innerRef.current) polaroidHoverOut(innerRef.current, rotationDeg);
    };

    return (
        <button
            ref={setCardRef}
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
                min-h-[360px]
                sm:min-h-[420px]
                flex-col
                items-center
                justify-between
                border-2
                border-[#edd3de]
                bg-[#fffdfa]
                p-4
                sm:p-6
                pb-6
                sm:pb-8
                shadow-[0_16px_40px_rgba(173,20,87,0.16)]
                transition-all
                duration-500
                hover:shadow-[0_24px_60px_rgba(173,20,87,0.26)]
                hover:border-[#e0578f]
                hover:scale-[1.02]
                ${rotation}
                cursor-pointer
                focus:outline-none
                rounded-2xl
                sm:rounded-3xl
            `}
            aria-label={caption ? `Open memory: ${caption}` : "Open memory photo"}
            style={{ willChange: "transform" }}
        >
            {/* Washi Tape Strip on Top */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <Tape width="w-32 sm:w-44" rotation={rotationDeg > 0 ? "-rotate-2" : "rotate-2"} opacity={0.92} />
            </div>

            {/* Photo container */}
            <div className="relative aspect-[4/4.5] sm:aspect-[4/4.2] w-full min-h-[250px] sm:min-h-[300px] overflow-hidden rounded-xl sm:rounded-2xl bg-[#f8e5eb] shadow-inner">
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
                    <div className="flex h-full w-full items-center justify-center text-5xl text-rose-300">
                        ✿
                    </div>
                )}

                {/* Floating "View Memory" hover badge */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[2px]">
                    <span className="rounded-full bg-white/95 px-5 py-2 font-serif text-sm sm:text-base font-bold italic text-[#8a0e44] shadow-lg">
                        View Memory ♡
                    </span>
                </div>
            </div>

            {/* Caption */}
            {caption && (
                <p className="mt-4 text-center font-serif text-base sm:text-lg md:text-xl font-bold italic leading-snug text-[#2e1420]">
                    {caption}
                </p>
            )}
        </button>
    );
});

export default PolaroidCard;