import { type Caption, createTikTokStyleCaptions } from "@remotion/captions";
import { useMemo } from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { body, colors } from "./theme";

// Groups words into short "pages" and highlights the word being spoken.
export const Subtitulos: React.FC<{ captions: Caption[] }> = ({ captions }) => {
  const { fps } = useVideoConfig();
  const { pages } = useMemo(
    () =>
      createTikTokStyleCaptions({
        captions,
        combineTokensWithinMilliseconds: 750,
      }),
    [captions],
  );

  return (
    <>
      {pages.map((page, i) => {
        const next = pages[i + 1];
        const from = Math.round((page.startMs / 1000) * fps);
        const endMs = next ? next.startMs : page.startMs + page.durationMs + 600;
        const duration = Math.max(1, Math.round((endMs / 1000) * fps) - from);
        return (
          <Sequence key={i} from={from} durationInFrames={duration} name={`Subtítulo ${i + 1}`} layout="none">
            <Page page={page} />
          </Sequence>
        );
      })}
    </>
  );
};

const Page: React.FC<{
  page: ReturnType<typeof createTikTokStyleCaptions>["pages"][number];
}> = ({ page }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = page.startMs + (frame / fps) * 1000;
  const enter = spring({ frame, fps, config: { damping: 14 }, durationInFrames: 8 });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          top: 1430,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          columnGap: 26,
          fontFamily: body,
          fontWeight: 800,
          fontSize: 76,
          lineHeight: 1.15,
          textTransform: "uppercase",
          color: colors.white,
          WebkitTextStroke: "10px #0d0221",
          paintOrder: "stroke fill",
          textShadow: "0 8px 24px rgba(0,0,0,0.85)",
          scale: interpolate(enter, [0, 1], [0.85, 1]),
        }}
      >
        {page.tokens.map((tok, i) => {
          const active = t >= tok.fromMs && t < tok.toMs;
          return (
            <span
              key={i}
              style={{
                color: active ? colors.yellow : colors.white,
                display: "inline-block",
              }}
            >
              {tok.text.trim()}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
