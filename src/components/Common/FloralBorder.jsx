function Lily({ x, y, scale = 1, rotate = 0 }) {
    return (
        <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
            {/* Lily petals */}
            <ellipse
                cx="0"
                cy="-25"
                rx="18"
                ry="42"
                fill="#f4c4cf"
                stroke="#b97882"
                strokeWidth="1.5"
            />

            <ellipse
                cx="24"
                cy="-8"
                rx="18"
                ry="42"
                transform="rotate(55 24 -8)"
                fill="#efb1c0"
                stroke="#b97882"
                strokeWidth="1.5"
            />

            <ellipse
                cx="15"
                cy="20"
                rx="18"
                ry="42"
                transform="rotate(115 15 20)"
                fill="#f7d0d8"
                stroke="#b97882"
                strokeWidth="1.5"
            />

            <ellipse
                cx="-15"
                cy="20"
                rx="18"
                ry="42"
                transform="rotate(-115 -15 20)"
                fill="#f7d0d8"
                stroke="#b97882"
                strokeWidth="1.5"
            />

            <ellipse
                cx="-24"
                cy="-8"
                rx="18"
                ry="42"
                transform="rotate(-55 -24 -8)"
                fill="#efb1c0"
                stroke="#b97882"
                strokeWidth="1.5"
            />

            {/* Lily center */}
            <circle
                cx="0"
                cy="0"
                r="8"
                fill="#e4ad59"
            />

            {/* Lily stamens */}
            <path
                d="M-4 0L-20 -18
           M2 0L20 -18
           M0 3L0 -25"
                stroke="#9d665e"
                strokeWidth="1.5"
            />
        </g>
    );
}


function Tulip({ x, y, scale = 1, rotate = 0 }) {
    return (
        <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
            {/* Tulip flower */}
            <path
                d="
          M-25 -5
          C-25 -35 -12 -55 0 -55
          C12 -55 25 -35 25 -5
          C25 18 12 30 0 30
          C-12 30 -25 18 -25 -5
          Z
        "
                fill="#e88fa8"
                stroke="#ad6876"
                strokeWidth="2"
            />

            {/* Tulip center folds */}
            <path
                d="M0 -52C-7 -28 -7 5 0 25"
                stroke="#b66b79"
                strokeWidth="2"
                opacity="0.7"
            />

            <path
                d="M0 -52C8 -30 8 3 0 25"
                stroke="#f5c4cf"
                strokeWidth="2"
                opacity="0.8"
            />

            {/* Stem */}
            <path
                d="M0 28C2 100 -8 145 -20 190"
                stroke="#76936f"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
            />

            {/* Leaf */}
            <path
                d="
          M-8 100
          C-55 72 -70 90 -20 120
          C-8 126 0 118 -8 100
        "
                fill="#94aa80"
                stroke="#708665"
                strokeWidth="1.5"
            />

            <path
                d="
          M-10 140
          C30 112 48 126 8 154
          C-3 162 -12 155 -10 140
        "
                fill="#829d70"
                stroke="#6e8661"
                strokeWidth="1.5"
            />
        </g>
    );
}


function SmallFlower({ x, y, scale = 1, rotate = 0 }) {
    return (
        <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
            <circle
                cx="0"
                cy="-12"
                r="10"
                fill="#e9aabb"
            />

            <circle
                cx="12"
                cy="0"
                r="10"
                fill="#edb2c1"
            />

            <circle
                cx="0"
                cy="12"
                r="10"
                fill="#e9aabb"
            />

            <circle
                cx="-12"
                cy="0"
                r="10"
                fill="#edb2c1"
            />

            <circle
                cx="0"
                cy="0"
                r="5"
                fill="#e4ae5d"
            />
        </g>
    );
}


function FillerBranch({ x, y, scale = 1, rotate = 0 }) {
    return (
        <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
            {/* Branch */}
            <path
                d="M0 180C30 130 40 80 75 0"
                stroke="#8b8065"
                strokeWidth="2.5"
                fill="none"
            />

            {/* Small branches */}
            <path
                d="M30 125L-5 100"
                stroke="#8b8065"
                strokeWidth="2"
            />

            <path
                d="M47 82L92 58"
                stroke="#8b8065"
                strokeWidth="2"
            />

            <path
                d="M62 45L35 20"
                stroke="#8b8065"
                strokeWidth="2"
            />

            {/* Small buds */}
            <circle cx="-8" cy="98" r="5" fill="#d98fa2" />
            <circle cx="92" cy="58" r="5" fill="#d98fa2" />
            <circle cx="35" cy="20" r="5" fill="#e4a8b5" />
            <circle cx="76" cy="10" r="5" fill="#d98fa2" />

            {/* Tiny leaves */}
            <ellipse
                cx="23"
                cy="125"
                rx="18"
                ry="6"
                transform="rotate(-25 23 125)"
                fill="#9aaa7e"
            />

            <ellipse
                cx="53"
                cy="82"
                rx="18"
                ry="6"
                transform="rotate(30 53 82)"
                fill="#8fa077"
            />

            <ellipse
                cx="55"
                cy="48"
                rx="17"
                ry="6"
                transform="rotate(-25 55 48)"
                fill="#a0ad85"
            />
        </g>
    );
}


function FloralCluster({
    className = "",
    flip = false,
    variant = "full",
}) {
    return (
        <svg
            viewBox="0 0 300 700"
            className={`${className} ${flip ? "-scale-x-100" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            {/* =====================================================
          LONG DECORATIVE STEMS
      ====================================================== */}

            <path
                d="M70 720C75 610 85 520 110 430C130 350 155 250 170 110"
                stroke="#78916e"
                strokeWidth="4"
                strokeLinecap="round"
            />

            <path
                d="M35 700C65 580 60 480 105 360C145 250 200 180 220 45"
                stroke="#8b9c76"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M130 700C120 610 145 530 170 450C195 370 225 280 245 190"
                stroke="#819471"
                strokeWidth="3"
                strokeLinecap="round"
            />


            {/* =====================================================
          LARGE LILIES
      ====================================================== */}

            <Lily
                x="172"
                y="105"
                scale="1.05"
                rotate="-12"
            />

            <Lily
                x="72"
                y="235"
                scale="0.78"
                rotate="15"
            />

            <Lily
                x="220"
                y="365"
                scale="0.95"
                rotate="-18"
            />

            <Lily
                x="85"
                y="530"
                scale="0.9"
                rotate="12"
            />


            {/* =====================================================
          TULIPS
      ====================================================== */}

            <Tulip
                x="58"
                y="120"
                scale="0.85"
                rotate="-12"
            />

            <Tulip
                x="215"
                y="225"
                scale="0.72"
                rotate="14"
            />

            <Tulip
                x="55"
                y="420"
                scale="0.78"
                rotate="-10"
            />

            <Tulip
                x="205"
                y="555"
                scale="0.92"
                rotate="12"
            />

            <Tulip
                x="115"
                y="640"
                scale="0.62"
                rotate="-8"
            />


            {/* =====================================================
          SMALL FILLER FLOWERS
      ====================================================== */}

            <SmallFlower
                x="125"
                y="170"
                scale="0.7"
            />

            <SmallFlower
                x="235"
                y="300"
                scale="0.55"
            />

            <SmallFlower
                x="115"
                y="360"
                scale="0.5"
            />

            <SmallFlower
                x="175"
                y="470"
                scale="0.62"
            />

            <SmallFlower
                x="65"
                y="590"
                scale="0.48"
            />


            {/* =====================================================
          FINE BOTANICAL BRANCHES
      ====================================================== */}

            <FillerBranch
                x="20"
                y="100"
                scale="0.75"
                rotate="-12"
            />

            <FillerBranch
                x="130"
                y="20"
                scale="0.65"
                rotate="18"
            />

            <FillerBranch
                x="20"
                y="360"
                scale="0.7"
                rotate="-8"
            />

            <FillerBranch
                x="120"
                y="510"
                scale="0.72"
                rotate="15"
            />


            {/* =====================================================
          EXTRA LEAVES
      ====================================================== */}

            <ellipse
                cx="75"
                cy="340"
                rx="38"
                ry="10"
                transform="rotate(-35 75 340)"
                fill="#8da078"
                opacity="0.85"
            />

            <ellipse
                cx="125"
                cy="300"
                rx="38"
                ry="10"
                transform="rotate(35 125 300)"
                fill="#a0ad84"
                opacity="0.85"
            />

            <ellipse
                cx="175"
                cy="410"
                rx="40"
                ry="11"
                transform="rotate(-28 175 410)"
                fill="#82956f"
                opacity="0.8"
            />

            <ellipse
                cx="105"
                cy="470"
                rx="35"
                ry="9"
                transform="rotate(35 105 470)"
                fill="#95a77b"
                opacity="0.8"
            />

        </svg>
    );
}


function FloralBorder() {
    return (
        <div
            className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
            aria-hidden="true"
        >

            {/* =====================================================
          TOP LEFT
      ====================================================== */}

            <FloralCluster
                className="
          absolute
          left-[-35px]
          top-[-35px]
          h-[700px]
          w-[300px]
        "
            />

            {/* =====================================================
          TOP RIGHT
      ====================================================== */}

            <FloralCluster
                className="
          absolute
          right-[-35px]
          top-[-35px]
          h-[700px]
          w-[300px]
        "
                flip
            />

            {/* =====================================================
          UPPER-MIDDLE LEFT
      ====================================================== */}

            <FloralCluster
                className="
          absolute
          left-[-55px]
          top-[22%]
          h-[620px]
          w-[270px]
          opacity-95
        "
            />

            {/* =====================================================
          UPPER-MIDDLE RIGHT
      ====================================================== */}

            <FloralCluster
                className="
          absolute
          right-[-55px]
          top-[22%]
          h-[620px]
          w-[270px]
          opacity-95
        "
                flip
            />

            {/* =====================================================
          LOWER LEFT
      ====================================================== */}

            <FloralCluster
                className="
          absolute
          bottom-[-80px]
          left-[-45px]
          h-[720px]
          w-[300px]
        "
            />

            {/* =====================================================
          LOWER RIGHT
      ====================================================== */}

            <FloralCluster
                className="
          absolute
          bottom-[-80px]
          right-[-45px]
          h-[720px]
          w-[300px]
        "
                flip
            />

            {/* =====================================================
          SMALLER INNER ACCENTS
      ====================================================== */}

            <FloralCluster
                className="
          absolute
          left-[120px]
          top-[8%]
          h-[330px]
          w-[150px]
          opacity-65
        "
            />

            <FloralCluster
                className="
          absolute
          right-[120px]
          top-[8%]
          h-[330px]
          w-[150px]
          opacity-65
        "
                flip
            />

            <FloralCluster
                className="
          absolute
          left-[100px]
          top-[58%]
          h-[360px]
          w-[160px]
          opacity-60
        "
            />

            <FloralCluster
                className="
          absolute
          right-[100px]
          top-[58%]
          h-[360px]
          w-[160px]
          opacity-60
        "
                flip
            />

        </div>
    );
}

export default FloralBorder;