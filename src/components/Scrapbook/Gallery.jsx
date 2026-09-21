import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animateFlowers, animatePolaroidDeal } from "../../animations/scrapbookAnimations";

import { memories, memoryVideo } from "../../data/memories";
import { FloralDivider, RoseSvg, SakuraSvg } from "../Landing/FlowerDecoration";

import PolaroidCard from "./PolaroidCard";
import VideoPolaroid from "./VideoPolaroid";
import ExpandedPhotoModal from "./ExpandedPhotoModal";
import ScrapbookPage from "./ScrapbookPage";

// Handcrafted Chapter Spreads Configuration
const ROW_CONFIG = [
    {
        chapter: "CHAPTER I",
        left: {
            eyebrow: "An Exquisite sight",
            title: "Traditonal Flair",
            date: "08.21.26",
            text: "Bright shades, beautiful patterns, and a smile that instantly lights up the entire frame. Some photographs just capture a moment, but this one perfectly captures her undeniable charm.",
            rotation: "-rotate-1",
        },
        photos: [
            { memIdx: 0, rotation: "rotate-2", deg: 2 },
            { memIdx: 1, rotation: "-rotate-2", deg: -2 },
        ],
        right: {
            eyebrow: "Sunlight enhanced her cuteness",
            title: "Golden Hour",
            date: "always",
            text: "Golden Hour Beauty.The genuine smile is everything, and she has the most beautiful one.",
            rotation: "rotate-1",
        },
    },
    {
        chapter: "CHAPTER II",
        left: {
            eyebrow: "WWE REFREE",
            title: "The Days",
            date: "chapter two",
            text: "It is funny how the smallest moments can become the ones we remember the most. Every day with you is a blessing.",
            rotation: "rotate-1",
        },
        photos: [
            { memIdx: 2, rotation: "rotate-2", deg: 2 },
            { memIdx: 3, rotation: "-rotate-2", deg: -2 },
        ],
        right: {
            eyebrow: "Ghibli Art",
            title: "Happiness",
            date: "remember this",
            text: "Somewhere Between the waves and dream,she found her kind of happiness",
            rotation: "-rotate-1",
        },
    },
    {
        chapter: "CHAPTER III",
        left: {
            eyebrow: "Always",
            title: "The Little Things",
            date: "chapter three",
            text: "Sometimes it is not the big occasions that matter most. It is the tiny quiet moments hidden between them.",
            rotation: "-rotate-1",
        },
        photos: [
            { memIdx: 4, rotation: "rotate-2", deg: 2 },
            { memIdx: 5, rotation: "-rotate-2", deg: -2 },
        ],
        right: {
            eyebrow: "forever grateful",
            title: "Thank You",
            date: "from me",
            text: "For every warm smile, every gentle laugh, and every little memory that made all these days so immensely special.",
            rotation: "rotate-1",
        },
    },
    {
        chapter: "CHAPTER IV",
        left: {
            eyebrow: "one more thing",
            title: "To Many More",
            date: "chapter four",
            text: "There are still so many photographs left to take, new places to see, and countless memories waiting to be written.",
            rotation: "rotate-1",
        },
        photos: [
            { memIdx: 6, rotation: "-rotate-3", deg: -3 },
            { memIdx: 7, rotation: "rotate-3", deg: 3 },
        ],
        right: {
            eyebrow: "with love",
            title: "Happy Birthday",
            date: "♡",
            text: "Here is to another year of boundless memories, laughter, joy, and all the beautiful moments still waiting for us.",
            rotation: "-rotate-1",
        },
    },
];

function Gallery() {
    const [selectedMemory, setSelectedMemory] = useState(null);

    // Flower refs for scroll-triggered bloom
    const flowerRefs = useRef([]);

    // Polaroid card refs for dealing animation
    const polaroidRefs = useRef([]);

    useLayoutEffect(() => {
        animateFlowers(flowerRefs.current);

        // Flatten all polaroid refs + their target rotations
        const cards = polaroidRefs.current.filter(Boolean);
        const rots = ROW_CONFIG.flatMap((row) => row.photos.map((p) => p.deg));
        animatePolaroidDeal(cards, rots);
    }, []);

    const openPhoto = (memory) => {
        setSelectedMemory(memory);
    };

    const closePhoto = () => {
        setSelectedMemory(null);
    };

    return (
        <>
            <div className="relative w-full">
                {/* ──────────────────────────────────────────────
                    HERO CINEMATIC SPOTLIGHT / VIDEO
                ────────────────────────────────────────────── */}
                <div className="mb-12 sm:mb-16 flex w-full justify-center">
                    <VideoPolaroid video={memoryVideo.video} />
                </div>

                {/* ──────────────────────────────────────────────
                    CHAPTER SPREADS
                ────────────────────────────────────────────── */}
                <div className="w-full px-3 sm:px-6 pb-20">
                    <div className="flex flex-col gap-16 sm:gap-20 w-full max-w-5xl mx-auto">
                        {ROW_CONFIG.map((row, rowIdx) => {
                            const photo1 = { ...row.photos[0], pIdx: rowIdx * 2 };
                            const photo2 = { ...row.photos[1], pIdx: rowIdx * 2 + 1 };

                            const mem1 = memories[photo1.memIdx] || {};
                            const mem2 = memories[photo2.memIdx] || {};

                            return (
                                <div key={rowIdx} className="w-full flex flex-col items-center">
                                    {/* Chapter Header Divider */}
                                    <div className="mb-8 w-full">
                                        <FloralDivider text={`✦ ${row.chapter} ✦`} />
                                    </div>

                                    {/* 2-Column Handcrafted Spread Rows */}
                                    <div className="flex flex-col gap-8 sm:gap-10 w-full">
                                        {/* Spread Pair 1: Left Journal Note + Polaroid 1 */}
                                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                                            <ScrapbookPage
                                                eyebrow={row.left.eyebrow}
                                                title={row.left.title}
                                                date={row.left.date}
                                                text={row.left.text}
                                                rotation={row.left.rotation}
                                                flowerRef={(el) => (flowerRefs.current[rowIdx * 2] = el)}
                                            />

                                            <PolaroidCard
                                                image={mem1.image}
                                                rotation={photo1.rotation}
                                                rotationDeg={photo1.deg}
                                                caption={mem1.caption}
                                                flipId={`polaroid-${photo1.pIdx}`}
                                                ref={(el) => (polaroidRefs.current[photo1.pIdx] = el)}
                                                onClick={() => openPhoto(mem1)}
                                            />
                                        </div>

                                        {/* Spread Pair 2: Polaroid 2 + Right Journal Reflection */}
                                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                                            <PolaroidCard
                                                image={mem2.image}
                                                rotation={photo2.rotation}
                                                rotationDeg={photo2.deg}
                                                caption={mem2.caption}
                                                flipId={`polaroid-${photo2.pIdx}`}
                                                ref={(el) => (polaroidRefs.current[photo2.pIdx] = el)}
                                                onClick={() => openPhoto(mem2)}
                                            />

                                            <ScrapbookPage
                                                eyebrow={row.right.eyebrow}
                                                title={row.right.title}
                                                date={row.right.date}
                                                text={row.right.text}
                                                rotation={row.right.rotation}
                                                flowerRef={(el) => (flowerRefs.current[rowIdx * 2 + 1] = el)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ──────────────────────────────────────────────
                    GRAND CELEBRATION CTA BUTTON
                ────────────────────────────────────────────── */}
                    <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center">
                        <div className="mb-5 flex items-center gap-3">
                            <RoseSvg size={28} color="#e0578f" />
                            <span className="font-serif text-lg sm:text-xl font-bold italic text-[#8a0e44]">
                                Ready for the grand birthday wish?
                            </span>
                            <RoseSvg size={28} color="#e0578f" />
                        </div>

                        <Link
                            to="/birthday"
                            className="
                            group
                            relative
                            inline-flex
                            items-center
                            gap-3
                            overflow-hidden
                            rounded-full
                            border-2
                            border-[#f498b8]
                            bg-gradient-to-r
                            from-[#8a0e44]
                            via-[#ad1457]
                            to-[#8a0e44]
                            px-8
                            py-3.5
                            sm:px-10
                            sm:py-4
                            shadow-[0_15px_40px_rgba(138,14,68,0.35)]
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_20px_50px_rgba(138,14,68,0.45)]
                            active:scale-95
                        "
                        >
                            <SakuraSvg size={24} color="#fff" />
                            <span className="font-serif text-base sm:text-xl font-black tracking-wide text-white drop-shadow-md">
                                Continue to Birthday Celebration 🎂 ♡
                            </span>
                            <SakuraSvg size={24} color="#fff" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Expanded photo modal */}
            <ExpandedPhotoModal
                memory={selectedMemory}
                onClose={closePhoto}
            />
        </>
    );
}

export default Gallery;