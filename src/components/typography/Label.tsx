import { createElement, type JSX, type ReactNode } from "react";

export interface LabelProps {
  size: "xl" | "lg" | "md" | "sm";
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
}

export const Label = ({
  size,
  as = "label",
  children,
  className,
}: LabelProps) => {
  return createElement(
    as,
    { className: `label-${size} ${className}` },
    children,
  );
};
