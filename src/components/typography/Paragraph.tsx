import { createElement } from "react";
import { type VariantProps } from "tailwind-variants";
import type { paragraphStyles } from "./styles";

type ParagraphVariants = VariantProps<typeof paragraphStyles>;
type ParagraphSize = "lg" | "md";

interface ParagraphProps extends ParagraphVariants {
  size: ParagraphSize;
  as: string;
  children: React.ReactNode;
}

export const Paragraph = ({ as = "p", ...props }: ParagraphProps) => {
  return createElement(
    as,
    { className: paragraphStyles(props) },
    props.children
  );
};
