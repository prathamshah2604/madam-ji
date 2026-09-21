import { Link, useLocation } from "react-router-dom";
import { RoseSvg } from "./FlowerDecoration";

/**
 * Romantic Landing Page Navbar
 * Scaled up with large, high-contrast, crystal-clear typography.
 */
function Navbar() {
    const location = useLocation();

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Memories", path: "/scrapbook" },
        { label: "Make a Wish", path: "/birthday" },
    ];

    return (
        <header className="relative z-30 w-full px-6 py-6 md:px-16">
            <nav
                className="
                    mx-auto
                    flex
                    max-w-[1650px]
                    items-center
                    justify-between
                    rounded-full
                    border-3
                    border-[#f0d4de]
                    bg-[#fffcfb]/95
                    px-8
                    py-4
                    shadow-[0_12px_40px_rgba(224,87,143,0.15)]
                    backdrop-blur-md
                    md:px-12
                    md:py-5
                "
            >
                {/* Brand / Name */}
                <Link
                    to="/"
                    className="group flex items-center gap-3 font-serif text-3xl font-black italic tracking-wide text-[#8a0e44] md:text-4xl"
                >
                    <RoseSvg size={44} className="transition-transform duration-300 group-hover:rotate-12" />
                    <span>Madam Ji</span>
                    <span className="text-lg text-[#e0578f]">♡</span>
                </Link>

                {/* Center navigation links */}
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                                    rounded-full
                                    px-6
                                    py-3
                                    font-serif
                                    text-lg
                                    italic
                                    tracking-wider
                                    transition-all
                                    duration-300
                                    sm:px-8
                                    sm:text-xl
                                    md:text-2xl
                                    ${isActive
                                        ? "bg-[#fae5ed] font-black text-[#8a0e44] shadow-md"
                                        : "font-bold text-[#2e1420] hover:bg-[#fff0f5] hover:text-[#8a0e44]"
                                    }
                                `}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Special Date Pill */}
                <div className="hidden items-center gap-2.5 rounded-full border-2 border-[#ebd2dc] bg-[#fffaf8] px-6 py-2.5 font-serif text-lg italic tracking-wider text-[#8a0e44] font-bold sm:flex md:text-xl shadow-sm">
                    <span className="text-[#e0578f]">✿</span>
                    <span>Sep 23</span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
