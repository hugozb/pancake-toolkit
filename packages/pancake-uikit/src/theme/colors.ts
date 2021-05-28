import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B4B",
  primary: "#4F4F4F",
  primaryBright: "#E9C053",
  primaryDark: "#A16B00",
  secondary: "#D9A545",
  success: "#2BB44E",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#464545",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#EBE9E3",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#F4F1EA",
  inputSecondary: "#ECE3CA",
  tertiary: "#F5F3EF",
  text: "#22232B",
  textDisabled: "#BDC2C4",
  textSubtle: "#343434",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFF9E5 0%, #F5F5F5 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F0F0F0 0%, #F5F6F6 100%)",
    blue: "linear-gradient(180deg, #F1DFA7 0%, #F2DD94 100%)",
    violet: "linear-gradient(180deg, #F5F5F5 0%, #D8D8D8 100%)",
    violetAlt: "linear-gradient(180deg, #E7E7E7 0%, #B1B1B1 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#BAB9BA",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#2B292C",
  contrast: "#FFFFFF",
  dropdown: "#201F1D",
  dropdownDeep: "#18140C",
  invertedContrast: "#261F13",
  input: "#353129",
  inputSecondary: "#27231D",
  primaryDark: "#A16600",
  tertiary: "#353547",
  text: "#FFFCEE",
  textDisabled: "#716D61",
  textSubtle: "#D2C7AD",
  borderColor: "#635B4B",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5C4A31 0%, #54472A 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #554E3B 0%, #242326 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #8D8B90 0%, #C3C1C6 100%)",
    violetAlt: "linear-gradient(180deg, #756643 0%, #8D7957 100%)",
  },
};
