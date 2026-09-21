import React, { useState, useRef, useEffect } from "react";
import Candle from "./Candle";
import { playSliceSound, playChimeSound } from "../../utils/birthdayMusic";

/**
 * Cake.jsx
 * Artisan Gourmet Dark Chocolate Ganache Cake with 24K Edible Gold Leaf,
 * Glossy Chocolate Truffles, Curls, and Fresh Berries (Raspberries & Blueberries).
 *
 * Faithfully matches the user's reference:
 * - Uncut: Cylindrical dark chocolate fudge frosting with organic textured spatula waves,
 *   organic 24K gold foil flakes, chocolate shavings, glossy spheres, berries,
 *   and elegant gold lettering: "HAPPY BIRTHDAY MADAM JI ♡".
 * - Cut: Reveals the interior 4-layer moist dark chocolate sponge cake separated by
 *   luscious fudge filling, with the delicious cut slice sliding out on a dessert saucer.
 */
function Cake({
    isLit = true,
    isSliced = false,
    onBlowCandles,
    onSliceComplete,
    candleRefs = [],
    smokeRefs = [],
    cakeRef,
}) {
    const [isCutting, setIsCutting] = useState(false);
    const [sliceStart, setSliceStart] = useState(null);
    const [sliceCurrent, setSliceCurrent] = useState(null);
    const cakeContainerRef = useRef(null);

    // Candle states (5 candles)
    const [litCandles, setLitCandles] = useState([true, true, true, true, true]);

    useEffect(() => {
        if (!isLit) {
            setLitCandles([false, false, false, false, false]);
        }
    }, [isLit]);

    const handleSingleCandleBlow = (index) => {
        if (!litCandles[index]) return;
        playChimeSound();
        const updated = [...litCandles];
        updated[index] = false;
        setLitCandles(updated);

        // If all candles are blown out
        if (updated.every((c) => !c)) {
            if (onBlowCandles) onBlowCandles();
        }
    };

    // Pointer-based cake cutting (Mouse drag + Touch swipe)
    const handlePointerDown = (e) => {
        if (isSliced) return;
        const rect = cakeContainerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setIsCutting(true);
        setSliceStart({ x, y });
        setSliceCurrent({ x, y });
    };

    const handlePointerMove = (e) => {
        if (!isCutting || isSliced) return;
        const rect = cakeContainerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setSliceCurrent({ x, y });
    };

    const handlePointerUp = () => {
        if (!isCutting || isSliced) return;
        setIsCutting(false);

        if (sliceStart && sliceCurrent) {
            const dy = Math.abs(sliceCurrent.y - sliceStart.y);
            const dx = Math.abs(sliceCurrent.x - sliceStart.x);
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If user swiped or dragged across cake
            if (distance > 45) {
                executeCut();
            }
        }
        setSliceStart(null);
        setSliceCurrent(null);
    };

    const executeCut = () => {
        if (isSliced) return;
        playSliceSound();
        if (onSliceComplete) {
            onSliceComplete();
        }
    };

    return (
        <div
            ref={cakeContainerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={() => {
                if (isCutting) {
                    setIsCutting(false);
                    setSliceStart(null);
                    setSliceCurrent(null);
                }
            }}
            className="relative w-full flex flex-col items-center justify-center select-none touch-none"
            style={{ touchAction: "none" }}
        >
            {/* ── Interactive Cutting Guide (Grand Prominent Indicator) ── */}
            {!isLit && !isSliced && (
                <div className="absolute -top-24 sm:-top-28 md:-top-32 z-30 flex items-center gap-6 rounded-full border-4 border-[#d4af37] bg-[#22100c]/98 px-14 py-5 sm:px-20 sm:py-6 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-md animate-bounce">
                    <span className="text-5xl sm:text-6xl">🔪</span>
                    <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#ffd700] tracking-wide drop-shadow-[0_2px_10px_rgba(255,215,0,0.6)]">
                        Drag knife across or tap button below to cut!
                    </span>
                </div>
            )}

            {/* ── Visual Knife Cursor (Large Royal Pastry Knife) ── */}
            {isCutting && sliceCurrent && (
                <div
                    className="pointer-events-none absolute z-40 transition-transform duration-75"
                    style={{
                        left: `${sliceCurrent.x}px`,
                        top: `${sliceCurrent.y}px`,
                        transform: "translate(-20%, -85%) rotate(-30deg)",
                    }}
                >
                    <svg width="160" height="160" viewBox="0 0 100 100" fill="none">
                        {/* Blade */}
                        <path
                            d="M20 90 L50 15 Q54 5 66 16 L42 92 Z"
                            fill="url(#knife-steel)"
                            stroke="#e5c158"
                            strokeWidth="2"
                        />
                        {/* Golden Rose Ribbon on Handle */}
                        <circle cx="28" cy="85" r="10" fill="#d4af37" />
                        <circle cx="28" cy="85" r="6" fill="#e0578f" />
                        <path d="M22 88 Q12 98 16 105" stroke="#e0578f" strokeWidth="4" />
                        <path d="M34 88 Q44 98 40 105" stroke="#e0578f" strokeWidth="4" />
                        <defs>
                            <linearGradient id="knife-steel" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="50%" stopColor="#f1f5f9" />
                                <stop offset="100%" stopColor="#94a3b8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            )}

            {/* ── Slice Cut Trajectory Line ── */}
            {isCutting && sliceStart && sliceCurrent && (
                <svg className="pointer-events-none absolute inset-0 z-35 h-full w-full">
                    <line
                        x1={sliceStart.x}
                        y1={sliceStart.y}
                        x2={sliceCurrent.x}
                        y2={sliceCurrent.y}
                        stroke="#ffd700"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="10 5"
                        className="drop-shadow-[0_0_16px_rgba(255,215,0,1)]"
                    />
                </svg>
            )}

            {/* ── Main Cake Canvas / SVG (Full Horizontal Edge-to-Edge Scale) ── */}
            <div className="relative flex justify-center items-center w-full px-0 sm:px-2">
                <svg
                    ref={cakeRef}
                    viewBox="0 0 540 460"
                    style={{
                        width: "100%",
                        maxWidth: "min(98vw, 2200px)",
                        height: "auto",
                    }}
                    className="drop-shadow-[0_60px_140px_rgba(30,10,5,0.65)]"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Artisan Gourmet Chocolate Birthday Cake"
                    role="img"
                >
                    <defs>
                        {/* Chocolate Ganache Gradients */}
                        <radialGradient id="choc-top-glaze" cx="50%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="#4a2218" />
                            <stop offset="45%" stopColor="#32160f" />
                            <stop offset="85%" stopColor="#220e09" />
                            <stop offset="100%" stopColor="#150805" />
                        </radialGradient>

                        <linearGradient id="choc-side-body" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#1c0a06" />
                            <stop offset="25%" stopColor="#3d1b13" />
                            <stop offset="60%" stopColor="#2b120c" />
                            <stop offset="100%" stopColor="#160805" />
                        </linearGradient>

                        {/* Marble/Slate Cake Board */}
                        <linearGradient id="slate-board" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#2d3748" />
                            <stop offset="50%" stopColor="#1a202c" />
                            <stop offset="100%" stopColor="#0f172a" />
                        </linearGradient>

                        {/* 24K Edible Gold Leaf Gradients */}
                        <linearGradient id="gold-leaf-grad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#fff2a3" />
                            <stop offset="35%" stopColor="#ffd700" />
                            <stop offset="70%" stopColor="#d4af37" />
                            <stop offset="100%" stopColor="#aa820a" />
                        </linearGradient>

                        {/* Chocolate Truffle Sphere Gradient */}
                        <radialGradient id="truffle-gloss" cx="35%" cy="30%" r="65%">
                            <stop offset="0%" stopColor="#7a3d2c" />
                            <stop offset="35%" stopColor="#3a1a12" />
                            <stop offset="80%" stopColor="#1e0c08" />
                            <stop offset="100%" stopColor="#0a0302" />
                        </radialGradient>

                        {/* Cut Interior: Sponge & Fudge Cream */}
                        <linearGradient id="sponge-layer" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3c1c14" />
                            <stop offset="50%" stopColor="#2d140e" />
                            <stop offset="100%" stopColor="#220e0a" />
                        </linearGradient>

                        <linearGradient id="fudge-filling" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#56281c" />
                            <stop offset="50%" stopColor="#431e15" />
                            <stop offset="100%" stopColor="#31140d" />
                        </linearGradient>

                        {/* Raspberry drupelet glow */}
                        <radialGradient id="berry-red" cx="35%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#fb7185" />
                            <stop offset="45%" stopColor="#e11d48" />
                            <stop offset="100%" stopColor="#881337" />
                        </radialGradient>

                        {/* Blueberry indigo glow */}
                        <radialGradient id="blueberry-blue" cx="35%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#a5b4fc" />
                            <stop offset="40%" stopColor="#4f46e5" />
                            <stop offset="85%" stopColor="#312e81" />
                            <stop offset="100%" stopColor="#1e1b4b" />
                        </radialGradient>
                    </defs>

                    {/* ── 1. DARK SLATE / MARBLE CAKE PLATTER ── */}
                    {/* Shadow underneath board */}
                    <ellipse cx="260" cy="425" rx="230" ry="24" fill="#120402" opacity="0.4" />
                    {/* Platter body */}
                    <ellipse cx="260" cy="415" rx="240" ry="26" fill="url(#slate-board)" stroke="#d4af37" strokeWidth="2.5" />
                    <ellipse cx="260" cy="412" rx="232" ry="23" fill="#1e293b" opacity="0.6" />

                    {/* ── 2. CYLINDRICAL CAKE BASE (SIDE WALL) ── */}
                    <g id="cake-cylinder">
                        {/* Curved outer side body */}
                        <path
                            d="M60 215 L60 380 Q260 440 460 380 L460 215 Z"
                            fill="url(#choc-side-body)"
                        />

                        {/* Textured Spatula Waves / Artisan Ganache Texture */}
                        <path
                            d="M60 240 Q130 225 200 245 T340 238 T460 242"
                            stroke="#54261b"
                            strokeWidth="18"
                            fill="none"
                            opacity="0.35"
                            strokeLinecap="round"
                        />
                        <path
                            d="M60 285 Q160 310 260 280 T460 295"
                            stroke="#482016"
                            strokeWidth="24"
                            fill="none"
                            opacity="0.4"
                            strokeLinecap="round"
                        />
                        <path
                            d="M65 330 Q170 315 270 345 T455 335"
                            stroke="#5a291d"
                            strokeWidth="22"
                            fill="none"
                            opacity="0.3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M80 365 Q260 415 440 365"
                            stroke="#1a0a06"
                            strokeWidth="14"
                            fill="none"
                            opacity="0.7"
                        />

                        {/* ── 24K Edible Gold Leaf Flakes on Side Walls (Matching Reference) ── */}
                        {/* Upper left gold flake */}
                        <polygon points="105,245 125,238 135,255 120,268 110,258" fill="url(#gold-leaf-grad)" />
                        <circle cx="120" cy="250" r="2" fill="#ffffff" opacity="0.9" />

                        {/* Mid center gold flake */}
                        <polygon points="230,270 250,260 265,280 245,295 235,285" fill="url(#gold-leaf-grad)" />
                        <circle cx="248" cy="275" r="2.5" fill="#ffffff" opacity="0.9" />

                        {/* Lower left gold foil */}
                        <polygon points="90,340 115,335 125,360 100,370" fill="url(#gold-leaf-grad)" />

                        {/* Lower mid gold flake */}
                        <polygon points="280,335 305,325 315,348 295,355" fill="url(#gold-leaf-grad)" />

                        {/* Right side gold flakes */}
                        <polygon points="400,240 420,232 430,255 415,262" fill="url(#gold-leaf-grad)" />
                        <polygon points="380,310 405,302 415,325 395,332" fill="url(#gold-leaf-grad)" />

                        {/* Chocolate shaving crisps on bottom edges */}
                        <path d="M55 378 Q75 365 65 390" stroke="#351811" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <path d="M72 388 Q90 375 80 400" stroke="#482017" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <path d="M440 382 Q460 370 455 395" stroke="#351811" strokeWidth="4" fill="none" strokeLinecap="round" />
                    </g>

                    {/* ── 3. TOP GLOSSY CIRCULAR FACE (Uncut state) ── */}
                    {!isSliced ? (
                        <g id="cake-top-uncut">
                            {/* Top Ellipse Glaze */}
                            <ellipse
                                cx="260"
                                cy="215"
                                rx="200"
                                ry="58"
                                fill="url(#choc-top-glaze)"
                                stroke="#52251a"
                                strokeWidth="2"
                            />

                            {/* Glossy sheen reflection on glaze */}
                            <ellipse
                                cx="255"
                                cy="205"
                                rx="170"
                                ry="42"
                                fill="#7a3a2a"
                                opacity="0.15"
                            />

                            {/* Gold Flecks on Top Face */}
                            <polygon points="180,185 192,180 196,192 185,195" fill="url(#gold-leaf-grad)" />
                            <polygon points="325,188 340,182 345,195 330,198" fill="url(#gold-leaf-grad)" />
                            <polygon points="260,172 272,168 275,178 262,180" fill="url(#gold-leaf-grad)" />

                            {/* ── GOLD LETTERING: "HAPPY BIRTHDAY MADAM JI ♡" ── */}
                            {/* Upper arc line */}
                            <text
                                x="260"
                                y="215"
                                textAnchor="middle"
                                fontFamily="Playfair Display, Georgia, serif"
                                fontSize="15"
                                fontWeight="bold"
                                letterSpacing="4"
                                fill="#ffd700"
                                className="drop-shadow-[0_2px_8px_rgba(255,215,0,0.6)]"
                            >
                                HAPPY BIRTHDAY
                            </text>
                            {/* Lower title */}
                            <text
                                x="260"
                                y="235"
                                textAnchor="middle"
                                fontFamily="Playfair Display, Georgia, serif"
                                fontSize="14"
                                fontWeight="bold"
                                letterSpacing="3"
                                fontStyle="italic"
                                fill="#ffd700"
                                className="drop-shadow-[0_2px_8px_rgba(255,215,0,0.6)]"
                            >
                                MADAM JI ♡
                            </text>
                        </g>
                    ) : (
                        /* ── 3B. CUT CAKE STATE (Revealing 4 layers of sponge & fudge cream!) ── */
                        <g id="cake-cut-opening">
                            {/* Left remaining top face */}
                            <path
                                d="M60 215 C60 170 200 157 260 215 L260 380 Q160 410 60 380 Z"
                                fill="url(#choc-top-glaze)"
                            />

                            {/* Interior Cut-Out Face (Left wall of cut, facing viewer) */}
                            <g id="cut-interior-left">
                                <path
                                    d="M260 215 L260 405 L370 345 L370 195 Z"
                                    fill="#1e0c08"
                                />

                                {/* 4 Dark Chocolate Sponge Layers */}
                                {/* Layer 1 (Top) */}
                                <path d="M260 220 L370 200 L370 230 L260 255 Z" fill="url(#sponge-layer)" />
                                {/* Layer 2 */}
                                <path d="M260 270 L370 245 L370 275 L260 305 Z" fill="url(#sponge-layer)" />
                                {/* Layer 3 */}
                                <path d="M260 320 L370 290 L370 320 L260 355 Z" fill="url(#sponge-layer)" />
                                {/* Layer 4 (Bottom) */}
                                <path d="M260 370 L370 332 L370 345 L260 400 Z" fill="url(#sponge-layer)" />

                                {/* 3 Creamy Fudge Ganache Filling Layers (Between Sponges) */}
                                <path d="M260 255 L370 230 L370 245 L260 270 Z" fill="url(#fudge-filling)" />
                                <path d="M260 305 L370 275 L370 290 L260 320 Z" fill="url(#fudge-filling)" />
                                <path d="M260 355 L370 320 L370 332 L260 370 Z" fill="url(#fudge-filling)" />

                                {/* Moist cake crumb texture points */}
                                {[280, 310, 340].map((x, i) => (
                                    <React.Fragment key={i}>
                                        <circle cx={x} cy={225 + i * 5} r="1.5" fill="#140604" />
                                        <circle cx={x + 10} cy={280 + i * 5} r="1.8" fill="#140604" />
                                        <circle cx={x - 5} cy={335 + i * 5} r="1.5" fill="#140604" />
                                    </React.Fragment>
                                ))}
                            </g>

                            {/* Remaining right top face */}
                            <path
                                d="M370 195 C410 195 460 205 460 215 L460 380 Q415 410 370 345 Z"
                                fill="url(#choc-top-glaze)"
                            />

                            {/* Gold text still visible on left half */}
                            <text
                                x="175"
                                y="215"
                                textAnchor="middle"
                                fontFamily="Playfair Display, Georgia, serif"
                                fontSize="12"
                                fontWeight="bold"
                                letterSpacing="2"
                                fill="#ffd700"
                                opacity="0.9"
                            >
                                HAPPY BIRTHDAY
                            </text>
                            <text
                                x="175"
                                y="232"
                                textAnchor="middle"
                                fontFamily="Playfair Display, Georgia, serif"
                                fontSize="11"
                                fontWeight="bold"
                                letterSpacing="2"
                                fontStyle="italic"
                                fill="#ffd700"
                                opacity="0.9"
                            >
                                HARSHITA 💖
                            </text>
                        </g>
                    )}

                    {/* ── 4. ARTISANAL TOPPINGS (Truffles, Curls, Berries, Chips) ── */}
                    {/* A. Chocolate Truffles / Spheres on top left (Matching Image 1 & 2) */}
                    <g id="truffle-spheres">
                        {/* Truffle 1 (Back left) */}
                        <circle cx="145" cy="175" r="22" fill="url(#truffle-gloss)" />
                        <ellipse cx="138" cy="168" rx="6" ry="4" fill="#ffffff" opacity="0.75" transform="rotate(-30 138 168)" />
                        <ellipse cx="134" cy="176" rx="3" ry="2" fill="#ffffff" opacity="0.4" />

                        {/* Truffle 2 (Front left) */}
                        <circle cx="178" cy="182" r="26" fill="url(#truffle-gloss)" />
                        <ellipse cx="170" cy="172" rx="7" ry="5" fill="#ffffff" opacity="0.8" transform="rotate(-30 170 172)" />
                        <ellipse cx="164" cy="182" rx="3.5" ry="2.5" fill="#ffffff" opacity="0.45" />

                        {/* Truffle 3 (Smaller back sphere) */}
                        <circle cx="130" cy="195" r="16" fill="url(#truffle-gloss)" />
                        <ellipse cx="125" cy="190" rx="4" ry="3" fill="#ffffff" opacity="0.65" transform="rotate(-30 125 190)" />
                    </g>

                    {/* B. Chocolate Ribbon Curls & Shavings */}
                    <g id="chocolate-curls">
                        <path
                            d="M110 185 Q140 145 180 160 T220 170"
                            stroke="#5a291e"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M125 190 Q155 155 195 168"
                            stroke="#361710"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                        />
                        <path
                            d="M85 205 Q125 175 160 195"
                            stroke="#4c2217"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                        />
                        {/* Fine curled shavings */}
                        <path d="M190 192 Q205 180 215 194" stroke="#683023" strokeWidth="3" fill="none" />
                        <path d="M210 188 Q222 178 230 190" stroke="#683023" strokeWidth="3" fill="none" />
                        <path d="M165 205 Q178 195 185 208" stroke="#361710" strokeWidth="3.5" fill="none" />
                    </g>

                    {/* C. Fresh Berries (Raspberries & Blueberries on top right) */}
                    <g id="berry-cluster" transform="translate(320, 155)">
                        {/* Large Plump Raspberry 1 */}
                        <g transform="translate(45, 18)">
                            <ellipse cx="0" cy="0" rx="14" ry="16" fill="#881337" />
                            {/* Drupelet pearls */}
                            {[-6, 0, 6].map((dx, i) => (
                                <React.Fragment key={i}>
                                    <circle cx={dx} cy="-8" r="4.5" fill="url(#berry-red)" />
                                    <circle cx={dx - 3} cy="0" r="5" fill="url(#berry-red)" />
                                    <circle cx={dx + 3} cy="0" r="5" fill="url(#berry-red)" />
                                    <circle cx={dx} cy="8" r="4.5" fill="url(#berry-red)" />
                                </React.Fragment>
                            ))}
                            <circle cx="0" cy="-2" r="2" fill="#ffffff" opacity="0.6" />
                        </g>

                        {/* Plump Raspberry 2 */}
                        <g transform="translate(20, 28) scale(0.85)">
                            <ellipse cx="0" cy="0" rx="14" ry="16" fill="#881337" />
                            {[-6, 0, 6].map((dx, i) => (
                                <React.Fragment key={i}>
                                    <circle cx={dx} cy="-8" r="4.5" fill="url(#berry-red)" />
                                    <circle cx={dx} cy="0" r="5" fill="url(#berry-red)" />
                                    <circle cx={dx} cy="8" r="4.5" fill="url(#berry-red)" />
                                </React.Fragment>
                            ))}
                            <circle cx="0" cy="-2" r="2" fill="#ffffff" opacity="0.6" />
                        </g>

                        {/* Fresh Blueberries with star crowns */}
                        <circle cx="72" cy="16" r="10" fill="url(#blueberry-blue)" />
                        <ellipse cx="70" cy="13" rx="3" ry="2" fill="#ffffff" opacity="0.6" />
                        {/* Star crown */}
                        <circle cx="75" cy="18" r="3" fill="#1e1b4b" />

                        <circle cx="35" cy="4" r="9" fill="url(#blueberry-blue)" />
                        <ellipse cx="33" cy="2" rx="2.5" ry="1.8" fill="#ffffff" opacity="0.6" />

                        <circle cx="60" cy="36" r="8.5" fill="url(#blueberry-blue)" />
                        <ellipse cx="58" cy="34" rx="2.5" ry="1.5" fill="#ffffff" opacity="0.55" />

                        {/* Chocolate Drops & Shavings next to berries */}
                        <polygon points="85,30 92,20 98,30" fill="#2b110a" />
                        <polygon points="12,18 18,8 24,18" fill="#2b110a" />
                        <polygon points="45,42 50,34 56,42" fill="#2b110a" />

                        {/* Gold flake on berry cluster */}
                        <polygon points="28,2 35,-3 38,5 31,8" fill="url(#gold-leaf-grad)" />
                    </g>

                    {/* ── 5. CANDLES (Tall, slender ivory & rose-gold candles) ── */}
                    {/* Placed across the upper curve so they sit naturally on top */}
                    {[185, 220, 260, 300, 335].map((x, i) => {
                        const y = 168 + Math.abs(x - 260) * 0.12;
                        return (
                            <g
                                key={i}
                                transform={`translate(${x} ${y})`}
                                onClick={() => handleSingleCandleBlow(i)}
                                className="cursor-pointer"
                            >
                                <Candle
                                    color={i % 2 === 0 ? "#fff1f2" : "#fbcfe8"}
                                    isLit={litCandles[i]}
                                    flameRef={candleRefs[i]}
                                    smokeRef={smokeRefs[i]}
                                />
                            </g>
                        );
                    })}

                    {/* ── 6. SEPARATED CAKE SLICE (Slides out upon cutting!) ── */}
                    {isSliced && (
                        <g className="slice-anim">
                            {/* Gold dessert plate */}
                            <ellipse
                                cx="445"
                                cy="375"
                                rx="85"
                                ry="20"
                                fill="url(#slate-board)"
                                stroke="#ffd700"
                                strokeWidth="2.5"
                                className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                            />

                            {/* 3D Wedge Cake Slice */}
                            {/* Slice Left Interior Face (4 layers chocolate sponge + 3 fudge) */}
                            <path
                                d="M385 355 L445 270 L480 345 L420 380 Z"
                                fill="#1c0a06"
                            />

                            {/* Sponge & Fudge layers on the wedge */}
                            <path d="M390 350 L445 275 L455 288 L400 360 Z" fill="url(#sponge-layer)" />
                            <path d="M400 360 L455 288 L462 298 L408 366 Z" fill="url(#fudge-filling)" />
                            <path d="M408 366 L462 298 L470 312 L414 372 Z" fill="url(#sponge-layer)" />
                            <path d="M414 372 L470 312 L475 322 L418 376 Z" fill="url(#fudge-filling)" />
                            <path d="M418 376 L475 322 L480 338 L420 380 Z" fill="url(#sponge-layer)" />

                            {/* Top chocolate glaze on slice */}
                            <path
                                d="M445 270 L470 255 L500 325 L480 345 Z"
                                fill="url(#choc-top-glaze)"
                                stroke="#421910"
                                strokeWidth="1"
                            />

                            {/* Outer back ganache crust of slice */}
                            <path
                                d="M470 255 L500 325 L500 355 L480 345 Z"
                                fill="#2a120b"
                            />

                            {/* Garnish on cut slice: Fresh Raspberry + Gold Leaf + Chocolate Shaving */}
                            <circle cx="465" cy="260" r="7" fill="url(#berry-red)" />
                            <circle cx="463" cy="258" r="1.5" fill="#ffffff" opacity="0.8" />
                            {/* Gold leaf foil on slice */}
                            <polygon points="450,268 456,262 460,270 452,274" fill="url(#gold-leaf-grad)" />
                            {/* Shaving */}
                            <path d="M455 275 Q470 268 480 280" stroke="#5a291e" strokeWidth="2.5" fill="none" />

                            {/* Delicious crumbs scattered on plate */}
                            <circle cx="410" cy="382" r="2.5" fill="#ffd700" />
                            <circle cx="425" cy="386" r="2" fill="#3d1b13" />
                            <circle cx="465" cy="380" r="3" fill="#3d1b13" />
                            <circle cx="485" cy="370" r="2.5" fill="#ffd700" />
                        </g>
                    )}
                </svg>
            </div>

            {/* ── One-Tap Slicing Accessibility Button (Grand Action Button) ── */}
            {!isLit && !isSliced && (
                <div className="mt-12 flex flex-col items-center gap-5 z-20">
                    <button
                        type="button"
                        onClick={executeCut}
                        className="
                            group
                            relative
                            flex
                            items-center
                            gap-6
                            rounded-full
                            border-4
                            border-[#d4af37]
                            bg-gradient-to-r
                            from-[#2b130c]
                            via-[#451e14]
                            to-[#2b130c]
                            px-16
                            py-7
                            sm:px-28
                            sm:py-9
                            font-serif
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-black
                            text-[#ffd700]
                            shadow-[0_25px_70px_rgba(212,175,55,0.6)]
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_35px_95px_rgba(212,175,55,0.85)]
                            cursor-pointer
                        "
                    >
                        <span className="text-5xl sm:text-6xl transition-transform group-hover:rotate-12">🔪</span>
                        <span>Click or Drag to Cut the Cake!</span>
                        <span className="text-4xl text-[#ffd700]">✨</span>
                    </button>
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-black italic text-[#8a0e44]">
                        (Drag your finger or mouse across the cake, or click the gold button above)
                    </span>
                </div>
            )}
        </div>
    );
}

export default Cake;