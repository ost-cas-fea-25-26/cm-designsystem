import { tv } from "tailwind-variants";

export const headingStyles = tv({
  base: ["tracking-normal"],
  variants: {
    size: {
      "1": ["font-bold", "text-[48px]/[125%]"],
      "2": ["font-bold", "text-[40px]/[125%]"],
      "3": ["font-semibold", "text-[32px]/[125%]"],
      "4": ["font-semibold", "text-[24px]/[125%]"],
    },
  },
});

export const paragraphStyles = tv({
  base: ["font-medium", "tracking-normal"],
  variants: {
    size: {
      lg: ["text-[24px]/[145%]"],
      md: ["text-[18px]/[140%]"],
    },
  },
});

export const labelStyles = tv({
  base: ["font-semibold", "tracking-normal"],
  variants: {
    size: {
      xl: ["text-[24px]/[100%]"],
      lg: ["text-[20px]/[100%]"],
      md: ["text-[16px]/[100%]"],
      sm: ["text-[14px]/[100%]"],
    },
  },
});

export const placeholderStyles = tv({
  base: [
    "font-medium",
    "text-slate-300",
    "text-[16px]/[100%]",
    "tracking-normal",
    "placeholder:font-medium",
    "placeholder:text-slate-300",
    "placeholder:text-[16px]/[100%]",
    "placeholder:tracking-normal",
  ],
});

export const validationMessageStyles = tv({
  base: ["font-medium", "text-[14px]/[100%]", "tracking-normal"],
  variants: {
    type: {
      error: ["text-error"],
    },
  },
});
