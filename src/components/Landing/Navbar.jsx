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
        <header className="relative z-30 w-full px-4 py-4 md:px-10">
            <nav
                className="
                    mx-auto
                    flex
                    max-w-6xl
                    items-center
                    justify-between
                    rounded-full
                    border-2
                    border-[#f0d4de]
                    bg-[#fffcfb]/95
                    px-6
                    py-2.5
                    shadow-[0_8px_30px_rgba(224,87,143,0.12)]
                    backdrop-blur-md
                    sm:px-8
                    sm:py-3
                "
            >
                {/* Brand / Name */}
                <Link
                    to="/"
                    className="group flex items-center gap-2.5 font-serif text-xl font-black italic tracking-wide text-[#8a0e44] sm:text-2xl"
                >
                    <RoseSvg size={30} className="transition-transform duration-300 group-hover:rotate-12" />
                    <span>Madam Ji</span>
                    <span className="text-sm text-[#e0578f]">♡</span>
                </Link>

                {/* Center navigation links */}
                <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                                    rounded-full
                                    px-4
                                    py-1.5
                                    font-serif
                                    text-xs
                                    italic
                                    tracking-wider
                                    transition-all
                                    duration-300
                                    sm:px-5
                                    sm:py-2
                                    sm:text-sm
                                    md:text-base
                                    ${isActive
                                        ? "bg-[#fae5ed] font-black text-[#8a0e44] shadow-sm"
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
                <div className="hidden items-center gap-2 rounded-full border border-[#ebd2dc] bg-[#fffaf8] px-4 py-1.5 font-serif text-xs italic tracking-wider text-[#8a0e44] font-bold sm:flex sm:text-sm shadow-sm">
                    <span className="text-[#e0578f]">✿</span>
                    <span>Sep 23</span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
