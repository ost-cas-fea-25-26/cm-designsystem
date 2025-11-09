import { createElement } from "react";
import { type VariantProps } from "tailwind-variants";
import type { headingStyles } from "./styles";

type HeadingVariants = VariantProps<typeof headingStyles>;
type HeadingSize = "1" | "2" | "3" | "4";

interface HeadingProps extends HeadingVariants {
  size: HeadingSize;
  as: string;
  children: React.ReactNode;
}

export const Heading = ({ ...props }: HeadingProps) => {
  return createElement(
    props.as,
    {
      role: "heading",
      "aria-level": props.size,
      className: headingStyles(props),
    },
    props.children
  );
};
