import { createElement, type JSX, type ReactNode } from "react";

export type ParagraphSize = "lg" | "md";
export interface ParagraphProps {
  size: ParagraphSize;
  role?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

const ParagraphStyle: Style<ButtonVariant, ParagraphSize> = {
  sizes: {
    lg: "text-paragraph-lg",
    md: "text-paragraph-md",
  },
  default: "font-medium",
};

export const Paragraph = ({ size, role = "p", children }: ParagraphProps) => {
  return createElement(role, { className: `paragraph-${size}` }, children);
};
