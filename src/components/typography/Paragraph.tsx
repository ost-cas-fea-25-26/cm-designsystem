import { createElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const paragraphStyles = tv({
  base: ["font-medium", "tracking-normal"],
  variants: {
    size: {
      lg: ["text-[24px]/[145%]"],
      md: ["text-[18px]/[140%]"],
    },
  },
});

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
