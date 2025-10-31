import { createElement, type JSX, type ReactNode } from "react";

export type LabelSize = "xl" | "lg" | "md" | "sm";
export interface LabelProps {
  size: LabelSize;
  role?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const LabelStyle: Style<ButtonVariant, LabelSize> = {
  sizes: {
    xl: "text-label-xl",
    lg: "text-label-lg",
    md: "text-label-md",
    sm: "text-label-sm",
  },
  default: "font-semibold",
};

export const Label = ({ size, role = "label", children }: LabelProps) => {
  return createElement(role, { className: `label-${size}` }, children);
};
