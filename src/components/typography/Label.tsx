import { createElement, type JSX, type ReactNode } from "react";

export type LabelSize = "xl" | "lg" | "md" | "sm";
export type LabelTone = "default" | "muted" | "accent";

const toneClass: Record<LabelTone, string> = {
  default: "text-black",
  muted: "text-gray-500",
  accent: "text-violet-600",
};

export const Label = ({
  size,
  tone = "default",
  as = "label",
  children,
}: {
  size: LabelSize;
  tone?: LabelTone;
  as: keyof JSX.IntrinsicElements;
  children: ReactNode;
}) => {
  return createElement(
    as,
    { className: `label-${size} ${toneClass[tone]} align-middle` },
    children,
  );
};
