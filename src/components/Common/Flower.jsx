function Flower({
    size = "md",
    rotation = "rotate-0",
    className = "",
}) {
    const sizes = {
        sm: "h-12 w-12",
        md: "h-20 w-20",
        lg: "h-28 w-28",
    };

    return (
        <div
            className={`
        ${sizes[size]}
        ${rotation}
        relative
        ${className}
      `}
        >
            {/* Petals */}
            <div className="absolute left-1/2 top-0 h-1/2 w-1/2 -translate-x-1/2 rounded-full bg-[#f4a9c4]" />

            <div className="absolute bottom-0 left-1/2 h-1/2 w-1/2 -translate-x-1/2 rounded-full bg-[#f4a9c4]" />

            <div className="absolute left-0 top-1/2 h-1/2 w-1/2 -translate-y-1/2 rounded-full bg-[#f4a9c4]" />

            <div className="absolute right-0 top-1/2 h-1/2 w-1/2 -translate-y-1/2 rounded-full bg-[#f4a9c4]" />

            {/* Center */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          h-1/3
          w-1/3
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#e0578f]
        "
            />
        </div>
    );
}

export default Flower;