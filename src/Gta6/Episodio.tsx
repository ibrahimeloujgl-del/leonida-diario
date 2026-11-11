import type { Caption } from "@remotion/captions";
import { Audio } from "@remotion/media";
import { Sequence, staticFile, useVideoConfig } from "remotion";
import { Fact, Hook, Outro, type HookProps, type OutroProps } from "./Scenes";
import { Subtitulos } from "./Subtitulos";

export type FactData = {
  name: string;
  kicker: string;
  big: string;
  bigColor: string;
  image: string;
  hue: number;
};

// One countdown short: hook -> N facts -> outro, cut on the narrator's words.
export type Episode = {
  hook: HookProps;
  label: string;
  facts: FactData[];
  outro: OutroProps;
  voice: string;
  captions: Caption[];
  // Start (ms) of each fact, then of the outro.
  sceneStartsMs: number[];
  voiceEndMs: number;
};

export const episodeDuration = (ep: Episode, fps = 30) =>
  Math.ceil(((ep.voiceEndMs + 1000) / 1000) * fps);

export const Episodio: React.FC<{ ep: Episode }> = ({ ep }) => {
  const { fps, durationInFrames } = useVideoConfig();
  const lead = 4;
  const cuts = [
    0,
    ...ep.sceneStartsMs.map((ms) => Math.max(0, Math.round((ms / 1000) * fps) - lead)),
    durationInFrames,
  ];
  const n = ep.facts.length;

  return (
    <>
      <Sequence name="Gancho" from={cuts[0]} durationInFrames={cuts[1] - cuts[0]}>
        <Hook {...ep.hook} />
      </Sequence>
      {ep.facts.map((f, i) => (
        <Sequence key={f.name} name={f.name} from={cuts[i + 1]} durationInFrames={cuts[i + 2] - cuts[i + 1]}>
          <Fact index={i + 1} total={n} label={ep.label} duration={cuts[i + 2] - cuts[i + 1]} {...f} />
        </Sequence>
      ))}
      <Sequence name="Cierre" from={cuts[n + 1]} durationInFrames={cuts[n + 2] - cuts[n + 1]}>
        <Outro {...ep.outro} />
      </Sequence>
      <Subtitulos captions={ep.captions} />
      <Audio name="Voz" src={staticFile(ep.voice)} />
    </>
  );
};
