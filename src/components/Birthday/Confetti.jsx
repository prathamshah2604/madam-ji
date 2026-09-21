import { useEffect, useRef } from "react";

/**
 * Confetti.jsx
 * High-performance, zero-dependency HTML5 Canvas celebration confetti.
 * Supports multi-color ribbons, golden stars, delicate hearts, and rose petals.
 *
 * Props:
 *  active        - boolean, enables continuous gentle celebration falling confetti
 *  burstTrigger  - number / boolean, increments to trigger a massive confetti cannon burst
 */
function Confetti({ active = false, burstTrigger = 0 }) {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationFrameRef = useRef(null);

    // Color palette: Rose gold, blush, golden yellow, champagne, soft magenta, pastel peach
    const COLORS = [
        "#e0578f", // Rose pink
        "#ad1457", // Deep berry
        "#f4a9c4", // Soft blush
        "#f5c26b", // Golden sparkle
        "#ffdd80", // Champagne gold
        "#c084fc", // Soft lilac
        "#fbd3e0", // Pastel pink
        "#ffffff", // Pure sparkle
    ];

    const createParticle = (x, y, isBurst = false) => {
        const shapeType = Math.random(); // 0-0.4: rectangle, 0.4-0.7: circle/petal, 0.7-1: heart/star
        const angle = isBurst ? Math.random() * Math.PI * 2 : (Math.PI / 2) + (Math.random() * 0.6 - 0.3);
        const speed = isBurst ? 4 + Math.random() * 12 : 1.2 + Math.random() * 2.5;

        return {
            x: x !== undefined ? x : Math.random() * window.innerWidth,
            y: y !== undefined ? y : -20,
            vx: Math.cos(angle) * speed,
            vy: isBurst ? Math.sin(angle) * speed - (3 + Math.random() * 5) : Math.sin(angle) * speed,
            gravity: 0.18 + Math.random() * 0.12,
            drag: isBurst ? 0.96 : 0.99,
            size: 6 + Math.random() * 8,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 8,
            opacity: 1,
            fadeSpeed: isBurst ? 0.006 + Math.random() * 0.008 : 0.002,
            type: shapeType < 0.4 ? "ribbon" : shapeType < 0.7 ? "petal" : "heart",
        };
    };

    const triggerBurst = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const burstCount = 180;

        // Erupt from left and right bottom corners and cake center
        for (let i = 0; i < burstCount; i++) {
            // Center burst
            particlesRef.current.push(createParticle(width * 0.5, height * 0.55, true));
            // Left cannon
            if (i % 2 === 0) {
                particlesRef.current.push(createParticle(width * 0.15, height * 0.8, true));
            }
            // Right cannon
            if (i % 2 === 1) {
                particlesRef.current.push(createParticle(width * 0.85, height * 0.8, true));
            }
        }
    };

    // Trigger burst when prop changes
    useEffect(() => {
        if (burstTrigger) {
            triggerBurst();
        }
    }, [burstTrigger]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        let lastSpawn = Date.now();

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Ambient spawn
            if (active && Date.now() - lastSpawn > 80 && particlesRef.current.length < 140) {
                particlesRef.current.push(createParticle(Math.random() * canvas.width, -10, false));
                lastSpawn = Date.now();
            }

            // Update and draw particles
            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                const p = particlesRef.current[i];

                p.x += p.vx;
                p.y += p.vy;
                p.vy += p.gravity;
                p.vx *= p.drag;
                p.rotation += p.rotationSpeed;
                p.opacity -= p.fadeSpeed;

                if (p.opacity <= 0 || p.y > canvas.height + 40) {
                    particlesRef.current.splice(i, 1);
                    continue;
                }

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;

                if (p.type === "ribbon") {
                    ctx.fillRect(-p.size / 2, -p.size, p.size, p.size * 2);
                } else if (p.type === "petal") {
                    ctx.beginPath();
                    ctx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
                    ctx.fill();
                } else if (p.type === "heart") {
                    // Draw a mini heart
                    const s = p.size * 0.7;
                    ctx.beginPath();
                    ctx.moveTo(0, s * 0.3);
                    ctx.bezierCurveTo(-s * 0.8, -s * 0.5, -s * 1.2, s * 0.4, 0, s * 1.1);
                    ctx.bezierCurveTo(s * 1.2, s * 0.4, s * 0.8, -s * 0.5, 0, s * 0.3);
                    ctx.fill();
                }

                ctx.restore();
            }

            animationFrameRef.current = requestAnimationFrame(render);
        };

        animationFrameRef.current = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-50 h-full w-full"
            aria-hidden="true"
        />
    );
}

export default Confetti;
