/**
 * Design Tokens
 * Framework-agnostic design values that can be used in any context
 */

export const colors = {
  // Base
  black: "oklch(0 0 0)",
  white: "oklch(1 0 0)",
  error: "oklch(57.7% 0.245 27.325)",

  // Slate
  slate: {
    50: "oklch(0.984 0.003 247.858)",
    100: "oklch(0.968 0.007 247.896)",
    200: "oklch(0.929 0.013 255.508)",
    300: "oklch(0.869 0.022 252.894)",
    400: "oklch(0.704 0.04 256.788)",
    500: "oklch(0.554 0.046 257.417)",
    600: "oklch(0.446 0.043 257.281)",
    700: "oklch(0.372 0.044 257.287)",
    800: "oklch(0.279 0.041 260.031)",
    900: "oklch(0.208 0.042 265.755)",
    950: "oklch(0.129 0.042 264.695)",
  },

  // Pink
  pink: {
    50: "oklch(0.971 0.014 343.198)",
    100: "oklch(0.948 0.028 342.258)",
    200: "oklch(0.899 0.061 343.231)",
    300: "oklch(0.823 0.12 346.018)",
    400: "oklch(0.718 0.202 349.761)",
    500: "oklch(0.656 0.241 354.308)",
    600: "oklch(0.592 0.249 0.584)",
    700: "oklch(0.525 0.223 3.958)",
    800: "oklch(0.459 0.187 3.815)",
    900: "oklch(0.408 0.153 2.432)",
    950: "oklch(0.284 0.109 3.907)",
  },

  // Violet
  violet: {
    50: "oklch(0.969 0.016 293.756)",
    100: "oklch(0.943 0.029 294.588)",
    200: "oklch(0.894 0.057 293.283)",
    300: "oklch(0.811 0.111 293.571)",
    400: "oklch(0.702 0.183 293.541)",
    500: "oklch(0.606 0.25 292.717)",
    600: "oklch(0.541 0.281 293.009)",
    700: "oklch(0.491 0.27 292.581)",
    800: "oklch(0.432 0.232 292.759)",
    900: "oklch(0.38 0.189 293.745)",
    950: "oklch(0.283 0.141 291.089)",
  },
} as const;

export const spacing = {
  base: "4px",
} as const;

export const fonts = {
  poppins: ["Poppins", "sans-serif"],
} as const;

export const fontWeights = {
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;
