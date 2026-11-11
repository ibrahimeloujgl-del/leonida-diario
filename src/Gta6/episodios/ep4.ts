import type { Episode } from "../Episodio";
import { colors } from "../theme";
import { CAPTIONS, SCENE_STARTS_MS, VOICE_END_MS } from "./ep4-voz";

// 15 nov 2026 · Faltan 4 días · La historia hasta el lanzamiento
export const ep4: Episode = {
  hook: {
    badge: "FALTAN 4 DÍAS",
    big: "13",
    title1: "AÑOS DE",
    title2: "ESPERA",
    tag: "la historia de GTA 6 ⏳",
  },
  label: "FECHA",
  facts: [
    { name: "2013", kicker: "SALE GTA V", big: "2013", bigColor: colors.yellow, image: "gta6/ep4/img-1.png", hue: 0 },
    { name: "Feb 2022", kicker: "ROCKSTAR LO CONFIRMA", big: "FEB 2022", bigColor: colors.cyan, image: "gta6/ep4/img-2.png", hue: -20 },
    { name: "Sep 2022", kicker: "LA GRAN FILTRACIÓN", big: "SEP 2022", bigColor: colors.pink, image: "gta6/ep4/img-3.png", hue: 20 },
    { name: "Dic 2023", kicker: "PRIMER TRÁILER", big: "DIC 2023", bigColor: colors.orange, image: "gta6/ep4/img-4.png", hue: -35 },
    { name: "May 2025", kicker: "PRIMER RETRASO", big: "MAY 2025", bigColor: colors.cyan, image: "gta6/ep4/img-5.png", hue: 10 },
    { name: "Nov 2025", kicker: "SEGUNDO RETRASO", big: "NOV 2025", bigColor: colors.pink, image: "gta6/ep4/img-6.png", hue: -10 },
    { name: "19 Nov 2026", kicker: "¡POR FIN!", big: "19 NOV 2026", bigColor: colors.yellow, image: "gta6/ep4/img-7.png", hue: 25 },
  ],
  outro: {
    kicker: "FALTAN 4 DÍAS",
    line1: "19 NOV",
    line2: "2026",
    cta1: "¿Cuánto llevas esperando?",
    cta2: "Dímelo en comentarios 👇",
  },
  voice: "gta6/ep4/voz.mp3",
  captions: CAPTIONS,
  sceneStartsMs: SCENE_STARTS_MS,
  voiceEndMs: VOICE_END_MS,
};
