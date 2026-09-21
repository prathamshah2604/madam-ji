import PageTransition from "../components/Common/PageTransition";
import FloralBorder from "../components/Common/FloralBorder";
import FloatingPetals from "../components/Common/FloatingPetals";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";

/**
 * LandingPage
 * The grand entrance to Madam Ji's celebration scrapbook & birthday wishes.
 */
function LandingPage() {
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

                {/* Floating romantic top navigation */}
                <Navbar />

                {/* Centerpiece Hero section with countdown and polaroids */}
                <Hero />
            </main>
        </PageTransition>
    );
}

export default LandingPage;
