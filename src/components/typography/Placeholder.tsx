import { createElement, type JSX } from "react";
import { type VariantProps } from "tailwind-variants";
import { placeholderStyles } from "./styles";
import { twMerge } from "tailwind-merge";

type PlaceholderVariants = VariantProps<typeof placeholderStyles>;

interface PlaceholderProps extends PlaceholderVariants {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export const Placeholder = ({
  as = "span",
  className,
  ...props
}: PlaceholderProps) => {
  return createElement(
    as,
    { className: twMerge(className, placeholderStyles(props)) },
    props.children
  );
};
