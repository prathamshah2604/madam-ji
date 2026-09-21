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
                border-2
                border-[#f0d4de]
                bg-[#fffaf8]
                px-7
                py-3
                sm:px-10
                sm:py-3.5
                shadow-[0_10px_30px_rgba(224,87,143,0.25)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_16px_45px_rgba(224,87,143,0.4)]
                ${isDisabled ? "opacity-50 cursor-default" : "cursor-pointer"}
            `}
            aria-label="Make a wish and blow candles"
        >
            <div className="flex items-center gap-3 sm:gap-4">
                <SakuraSvg size={24} color="#e0578f" />
                <span className="font-serif text-base sm:text-xl font-black italic tracking-wide text-[#8a0e44]">
                    Make a Wish & Blow Candles 🕯️
                </span>
                <SakuraSvg size={24} color="#e0578f" />
            </div>
        </button>
    );
}

export default WishButton;
