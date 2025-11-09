import { createElement, type JSX } from "react";
import { type VariantProps } from "tailwind-variants";
import { paragraphStyles } from "./styles";
import { twMerge } from "tailwind-merge";

type ParagraphVariants = VariantProps<typeof paragraphStyles>;
type ParagraphSize = "lg" | "md";

interface ParagraphProps extends ParagraphVariants {
  size: ParagraphSize;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export const Paragraph = ({
  as = "p",
  className,
  ...props
}: ParagraphProps) => {
  return createElement(
    as,
    { className: twMerge(className, paragraphStyles(props)) },
    props.children
  );
};
