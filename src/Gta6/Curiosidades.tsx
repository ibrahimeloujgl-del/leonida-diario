import { Audio } from "@remotion/media";
import { Sequence, staticFile, useVideoConfig } from "remotion";
import { Fact, Hook, Outro } from "./Scenes";
import { Subtitulos } from "./Subtitulos";
import { colors } from "./theme";
import { CAPTIONS, SCENE_STARTS_MS, VOICE_END_MS } from "./voz-data";

// Scenes cut exactly when the narrator says "Uno", "Dos"... and the outro on "Sale".
// Hold the last frame 1s after the voice ends.
export const CURIOSIDADES_DURATION = Math.ceil(((VOICE_END_MS + 1000) / 1000) * 30);

const FACTS = [
  {
    name: "1 · 13 años",
    kicker: "LA ESPERA MÁS LARGA",
    big: "13 AÑOS",
    bigColor: colors.yellow,
    image: "gta6/img-13anos.png",
    hue: 0,
  },
  {
    name: "2 · Leonida",
    kicker: "VUELVE VICE CITY",
    big: "LEONIDA",
    bigColor: colors.cyan,
    image: "gta6/img-leonida.png",
    hue: -25,
  },
  {
    name: "3 · Lucia",
    kicker: "HISTÓRICO",
    big: "LUCIA",
    bigColor: colors.pink,
    image: "gta6/img-pareja.png",
    hue: 15,
  },
  {
    name: "4 · Prisión",
    kicker: "ASÍ EMPIEZA TODO",
    big: "EN PRISIÓN",
    bigColor: colors.orange,
    image: "gta6/img-prision.png",
    hue: -40,
  },
  {
    name: "5 · Récord tráiler 1",
    kicker: "RÉCORD EN YOUTUBE",
    big: "+90 M",
    bigColor: colors.yellow,
    image: "gta6/img-trailer1.png",
    hue: 10,
  },
  {
    name: "6 · Tráiler 2",
    kicker: "Y EL SEGUNDO, AÚN MÁS",
    big: "475 M",
    bigColor: colors.cyan,
    image: "gta6/img-trailer2.png",
    hue: -15,
  },
  {
    name: "7 · Consolas",
    kicker: "MALAS NOTICIAS PARA PC",
    big: "SOLO CONSOLA",
    bigColor: colors.pink,
    image: "gta6/img-consolas.png",
    hue: 25,
  },
];

export const Curiosidades: React.FC = () => {
  const { fps, durationInFrames } = useVideoConfig();
  // Cut each scene a few frames before its keyword so the visual lands with the word.
  const lead = 4;
  const cuts = [0, ...SCENE_STARTS_MS.map((ms) => Math.max(0, Math.round((ms / 1000) * fps) - lead)), durationInFrames];

  return (
    <>
      <Sequence name="Gancho" from={cuts[0]} durationInFrames={cuts[1] - cuts[0]}>
        <Hook />
      </Sequence>
      {FACTS.map((f, i) => (
        <Sequence key={f.name} name={f.name} from={cuts[i + 1]} durationInFrames={cuts[i + 2] - cuts[i + 1]}>
          <Fact index={i + 1} total={7} duration={cuts[i + 2] - cuts[i + 1]} {...f} />
        </Sequence>
      ))}
      <Sequence name="Cierre" from={cuts[8]} durationInFrames={cuts[9] - cuts[8]}>
        <Outro />
      </Sequence>
      <Subtitulos captions={CAPTIONS} />
      <Audio name="Voz (ElevenLabs · Dani)" src={staticFile("gta6/voz.mp3")} />
    </>
  );
};
