/**
 * Decorative washi-tape strip component.
 * Renders as a semi-transparent colored tape strip, slightly rotated.
 *
 * Props:
 *  color     - tape color (default: warm pink)
 *  rotation  - CSS rotation class
 *  width     - tailwind width class
 *  className - extra classes
 */
function Tape({
    color = "#f7c8d8",
    opacity = 0.65,
    rotation = "-rotate-1",
    width = "w-28",
    className = "",
}) {
    return (
        <div
            className={`${width} ${rotation} ${className} relative h-7`}
            aria-hidden="true"
        >
            {/* Main tape body */}
            <div
                className="absolute inset-0 rounded-sm"
                style={{
                    background: `repeating-linear-gradient(
                        90deg,
                        ${color}88 0px,
                        ${color}bb 4px,
                        ${color}88 8px
                    )`,
                    opacity,
                    backdropFilter: "blur(0px)",
                }}
            />
            {/* Subtle edge shadows to give depth */}
            <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `${color}cc`, opacity: 0.4 }}
            />
            <div
                className="absolute inset-x-0 bottom-0 h-px"
                style={{ background: `${color}cc`, opacity: 0.4 }}
            />
        </div>
    );
}

export default Tape;
