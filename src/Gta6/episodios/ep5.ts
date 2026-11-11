import type { Episode } from "../Episodio";
import { colors } from "../theme";
import { CAPTIONS, SCENE_STARTS_MS, VOICE_END_MS } from "./ep5-voz";

// 16 nov 2026 · Faltan 3 días · Vice City de 2002 a 2026
// Images reused from earlier episodes (no ElevenLabs credits left).
export const ep5: Episode = {
  hook: {
    badge: "FALTAN 3 DÍAS",
    big: "24",
    title1: "AÑOS DE",
    title2: "VICE CITY",
    tag: "de 2002 a 2026 🌴",
  },
  label: "ETAPA",
  facts: [
    { name: "2002", kicker: "LLEGA GTA VICE CITY", big: "2002", bigColor: colors.yellow, image: "gta6/ep4/img-1.png", hue: 0 },
    { name: "Años 80", kicker: "LA INSPIRACIÓN", big: "MIAMI 80s", bigColor: colors.pink, image: "gta6/ep3/img-1.png", hue: 20 },
    { name: "2006", kicker: "VICE CITY STORIES", big: "2006", bigColor: colors.cyan, image: "gta6/img-leonida.png", hue: -20 },
    { name: "2021", kicker: "LA REMASTERIZACIÓN", big: "2021", bigColor: colors.orange, image: "gta6/ep4/img-2.png", hue: -35 },
    { name: "2026", kicker: "VUELVE VICE CITY", big: "2026", bigColor: colors.yellow, image: "gta6/ep4/img-7.png", hue: 10 },
    { name: "Redes", kicker: "REDES Y MEMES", big: "HOY", bigColor: colors.pink, image: "gta6/img-trailer1.png", hue: 25 },
  ],
  outro: {
    kicker: "FALTAN 3 DÍAS",
    line1: "19 NOV",
    line2: "2026",
    cta1: "¿Jugaste al Vice City original?",
    cta2: "Dímelo en comentarios 👇",
  },
  voice: "gta6/ep5/voz.mp3",
  captions: CAPTIONS,
  sceneStartsMs: SCENE_STARTS_MS,
  voiceEndMs: VOICE_END_MS,
};
