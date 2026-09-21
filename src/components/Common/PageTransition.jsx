import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * PageTransition wrapper.
 * Wraps page content with a soft pink fade + scale entrance animation.
 *
 * Usage:
 *   <PageTransition>
 *     <YourPageContent />
 *   </PageTransition>
 */
function PageTransition({ children }) {
    const wrapRef = useRef(null);

    useEffect(() => {
        if (!wrapRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                wrapRef.current,
                { opacity: 0, scale: 0.985 },
                { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
            );
        }, wrapRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapRef} style={{ willChange: "opacity, transform" }}>
            {children}
        </div>
    );
}

export default PageTransition;
