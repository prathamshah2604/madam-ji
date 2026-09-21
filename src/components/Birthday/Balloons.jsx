import React from "react";

/**
 * Balloons.jsx
 * Floating luxury celebration balloons in blush, rose gold, cream, and lilac.
 * Rendered with vector glossy reflections, bottom knots, and swaying ribbons.
 */
function Balloons({ active = true }) {
    if (!active) return null;

    const balloonConfig = [
        // Left Cluster
        { id: 1, left: "4%", top: "18%", color: "#f7b0c9", highlight: "#ffe4ee", size: 90, delay: "0s", duration: "6s", sway: "6px" },
        { id: 2, left: "10%", top: "32%", color: "#f8cf68", highlight: "#fff1ba", size: 76, delay: "1.2s", duration: "7.5s", sway: "-8px" },
        { id: 3, left: "2%", top: "45%", color: "#e397b9", highlight: "#fbd4e6", size: 84, delay: "2.5s", duration: "6.8s", sway: "10px" },
        { id: 4, left: "8%", top: "62%", color: "#d6c1ee", highlight: "#faebff", size: 70, delay: "0.8s", duration: "8s", sway: "-6px" },

        // Right Cluster
        { id: 5, right: "4%", top: "15%", color: "#f8cf68", highlight: "#fff1ba", size: 82, delay: "1.5s", duration: "7.2s", sway: "-7px" },
        { id: 6, right: "9%", top: "30%", color: "#f7a8c3", highlight: "#ffe3ed", size: 92, delay: "0.3s", duration: "6.4s", sway: "8px" },
        { id: 7, right: "2%", top: "48%", color: "#d6c1ee", highlight: "#faebff", size: 74, delay: "2.1s", duration: "8.2s", sway: "-10px" },
        { id: 8, right: "8%", top: "65%", color: "#f695ba", highlight: "#fddbe8", size: 86, delay: "1.0s", duration: "7.0s", sway: "6px" },
    ];

    return (
        <div className="pointer-events-none fixed inset-0 z-1 overflow-hidden" aria-hidden="true">
            {balloonConfig.map((b) => (
                <div
                    key={b.id}
                    className="absolute transition-transform will-change-transform"
                    style={{
                        left: b.left,
                        right: b.right,
                        top: b.top,
                        animation: `balloonFloat ${b.duration} ease-in-out infinite alternate`,
                        animationDelay: b.delay,
                    }}
                >
                    <svg
                        width={b.size}
                        height={b.size * 1.65}
                        viewBox="0 0 100 165"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-[0_12px_24px_rgba(173,20,87,0.18)]"
                    >
                        {/* Balloon body */}
                        <defs>
                            <radialGradient id={`balloon-grad-${b.id}`} cx="35%" cy="30%" r="65%">
                                <stop offset="0%" stopColor={b.highlight} />
                                <stop offset="50%" stopColor={b.color} />
                                <stop offset="100%" stopColor="#9e2055" stopOpacity="0.85" />
                            </radialGradient>
                        </defs>

                        <ellipse
                            cx="50"
                            cy="55"
                            rx="42"
                            ry="48"
                            fill={`url(#balloon-grad-${b.id})`}
                        />

                        {/* Glossy reflection highlight */}
                        <ellipse
                            cx="34"
                            cy="32"
                            rx="11"
                            ry="18"
                            fill="#ffffff"
                            opacity="0.55"
                            transform="rotate(-26 34 32)"
                        />
                        <ellipse
                            cx="27"
                            cy="48"
                            rx="4"
                            ry="6"
                            fill="#ffffff"
                            opacity="0.4"
                            transform="rotate(-26 27 48)"
                        />

                        {/* Balloon knot */}
                        <polygon
                            points="45,103 55,103 52,108 48,108"
                            fill={b.color}
                        />

                        {/* Swaying ribbon string */}
                        <path
                            d="M50 108 Q42 120 54 135 T46 160"
                            stroke="#d98ea6"
                            strokeWidth="1.8"
                            fill="none"
                            strokeLinecap="round"
                            opacity="0.75"
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
}

export default Balloons;
