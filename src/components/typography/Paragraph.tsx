import { createElement, type JSX } from "react";
import { twMerge } from "tailwind-merge";
import { type VariantProps } from "tailwind-variants";
import { paragraphStyles } from "./styles";

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
