import { createElement, type JSX, type ReactNode } from "react";

export interface PlaceholderProps {
  role?: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

export const Placeholder = ({ role = "span", children }: PlaceholderProps) => {
  return createElement(
    role,
    { className: "font-medium text-slate-300 text-placeholder" },
    children,
  );
};
