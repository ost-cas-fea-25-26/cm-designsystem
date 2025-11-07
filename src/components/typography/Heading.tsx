import { createElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const headingStyles = tv({
  base: ["tracking-normal"],
  variants: {
    size: {
      "1": ["font-bold", "text-[48px]/[125%]"],
      "2": ["font-bold", "text-[40px]/[125%]"],
      "3": ["font-semibold", "text-[32px]/[125%]"],
      "4": ["font-semibold", "text-[24px]/[125%]"],
    },
  },
});

type HeadingVariants = VariantProps<typeof headingStyles>;
type HeadingSize = "1" | "2" | "3" | "4";

interface HeadingProps extends HeadingVariants {
  size: HeadingSize;
  role?: string;
  children: React.ReactNode;
}

export const Heading = ({ role = "h1", ...props }: HeadingProps) => {
  return createElement(
    role,
    { className: headingStyles(props) },
    props.children
  );
};
