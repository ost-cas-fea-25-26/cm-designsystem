import { colors, fonts, fontWeights, spacing } from "./tokens";
import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Preset for CM Design System
 * Import this preset in your tailwind.config.ts
 */
const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        error: colors.error,
        slate: colors.slate,
        pink: colors.pink,
        violet: colors.violet,
      },
      fontFamily: {
        poppins: fonts.poppins,
      },
      fontWeight: {
        medium: fontWeights.medium,
        semibold: fontWeights.semibold,
        bold: fontWeights.bold,
      },
      spacing: {
        base: spacing.base,
      },
    },
  },
};

export default preset;
