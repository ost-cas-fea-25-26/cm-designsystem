import { createElement, type JSX, type ReactNode } from "react";

export interface LabelProps {
  size: "xl" | "lg" | "md" | "sm";
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

export const Label = ({ size, as = "label", children }: LabelProps) => {
  return createElement(as, { className: `label-${size}` }, children);
};
