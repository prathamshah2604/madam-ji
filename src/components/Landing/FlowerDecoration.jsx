import React from "react";

/**
 * Botanical Flower and Vine SVG components
 * Handcrafted vector artwork with blush, rose, sage green, and gold tones.
 */

// Individual blooming rose
export function RoseSvg({ size = 48, className = "", color = "#e0578f", accent = "#f7c1d3" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-500 hover:scale-110 hover:rotate-6 ${className}`}
        >
            {/* Outer petals */}
            <path
                d="M50 15 C35 15 20 28 22 45 C15 52 16 68 28 78 C38 86 62 86 72 78 C84 68 85 52 78 45 C80 28 65 15 50 15Z"
                fill={accent}
                opacity="0.85"
            />
            {/* Mid petals */}
            <path
                d="M30 42 C30 30 42 24 50 24 C58 24 70 30 70 42 C72 55 64 68 50 68 C36 68 28 55 30 42Z"
                fill="#f498b8"
            />
            {/* Inner layered petals */}
            <path
                d="M38 46 C38 38 45 32 50 32 C55 32 62 38 62 46 C62 54 56 60 50 60 C44 60 38 54 38 46Z"
                fill={color}
            />
            {/* Central swirl */}
            <path
                d="M46 44 C46 41 52 40 54 43 C56 46 51 50 49 48 C47 46 48 44 50 44"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            {/* Dew drop sparkle */}
            <circle cx="62" cy="38" r="2" fill="#fff" opacity="0.8" />
        </svg>
    );
}

// Delicate 5-petal cherry blossom
export function SakuraSvg({ size = 36, className = "", color = "#fbbad0" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-500 hover:scale-110 hover:-rotate-12 ${className}`}
        >
            {/* 5 notched petals */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
                <path
                    key={i}
                    transform={`rotate(${angle} 50 50)`}
                    d="M50 50 C42 32 38 18 46 10 C50 6 50 12 50 12 C50 12 50 6 54 10 C62 18 58 32 50 50 Z"
                    fill={color}
                    stroke="#e898b3"
                    strokeWidth="1.2"
                />
            ))}
            {/* Center pistils */}
            <circle cx="50" cy="50" r="6" fill="#ad1457" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <circle
                    key={`dot-${i}`}
                    cx={50 + 10 * Math.cos((angle * Math.PI) / 180)}
                    cy={50 + 10 * Math.sin((angle * Math.PI) / 180)}
                    r="1.8"
                    fill="#f5c26b"
                />
            ))}
        </svg>
    );
}

// Ornate Botanical Corner Bouquet
export function FloralCorner({ position = "top-left", className = "" }) {
    // Transform styling based on corner orientation
    const cornerStyles = {
        "top-left": "top-0 left-0",
        "top-right": "top-0 right-0 scale-x-[-1]",
        "bottom-left": "bottom-0 left-0 scale-y-[-1]",
        "bottom-right": "bottom-0 right-0 scale-x-[-1] scale-y-[-1]",
    };

    return (
        <div
            className={`pointer-events-none absolute z-10 w-64 select-none transition-opacity duration-700 sm:w-80 md:w-[420px] lg:w-[520px] xl:w-[620px] 2xl:w-[700px] ${cornerStyles[position] || ""} ${className}`}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full drop-shadow-[0_4px_16px_rgba(224,87,143,0.18)]"
            >
                {/* Flowing background stems */}
                <path
                    d="M10 10 C80 50 180 60 270 20 C220 120 180 200 40 280"
                    stroke="#7fa66b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.8"
                />
                <path
                    d="M15 15 C50 120 100 180 20 250"
                    stroke="#69935a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                />
                <path
                    d="M15 15 C120 40 190 100 240 30"
                    stroke="#69935a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                />

                {/* Soft eucalyptus and sage leaves */}
                <ellipse cx="75" cy="55" rx="14" ry="32" transform="rotate(35 75 55)" fill="#8da885" opacity="0.9" />
                <ellipse cx="140" cy="50" rx="12" ry="28" transform="rotate(70 140 50)" fill="#7fa66b" opacity="0.85" />
                <ellipse cx="205" cy="35" rx="10" ry="24" transform="rotate(85 205 35)" fill="#9bbd93" opacity="0.9" />
                <ellipse cx="50" cy="110" rx="12" ry="28" transform="rotate(15 50 110)" fill="#8da885" opacity="0.85" />
                <ellipse cx="45" cy="175" rx="11" ry="26" transform="rotate(-10 45 175)" fill="#7fa66b" opacity="0.9" />
                <ellipse cx="30" cy="230" rx="9" ry="22" transform="rotate(-30 30 230)" fill="#9bbd93" opacity="0.85" />

                {/* Golden berry clusters */}
                <circle cx="95" cy="40" r="4.5" fill="#f5c26b" />
                <circle cx="108" cy="45" r="3.5" fill="#f8d68d" />
                <circle cx="102" cy="52" r="4" fill="#e5aa42" />

                <circle cx="45" cy="135" r="4" fill="#f5c26b" />
                <circle cx="52" cy="145" r="3.5" fill="#f8d68d" />

                {/* Secondary Sakura Blossoms */}
                <g transform="translate(160, 45) scale(0.65)">
                    <path d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <path transform="rotate(72 50 50)" d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <path transform="rotate(144 50 50)" d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <path transform="rotate(216 50 50)" d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <path transform="rotate(288 50 50)" d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <circle cx="50" cy="50" r="5" fill="#e0578f" />
                </g>

                <g transform="translate(45, 185) scale(0.6)">
                    <path d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <path transform="rotate(72 50 50)" d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <path transform="rotate(144 50 50)" d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <path transform="rotate(216 50 50)" d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <path transform="rotate(288 50 50)" d="M50 50 C42 32 38 18 46 10 C50 6 54 10 62 18 58 32 50 50 Z" fill="#ffd5e3" />
                    <circle cx="50" cy="50" r="5" fill="#e0578f" />
                </g>

                {/* Grand Corner Rose / Peony Centerpiece */}
                <g transform="translate(18, 18) scale(1.15)">
                    {/* Outer petals */}
                    <path
                        d="M50 16 C34 16 18 30 20 48 C14 55 14 72 26 82 C38 90 64 90 74 82 C86 72 86 55 80 48 C82 30 66 16 50 16Z"
                        fill="#fcd6e3"
                    />
                    <path
                        d="M32 42 C32 30 42 22 52 22 C62 22 72 30 72 42 C74 56 64 70 52 70 C40 70 30 56 32 42Z"
                        fill="#f49ab9"
                    />
                    <path
                        d="M40 45 C40 36 46 30 52 30 C58 30 64 36 64 45 C64 54 58 60 52 60 C46 60 40 54 40 45Z"
                        fill="#ad1457"
                    />
                    <path
                        d="M48 42 C48 39 54 38 56 41 C58 44 53 48 51 46 C49 44 50 42 52 42"
                        stroke="#fff"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                    />
                </g>

                {/* Delicate Sparkles */}
                <g transform="translate(110, 95)">
                    <path d="M0 -6 L1 -1 L6 0 L1 1 L0 6 L-1 1 L-6 0 L-1 -1 Z" fill="#f5c26b" />
                </g>
                <g transform="translate(70, 140) scale(0.8)">
                    <path d="M0 -6 L1 -1 L6 0 L1 1 L0 6 L-1 1 L-6 0 L-1 -1 Z" fill="#e0578f" />
                </g>
            </svg>
        </div>
    );
}

// Elegant Botanical Halo / Wreath
export function FloralWreath({ size = 260, children, className = "" }) {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 pointer-events-none select-none drop-shadow-[0_2px_10px_rgba(224,87,143,0.18)]"
            >
                {/* Gentle circle branch */}
                <circle
                    cx="120"
                    cy="120"
                    r="98"
                    stroke="#d494a8"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    opacity="0.65"
                />
                <circle
                    cx="120"
                    cy="120"
                    r="92"
                    stroke="#ad1457"
                    strokeWidth="0.8"
                    opacity="0.3"
                />

                {/* Symmetrical leaves around perimeter */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 120 + 96 * Math.cos(rad);
                    const y = 120 + 96 * Math.sin(rad);
                    return (
                        <g key={i} transform={`translate(${x}, ${y}) rotate(${deg + 45})`}>
                            <ellipse cx="0" cy="0" rx="4.5" ry="9" fill={i % 2 === 0 ? "#7fa66b" : "#f4a9c4"} opacity="0.8" />
                            <circle cx="2" cy="7" r="1.5" fill="#f5c26b" />
                        </g>
                    );
                })}

                {/* Top crest flower */}
                <g transform="translate(120, 24) scale(0.65)">
                    <circle cx="0" cy="0" r="10" fill="#f7b7cb" />
                    <circle cx="0" cy="0" r="5" fill="#ad1457" />
                </g>

                {/* Bottom crest rose */}
                <g transform="translate(120, 216) scale(0.7)">
                    <circle cx="0" cy="0" r="12" fill="#fcd6e3" />
                    <circle cx="0" cy="0" r="7" fill="#ad1457" />
                    <circle cx="0" cy="0" r="2.5" fill="#fff" />
                </g>
            </svg>

            {/* Inner Content enclosed by the wreath */}
            <div className="relative z-10 flex flex-col items-center justify-center p-6">
                {children}
            </div>
        </div>
    );
}

// Ornate Horizontal Botanical Divider
export function FloralDivider({ className = "", text = "✿ ♡ ✿" }) {
    return (
        <div className={`relative flex items-center justify-center gap-6 py-4 ${className}`}>
            {/* Left vine */}
            <svg
                width="220"
                height="32"
                viewBox="0 0 140 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
            >
                <path
                    d="M136 12 C95 12 60 18 5 12"
                    stroke="#c2185b"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
                <ellipse cx="105" cy="8" rx="4" ry="8" transform="rotate(25 105 8)" fill="#7fa66b" />
                <ellipse cx="65" cy="16" rx="3.5" ry="7" transform="rotate(-30 65 16)" fill="#8da885" />
                <circle cx="35" cy="9" r="3" fill="#f5c26b" />
                <circle cx="5" cy="12" r="3.5" fill="#e0578f" />
            </svg>

            {/* Center accent */}
            <span className="font-serif text-base sm:text-lg md:text-xl italic tracking-[0.4em] text-[#ad1457]">
                {text}
            </span>

            {/* Right vine (mirrored) */}
            <svg
                width="220"
                height="32"
                viewBox="0 0 140 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-x-[-1] opacity-80"
            >
                <path
                    d="M136 12 C95 12 60 18 5 12"
                    stroke="#c2185b"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
                <ellipse cx="105" cy="8" rx="4" ry="8" transform="rotate(25 105 8)" fill="#7fa66b" />
                <ellipse cx="65" cy="16" rx="3.5" ry="7" transform="rotate(-30 65 16)" fill="#8da885" />
                <circle cx="35" cy="9" r="3" fill="#f5c26b" />
                <circle cx="5" cy="12" r="3.5" fill="#e0578f" />
            </svg>
        </div>
    );
}

// Drifting interactive ambient petals
export function PetalDrift({ count = 15 }) {
    const petals = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 100) / count + (i % 3) * 2}%`,
        delay: `${(i * 0.7) % 6}s`,
        duration: `${7 + (i % 5) * 2}s`,
        scale: 0.6 + (i % 4) * 0.15,
        color: i % 3 === 0 ? "#f6b8cd" : i % 3 === 1 ? "#ffd5e3" : "#fbd3e0",
    }));

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {petals.map((p) => (
                <div
                    key={p.id}
                    className="absolute -top-10 animate-float-petal opacity-70"
                    style={{
                        left: p.left,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                        transform: `scale(${p.scale})`,
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                        <path
                            d="M20 2 C28 10 36 20 28 32 C20 40 10 32 6 22 C2 12 12 4 20 2 Z"
                            fill={p.color}
                            opacity="0.8"
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
}

// Compact Flower Cluster for buttons and badge corners
export function FlowerCluster({ className = "" }) {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <RoseSvg size={38} className="relative z-10" />
            <SakuraSvg size={26} className="absolute -right-3 -top-2" color="#ffd0df" />
            <div className="absolute -bottom-1 -left-2 h-4 w-7 -rotate-45 rounded-full bg-[#8da885] opacity-75" />
        </div>
    );
}

/**
 * Main FlowerDecoration Component
 * Renders rich botanical corner bouquets and delicate floral dividers.
 */
function FlowerDecoration({ showCorners = true, showDivider = false, dividerText = "✿ ♡ ✿", className = "" }) {
    return (
        <div className={`pointer-events-none relative w-full ${className}`}>
            {showCorners && (
                <>
                    <FloralCorner position="top-left" />
                    <FloralCorner position="top-right" />
                    <FloralCorner position="bottom-left" />
                    <FloralCorner position="bottom-right" />
                </>
            )}

            {showDivider && <FloralDivider text={dividerText} />}
        </div>
    );
}

export default FlowerDecoration;
