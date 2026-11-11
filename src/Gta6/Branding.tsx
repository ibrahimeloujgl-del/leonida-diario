import { AbsoluteFill } from "remotion";
import { body, colors, display } from "./theme";

const neon = (c: string) => `0 0 14px ${c}, 0 0 44px ${c}, 0 8px 0 rgba(0,0,0,0.5)`;

const SUN_MASK =
  "linear-gradient(180deg, black 55%, transparent 55%), repeating-linear-gradient(180deg, black 0px, black 7%, transparent 7%, transparent 10%)";

const Sun: React.FC<{ size: number; x: number; y: number }> = ({ size, x, y }) => (
  <div
    style={{
      position: "absolute",
      left: x - size / 2,
      top: y - size / 2,
      width: size,
      height: size,
      borderRadius: "50%",
      background: `linear-gradient(180deg, ${colors.yellow} 0%, ${colors.orange} 45%, ${colors.pink} 100%)`,
      maskImage: SUN_MASK,
      WebkitMaskImage: SUN_MASK,
      boxShadow: `0 0 ${size / 4}px ${colors.pink}`,
    }}
  />
);

const Palm: React.FC<{ x: number; y: number; h: number; flip?: boolean }> = ({ x, y, h, flip }) => (
  <svg
    viewBox="0 0 300 900"
    style={{ position: "absolute", left: x, top: y, height: h, width: h / 3, transform: flip ? "scaleX(-1)" : undefined }}
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

const Grid: React.FC<{ top: number; height: number }> = ({ top, height }) => (
  <div
    style={{
      position: "absolute",
      top,
      left: "-50%",
      width: "200%",
      height,
      transformOrigin: "50% 0%",
      transform: "perspective(500px) rotateX(62deg)",
      backgroundImage: `linear-gradient(${colors.pink} 3px, transparent 3px), linear-gradient(90deg, ${colors.pink} 3px, transparent 3px)`,
      backgroundSize: "110px 110px",
      opacity: 0.6,
    }}
  />
);

// 800x800 profile picture (shown as a circle).
export const Avatar: React.FC = () => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(180deg, ${colors.night} 0%, ${colors.purple} 45%, #8a1d6b 62%, ${colors.night} 62.2%)`,
      overflow: "hidden",
    }}
  >
    <div style={{ position: "absolute", inset: 0, height: 496, overflow: "hidden" }}>
      <Sun size={520} x={400} y={330} />
    </div>
    <Grid top={496} height={600} />
    <Palm x={40} y={150} h={560} />
    <Palm x={600} y={200} h={480} flip />
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          fontFamily: display,
          fontSize: 330,
          lineHeight: 1,
          color: colors.white,
          textShadow: neon(colors.pink),
          rotate: "-6deg",
          marginTop: 40,
        }}
      >
        LD
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);

// 2560x1440 YouTube banner. Text stays inside the 1546x423 safe area in the middle.
export const Banner: React.FC = () => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(180deg, ${colors.night} 0%, ${colors.purple} 40%, #8a1d6b 56%, ${colors.orange} 62%, ${colors.night} 62.2%)`,
      overflow: "hidden",
    }}
  >
    <div style={{ position: "absolute", inset: 0, height: 893, overflow: "hidden" }}>
      <Sun size={900} x={1280} y={560} />
    </div>
    <Grid top={893} height={900} />
    <Palm x={330} y={260} h={760} />
    <Palm x={1980} y={300} h={700} flip />
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <div
        style={{
          fontFamily: display,
          fontSize: 230,
          lineHeight: 1,
          color: colors.yellow,
          textShadow: neon(colors.pink),
          letterSpacing: 4,
        }}
      >
        LEONIDA DIARIO
      </div>
      <div
        style={{
          marginTop: 22,
          fontFamily: body,
          fontWeight: 800,
          fontSize: 64,
          letterSpacing: 10,
          color: colors.cyan,
          textShadow: neon(colors.cyan),
        }}
      >
        TODO SOBRE GTA 6 · CADA DÍA
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);
