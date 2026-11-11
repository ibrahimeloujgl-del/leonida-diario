import type { Episode } from "../Episodio";
import { colors } from "../theme";
import { CAPTIONS, SCENE_STARTS_MS, VOICE_END_MS } from "./ep2-voz";

// 13 nov 2026 · Faltan 6 días · Los personajes
export const ep2: Episode = {
  hook: {
    badge: "FALTAN 6 DÍAS",
    big: "8",
    title1: "PERSONAJES",
    title2: "DE GTA 6",
    tag: "que tienes que conocer 👀",
  },
  label: "PERSONAJE",
  facts: [
    { name: "Jason", kicker: "EXMILITAR EN LOS KEYS", big: "JASON DUVAL", bigColor: colors.cyan, image: "gta6/ep2/img-1.png", hue: 0 },
    { name: "Lucia", kicker: "RECIÉN SALIDA DE LA CÁRCEL", big: "LUCIA CAMINOS", bigColor: colors.pink, image: "gta6/ep2/img-2.png", hue: 15 },
    { name: "Cal", kicker: "CERVEZA Y CONSPIRACIONES", big: "CAL HAMPTON", bigColor: colors.yellow, image: "gta6/ep2/img-3.png", hue: -25 },
    { name: "Boobie", kicker: "LEYENDA DE VICE CITY", big: "BOOBIE IKE", bigColor: colors.orange, image: "gta6/ep2/img-4.png", hue: 10 },
    { name: "Dre'Quan", kicker: "PRODUCTOR MUSICAL", big: "DRE'QUAN PRIEST", bigColor: colors.cyan, image: "gta6/ep2/img-5.png", hue: -15 },
    { name: "Real Dimez", kicker: "DÚO DE RAPERAS", big: "REAL DIMEZ", bigColor: colors.pink, image: "gta6/ep2/img-6.png", hue: 25 },
    { name: "Raul", kicker: "ATRACADOR DE BANCOS", big: "RAUL BAUTISTA", bigColor: colors.yellow, image: "gta6/ep2/img-7.png", hue: -40 },
    { name: "Brian", kicker: "EL JEFE DE JASON", big: "BRIAN HEDER", bigColor: colors.orange, image: "gta6/ep2/img-8.png", hue: 5 },
  ],
  outro: {
    kicker: "FALTAN 6 DÍAS",
    line1: "19 NOV",
    line2: "2026",
    cta1: "¿Con quién te quedas?",
    cta2: "Dímelo en comentarios 👇",
  },
  voice: "gta6/ep2/voz.mp3",
  captions: CAPTIONS,
  sceneStartsMs: SCENE_STARTS_MS,
  voiceEndMs: VOICE_END_MS,
};
