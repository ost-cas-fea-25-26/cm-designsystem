import { createElement, type JSX } from "react";
import { twMerge } from "tailwind-merge";
import { type VariantProps } from "tailwind-variants";
import { labelStyles } from "./styles";

type LabelVariants = VariantProps<typeof labelStyles>;
export type LabelSize = "xl" | "lg" | "md" | "sm";

interface LabelProps extends LabelVariants {
  size: LabelSize;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export const Label = ({ as = "label", className, ...props }: LabelProps) => {
  return createElement(
    as,
    { className: twMerge(className, labelStyles(props)) },
    props.children
  );
};
