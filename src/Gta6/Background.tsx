import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors } from "./theme";

const SUN_MASK =
  "linear-gradient(180deg, black 55%, transparent 55%), repeating-linear-gradient(180deg, black 0px, black 34px, transparent 34px, transparent 48px)";

// Synthwave sunset: sky gradient, striped sun, scrolling grid floor and palms.
export const Background: React.FC<{ hue?: number }> = ({ hue = 0 }) => {
  const frame = useCurrentFrame();
  const gridOffset = (frame * 4) % 120;

  return (
    <AbsoluteFill style={{ filter: `hue-rotate(${hue}deg)` }}>
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, ${colors.night} 0%, ${colors.purple} 38%, #8a1d6b 56%, ${colors.orange} 64%, ${colors.night} 64.2%)`,
        }}
      />
      {/* Sun */}
      <div
        style={{
          position: "absolute",
          left: 540 - 330,
          top: 1230 - 660 + interpolate(frame, [0, 300], [20, -20], { extrapolateRight: "clamp" }),
          width: 660,
          height: 660,
          borderRadius: "50%",
          background: `linear-gradient(180deg, ${colors.yellow} 0%, ${colors.orange} 45%, ${colors.pink} 100%)`,
          // Solid top half + horizontal stripes on the bottom half
          maskImage: SUN_MASK,
          WebkitMaskImage: SUN_MASK,
          boxShadow: `0 0 160px ${colors.pink}`,
          opacity: 0.85,
        }}
      />
      {/* Grid floor */}
      <div
        style={{
          position: "absolute",
          top: 1229,
          left: -540,
          width: 2160,
          height: 1400,
          transformOrigin: "50% 0%",
          transform: "perspective(500px) rotateX(62deg)",
          backgroundImage: `linear-gradient(${colors.pink} 3px, transparent 3px), linear-gradient(90deg, ${colors.pink} 3px, transparent 3px)`,
          backgroundSize: "120px 120px",
          backgroundPosition: `0px ${gridOffset}px`,
          opacity: 0.55,
        }}
      />
      <Palm x={-60} scale={1.15} flip={false} sway={Math.sin(frame / 25) * 2} />
      <Palm x={820} scale={0.95} flip sway={Math.sin(frame / 30 + 1) * 2} />
      {/* Vignette + scanlines */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 2px, transparent 2px, transparent 5px)",
        }}
      />
    </AbsoluteFill>
  );
};

const Palm: React.FC<{ x: number; scale: number; flip: boolean; sway: number }> = ({
  x,
  scale,
  flip,
  sway,
}) => (
  <svg
    viewBox="0 0 300 900"
    style={{
      position: "absolute",
      left: x,
      top: 520,
      width: 300 * scale,
      height: 900 * scale,
      transform: `scaleX(${flip ? -1 : 1}) rotate(${sway}deg)`,
      transformOrigin: "50% 100%",
    }}
  >
    <path d="M150 900 C 140 700, 120 450, 165 210" stroke="#12021f" strokeWidth="26" fill="none" />
    <g fill="#12021f">
      <path d="M165 210 C 90 150, 20 170, -20 240 C 50 200, 110 205, 165 220 Z" />
      <path d="M165 210 C 120 120, 40 90, -10 110 C 60 130, 120 160, 165 215 Z" />
      <path d="M165 210 C 200 110, 270 80, 330 110 C 260 120, 210 160, 168 216 Z" />
      <path d="M165 210 C 240 160, 310 190, 340 260 C 280 215, 220 210, 168 222 Z" />
      <path d="M165 210 C 160 130, 190 60, 230 30 C 205 90, 185 150, 170 214 Z" />
    </g>
  </svg>
);
