import { createElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const paragraphStyles = tv({
  base: ["font-poppins", "font-medium", "text-slate-600", "tracking-normal"],
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
  role: string;
  children: React.ReactNode;
}

export const Paragraph = ({ role = "p", ...props }: ParagraphProps) => {
  return createElement(
    role,
    { className: paragraphStyles(props) },
    props.children,
  );
};
