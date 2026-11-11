import type { Episode } from "../Episodio";
import { colors } from "../theme";
import { CAPTIONS, SCENE_STARTS_MS, VOICE_END_MS } from "./ep3-voz";

// 14 nov 2026 · Faltan 5 días · Las 6 regiones de Leonida
export const ep3: Episode = {
  hook: {
    badge: "FALTAN 5 DÍAS",
    big: "6",
    title1: "REGIONES",
    title2: "DE LEONIDA",
    tag: "así es el mapa de GTA 6 🗺️",
  },
  label: "REGIÓN",
  facts: [
    { name: "Vice City", kicker: "LA GRAN CIUDAD", big: "VICE CITY", bigColor: colors.pink, image: "gta6/ep3/img-1.png", hue: 0 },
    { name: "Leonida Keys", kicker: "ISLAS AL SUR", big: "LEONIDA KEYS", bigColor: colors.cyan, image: "gta6/ep3/img-2.png", hue: -20 },
    { name: "Grassrivers", kicker: "PANTANO Y CAIMANES", big: "GRASSRIVERS", bigColor: colors.yellow, image: "gta6/ep3/img-3.png", hue: 15 },
    { name: "Port Gellhorn", kicker: "LA COSTA OLVIDADA", big: "PORT GELLHORN", bigColor: colors.orange, image: "gta6/ep3/img-4.png", hue: -35 },
    { name: "Ambrosia", kicker: "AZÚCAR Y MOTEROS", big: "AMBROSIA", bigColor: colors.pink, image: "gta6/ep3/img-5.png", hue: 25 },
    { name: "Mount Kalaga", kicker: "PARQUE NACIONAL", big: "MOUNT KALAGA", bigColor: colors.cyan, image: "gta6/ep3/img-6.png", hue: -10 },
  ],
  outro: {
    kicker: "FALTAN 5 DÍAS",
    line1: "19 NOV",
    line2: "2026",
    cta1: "¿Qué zona explorarás primero?",
    cta2: "Dímelo en comentarios 👇",
  },
  voice: "gta6/ep3/voz.mp3",
  captions: CAPTIONS,
  sceneStartsMs: SCENE_STARTS_MS,
  voiceEndMs: VOICE_END_MS,
};
