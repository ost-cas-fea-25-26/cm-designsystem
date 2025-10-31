import { createElement, type JSX, type ReactNode } from "react";

export type HeadingSize = "1" | "2" | "3" | "4";
export interface HeadingProps {
  size: HeadingSize;
  role?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}
const HeadingStyle: Style<ButtonVariant, ButtonSize> = {
  sizes: {
    1: "font-bold text-heading-1",
    2: "font-bold text-5xl",
    3: "font-semibold",
    4: "font-semibold",
  },
  default: "",
};

export const Heading = ({ size, role = "h1", children }: HeadingProps) => {
  return createElement(role, { className: `text-heading-1` }, children);
};
