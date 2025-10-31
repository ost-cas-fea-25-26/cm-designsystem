import { createElement, type JSX, type ReactNode } from "react";

export type LabelSize = "xl" | "lg" | "md" | "sm";
export const Label = ({
  size,
  as = "label",
  children,
}: {
  size: LabelSize;
  as: keyof JSX.IntrinsicElements;
  children: ReactNode;
}) => {
  return createElement(as, { className: `label-${size}` }, children);
};
