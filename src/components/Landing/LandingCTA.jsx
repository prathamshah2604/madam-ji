import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ctaHoverIn, ctaHoverOut, ctaPress } from "../../animations/hoverAnimations";

/**
 * Landing page CTA button — "Open Scrapbook".
 * Scrapbook-styled, GSAP hover + click press animation.
 */
function LandingCTA() {
    const btnRef = useRef(null);
    const navigate = useNavigate();

    const handleHoverIn = () => ctaHoverIn(btnRef.current);
    const handleHoverOut = () => ctaHoverOut(btnRef.current);

    const handleClick = () => {
        ctaPress(btnRef.current, () => {
            navigate("/scrapbook");
        });
    };

    return (
        <button
            ref={btnRef}
            type="button"
            onClick={handleClick}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            className="group relative cursor-pointer border-0 bg-transparent p-0"
            style={{ boxShadow: "0 6px 20px rgba(173,20,87,0.12)" }}
            aria-label="Open the scrapbook"
        >
            {/* Paper backing */}
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-sm
                    bg-[#fffaf8]
                    px-12
                    py-5
                "
                style={{
                    border: "1.5px solid #e8cbd4",
                }}
            >
                {/* Decorative top rule */}
                <div className="mb-3 h-px w-full bg-[#e0578f]/25" />

                <span
                    className="
                        block
                        font-serif
                        text-[1.15rem]
                        italic
                        tracking-widest
                        text-[#ad1457]
                    "
                >
                    Open Scrapbook
                </span>

                {/* Decorative bottom rule */}
                <div className="mt-3 h-px w-full bg-[#e0578f]/25" />

                {/* Small heart accent */}
                <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#e0578f]/60"
                    aria-hidden="true"
                >
                    ♡
                </span>
            </div>
        </button>
    );
}

export default LandingCTA;
