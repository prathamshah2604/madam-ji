import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Floating petal shapes that drift continuously downward.
 * Subtle, non-distracting ambient animation.
 */

const PETAL_COUNT = 7;

const PETALS = Array.from({ length: PETAL_COUNT }, (_, i) => ({
    id: i,
    left: `${10 + i * 13}%`,
    delay: i * 0.8,
    duration: 7 + (i % 3) * 2.5,
    size: 10 + (i % 3) * 4,
    color: i % 2 === 0 ? "#f4a9c4" : "#e88fa8",
    startY: -30 - i * 15,
}));

function Petal({ left, delay, duration, size, color, startY }) {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const xDrift = gsap.utils.random(-30, 30);

        gsap.fromTo(
            ref.current,
            {
                y: startY,
                x: 0,
                rotation: gsap.utils.random(0, 180),
                opacity: 0,
            },
            {
                y: "105vh",
                x: xDrift,
                rotation: `+=${gsap.utils.random(120, 240)}`,
                opacity: 0.55,
                duration,
                delay,
                ease: "none",
                repeat: -1,
                repeatDelay: gsap.utils.random(1, 3),
                onRepeat() {
                    gsap.set(ref.current, { x: 0, opacity: 0 });
                },
            }
        );

        return () => {
            gsap.killTweensOf(ref.current);
        };
    }, [delay, duration, startY]);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            style={{
                position: "absolute",
                left,
                top: 0,
                width: size,
                height: size * 1.5,
                borderRadius: "50% 50% 50% 0",
                background: color,
                opacity: 0,
                pointerEvents: "none",
                willChange: "transform, opacity",
            }}
        />
    );
}

function FloatingPetals() {
    return (
        <div
            aria-hidden="true"
            style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 1,
            }}
        >
            {PETALS.map((p) => (
                <Petal key={p.id} {...p} />
            ))}
        </div>
    );
}

export default FloatingPetals;
