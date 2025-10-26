import { createElement, type JSX, type ReactNode } from "react";

export type ParagraphSize = "lg" | "md";
export const Paragraph = ({
  size,
  as = "p",
  children,
}: {
  size: ParagraphSize;
  as: keyof JSX.IntrinsicElements;
  children: ReactNode;
}) => {
  return createElement(as, { className: `paragraph-${size}` }, children);
};
