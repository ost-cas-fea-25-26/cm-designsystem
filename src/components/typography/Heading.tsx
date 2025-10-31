import { createElement, type JSX, type ReactNode } from "react";

export type HeadingSize = "1" | "2" | "3" | "4";
export const Heading = ({
  size,
  as = "h1",
  children,
}: {
  size: HeadingSize;
  as: keyof JSX.IntrinsicElements;
  children: ReactNode;
}) => {
  return createElement(as, { className: `heading-${size}` }, children);
};
