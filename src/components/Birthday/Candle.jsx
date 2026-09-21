import { useEffect, useRef } from "react";
import { animateFlame } from "../../animations/birthdayAnimations";

/**
 * Single birthday candle with animated flame and candle glow.
 *
 * Props:
 *  color      - candle body color
 *  isLit      - whether flame is visible
 *  smokeRef   - ref for smoke element (passed from parent for blow-out)
 *  flameRef   - ref for flame element (passed from parent for blow-out)
 */
function Candle({ color = "#f4a9c4", isLit = true, flameRef, smokeRef }) {
    const internalFlameRef = useRef(null);
    const resolvedFlameRef = flameRef || internalFlameRef;

    useEffect(() => {
        if (isLit && resolvedFlameRef.current) {
            animateFlame(resolvedFlameRef.current);
        }
    }, [isLit, resolvedFlameRef]);

    return (
        <g>
            {/* Candle body */}
            <rect
                x="-7"
                y="0"
                width="14"
                height="46"
                rx="3"
                fill={color}
                stroke="#c08898"
                strokeWidth="1"
            />

            {/* Wax drip accent */}
            <path
                d="M-7 8 Q-11 14 -9 20"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
            />

            {/* Wick */}
            <line
                x1="0"
                y1="0"
                x2="0"
                y2="-7"
                stroke="#5c3d2e"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            {/* Smoke (hidden until blown out) */}
            <ellipse
                ref={smokeRef}
                cx="0"
                cy="-14"
                rx="4"
                ry="6"
                fill="#c4b0b8"
                opacity="0"
            />

            {/* Flame with glowing aura - always mounted so GSAP can animate blowOutCandle */}
            <g
                ref={resolvedFlameRef}
                style={{
                    transformOrigin: "0px 0px",
                    display: isLit ? "block" : "none",
                }}
                className={isLit ? "candle-glow" : ""}
            >
                {/* Outer warm glow */}
                <ellipse
                    cx="0"
                    cy="-18"
                    rx="12"
                    ry="18"
                    fill="#fbbf24"
                    opacity="0.25"
                />
                {/* Outer flame */}
                <ellipse
                    cx="0"
                    cy="-18"
                    rx="6"
                    ry="12"
                    fill="#f97316"
                    opacity="0.9"
                />
                {/* Inner bright flame */}
                <ellipse
                    cx="0"
                    cy="-17"
                    rx="3.5"
                    ry="8"
                    fill="#fbbf24"
                    opacity="0.95"
                />
                {/* Hot center */}
                <ellipse
                    cx="0"
                    cy="-16"
                    rx="1.8"
                    ry="4.5"
                    fill="#ffffff"
                    opacity="0.9"
                />
            </g>
        </g>
    );
}

export default Candle;
