import { createElement, type JSX } from "react";
import { type VariantProps } from "tailwind-variants";
import { headingStyles } from "./styles";
import { twMerge } from "tailwind-merge";

type HeadingVariants = VariantProps<typeof headingStyles>;
type HeadingSize = "1" | "2" | "3" | "4";

interface HeadingProps extends HeadingVariants {
  size: HeadingSize;
  as: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export const Heading = ({ as, className, ...props }: HeadingProps) => {
  return createElement(
    as,
    {
      role: "heading",
      "aria-level": props.size,
      className: twMerge(className, headingStyles(props)),
    },
    props.children
  );
};
