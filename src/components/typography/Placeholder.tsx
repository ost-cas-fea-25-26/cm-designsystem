import { createElement, type JSX, type ReactNode } from "react";

export const Placeholder = ({
  as = "span",
  children,
}: {
  as: keyof JSX.IntrinsicElements;
  children: ReactNode;
}) => {
  return createElement(as, { className: "placeholder" }, children);
};
