import PageTransition from "../components/Common/PageTransition";
import FloralBorder from "../components/Common/FloralBorder";
import FloatingPetals from "../components/Common/FloatingPetals";
import Navbar from "../components/Landing/Navbar";
import Gallery from "../components/Scrapbook/Gallery";

/**
 * ScrapbookPage - Madam Ji's Handcrafted Memory Journal.
 * Featuring grand widescreen spreads, romantic polaroids, high-contrast typography,
 * and delicate botanical animations.
 */
function ScrapbookPage() {
    return (
        <PageTransition>
            <main
                className="
                    relative
                    min-h-screen
                    w-full
                    overflow-x-hidden
                    bg-[#fbe4ea]
                    before:pointer-events-none
                    before:absolute
                    before:inset-0
                    before:z-0
                    before:opacity-40
                    before:bg-[radial-gradient(ellipse_at_50%_25%,rgba(255,255,255,0.75)_0%,transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(229,170,187,0.25)_0%,transparent_45%)]
                "
            >
                {/* Full-width botanical border frame */}
                <FloralBorder />

                {/* Ambient floating petals */}
                <FloatingPetals />

                {/* Floating romantic navigation bar */}
                <Navbar />

                {/* Spacer for floating navbar */}
                <div className="pt-28 sm:pt-36" />

                {/* Main Gallery Showcase */}
                <Gallery />
            </main>
        </PageTransition>
    );
}

export default ScrapbookPage;