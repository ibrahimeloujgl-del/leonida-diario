import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

export const { fontFamily: display } = loadAnton("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

export const { fontFamily: body } = loadInter("normal", {
  weights: ["600", "800"],
  subsets: ["latin"],
});

export const colors = {
  pink: "#ff2e88",
  orange: "#ff8a3d",
  yellow: "#ffd23f",
  cyan: "#2ee6ff",
  purple: "#2a0b4a",
  night: "#0d0221",
  white: "#fff7fb",
};
