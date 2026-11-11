import {
  AbsoluteFill,
  Img,
  staticFile,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Background } from "./Background";
import { body, colors, display } from "./theme";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

const neon = (c: string) =>
  `0 0 12px ${c}, 0 0 36px ${c}, 0 6px 0 rgba(0,0,0,0.5)`;

// Shared top label shown on every curiosity so the viewer keeps context.
const Header: React.FC<{ index: number; total: number }> = ({ index, total }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        top: 130,
        left: 80,
        right: 80,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: body,
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: 4,
        color: colors.white,
        opacity: interpolate(frame, [0, 10], [0, 1], clamp),
      }}
    >
      <span style={{ color: colors.cyan, textShadow: neon(colors.cyan) }}>GTA VI</span>
      <span>
        CURIOSIDAD {index}/{total}
      </span>
    </div>
  );
};

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 12 } });
  const pop2 = spring({ frame: frame - 10, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill>
      <Background />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "0 80px",
          textAlign: "center",
          paddingBottom: 380,
        }}
      >
        <div
          style={{
            fontFamily: display,
            fontSize: 360,
            lineHeight: 1,
            color: colors.yellow,
            textShadow: neon(colors.pink),
            scale: interpolate(pop, [0, 1], [0.3, 1]),
            rotate: interpolate(pop, [0, 1], [-12, -4]) + "deg",
          }}
        >
          7
        </div>
        <div
          style={{
            fontFamily: display,
            fontSize: 132,
            lineHeight: 1,
            color: colors.white,
            textShadow: neon(colors.pink),
            opacity: pop2,
            translate: `0px ${interpolate(pop2, [0, 1], [60, 0])}px`,
          }}
        >
          CURIOSIDADES
          <br />
          DE GTA 6
        </div>
        <div
          style={{
            marginTop: 40,
            fontFamily: body,
            fontWeight: 800,
            fontSize: 52,
            color: colors.night,
            background: colors.cyan,
            padding: "10px 30px",
            borderRadius: 14,
            opacity: interpolate(frame, [28, 38], [0, 1], clamp),
            scale: interpolate(frame, [28, 38], [0.8, 1], {
              ...clamp,
              easing: Easing.out(Easing.back(2)),
            }),
          }}
        >
          que quizá no sabías 👀
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export type FactProps = {
  index: number;
  total: number;
  kicker: string;
  big: string;
  bigColor: string;
  image: string;
  hue: number;
  duration?: number;
};

export const Fact: React.FC<FactProps> = ({
  index,
  total,
  kicker,
  big,
  bigColor,
  image,
  hue,
  duration,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames: compDuration } = useVideoConfig();
  const durationInFrames = duration ?? compDuration;
  const bigIn = spring({ frame: frame - 4, fps, config: { damping: 14 } });
  const cardIn = spring({ frame: frame - 2, fps, config: { damping: 16 } });

  return (
    <AbsoluteFill>
      <Background hue={hue} />
      <Header index={index} total={total} />
      <div style={{ position: "absolute", left: 80, right: 80, top: 210 }}>
        <div
          style={{
            fontFamily: body,
            fontWeight: 800,
            fontSize: 44,
            letterSpacing: 6,
            color: colors.cyan,
            textShadow: neon(colors.cyan),
            opacity: interpolate(frame, [0, 8], [0, 1], clamp),
            translate: `${interpolate(frame, [0, 10], [-40, 0], clamp)}px 0px`,
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            fontFamily: display,
            fontSize: big.length > 9 ? 150 : 190,
            lineHeight: 1.02,
            marginTop: 8,
            color: bigColor,
            textShadow: neon(colors.pink),
            opacity: bigIn,
            scale: interpolate(bigIn, [0, 1], [0.6, 1]),
            transformOrigin: "0% 50%",
          }}
        >
          {big}
        </div>
      </div>
      {/* Illustration of what the narrator is talking about */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 560,
          width: 920,
          height: 720,
          borderRadius: 36,
          overflow: "hidden",
          border: `4px solid ${bigColor}`,
          boxShadow: `0 0 40px ${bigColor}aa, 0 20px 60px rgba(0,0,0,0.7)`,
          opacity: cardIn,
          translate: `0px ${interpolate(cardIn, [0, 1], [80, 0])}px`,
          rotate: `${interpolate(cardIn, [0, 1], [4, 0])}deg`,
        }}
      >
        <Img
          src={staticFile(image)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            scale: interpolate(frame, [0, durationInFrames], [1.04, 1.16], clamp),
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 65%, rgba(13,2,33,0.55) 100%)",
          }}
        />
      </div>
      {/* Progress bar for this fact */}
      <div
        style={{
          position: "absolute",
          left: 80,
          bottom: 140,
          height: 10,
          borderRadius: 5,
          width: interpolate(frame, [0, durationInFrames], [0, 920], clamp),
          background: `linear-gradient(90deg, ${colors.cyan}, ${colors.pink})`,
          boxShadow: `0 0 20px ${colors.pink}`,
        }}
      />
    </AbsoluteFill>
  );
};

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame, fps, config: { damping: 12 } });
  const pulse = 1 + Math.sin(frame / 6) * 0.03;

  return (
    <AbsoluteFill>
      <Background hue={-20} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 80px",
          paddingBottom: 420,
        }}
      >
        <div
          style={{
            fontFamily: body,
            fontWeight: 800,
            fontSize: 50,
            letterSpacing: 6,
            color: colors.cyan,
            textShadow: neon(colors.cyan),
            opacity: pop,
          }}
        >
          SALE EL
        </div>
        <div
          style={{
            fontFamily: display,
            fontSize: 200,
            lineHeight: 1,
            color: colors.yellow,
            textShadow: neon(colors.pink),
            scale: interpolate(pop, [0, 1], [0.4, 1]) * pulse,
          }}
        >
          19 NOV
          <br />
          2026
        </div>
        <div
          style={{
            marginTop: 70,
            fontFamily: body,
            fontWeight: 800,
            fontSize: 60,
            lineHeight: 1.25,
            color: colors.white,
            background: "rgba(13,2,33,0.72)",
            border: `2px solid ${colors.pink}55`,
            borderRadius: 28,
            padding: "28px 34px",
            textShadow: "0 4px 18px rgba(0,0,0,0.8)",
            opacity: interpolate(frame, [20, 32], [0, 1], clamp),
            translate: `0px ${interpolate(frame, [20, 32], [40, 0], clamp)}px`,
          }}
        >
          ¿Cuál te sorprendió más?
          <br />
          <span style={{ color: colors.cyan }}>Dímelo en comentarios 👇</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
