import { useRef } from "react";
import { ctaHoverIn, ctaHoverOut, ctaPress } from "../../animations/hoverAnimations";
import { SakuraSvg } from "../Landing/FlowerDecoration";

/**
 * "Make a Wish" button.
 *
 * Props:
 *  onWish     - called after press animation completes
 *  isDisabled - true after wish has been made
 */
function WishButton({ onWish, isDisabled = false }) {
    const btnRef = useRef(null);

    const handleClick = () => {
        if (isDisabled) return;
        ctaPress(btnRef.current, () => {
            if (onWish) onWish();
        });
    };

    return (
        <button
            ref={btnRef}
            type="button"
            onClick={handleClick}
            disabled={isDisabled}
            onMouseEnter={() => !isDisabled && ctaHoverIn(btnRef.current)}
            onMouseLeave={() => !isDisabled && ctaHoverOut(btnRef.current)}
            className={`
                group
                relative
                rounded-full
                border-4
                border-[#f0d4de]
                bg-[#fffaf8]
                px-14
                py-6
                sm:px-24
                sm:py-8
                shadow-[0_20px_60px_rgba(224,87,143,0.4)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_28px_80px_rgba(224,87,143,0.6)]
                ${isDisabled ? "opacity-50 cursor-default" : "cursor-pointer"}
            `}
            aria-label="Make a wish and blow candles"
        >
            <div className="flex items-center gap-6">
                <SakuraSvg size={44} color="#e0578f" />
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-black italic tracking-wide text-[#8a0e44]">
                    Make a Wish & Blow Candles 🕯️
                </span>
                <SakuraSvg size={44} color="#e0578f" />
            </div>
        </button>
    );
}

export default WishButton;
