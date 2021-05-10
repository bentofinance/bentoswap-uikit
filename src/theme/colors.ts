import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#92967d",
  primaryBright: "#c8c6a7",
  primaryDark: "#6e7c7c",
  secondary: "#435560",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#435560",
  textDisabled: "#BDC2C4",
  textSubtle: "#c8c6a7",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#c8c6a7",
  background: "#435560",
  backgroundDisabled: "#6e7c7c",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#6e7c7c",
  primaryDark: "#0098A1",
  tertiary: "#435560",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#6e7c7c",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
