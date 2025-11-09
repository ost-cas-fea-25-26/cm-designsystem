import { createElement } from "react";
import { type VariantProps } from "tailwind-variants";
import type { placeholderStyles } from "./styles";

type PlaceholderVariants = VariantProps<typeof placeholderStyles>;

interface PlaceholderProps extends PlaceholderVariants {
  as?: string;
  children: React.ReactNode;
}

export const Placeholder = ({ as = "span", ...props }: PlaceholderProps) => {
  return createElement(as, { className: placeholderStyles() }, props.children);
};
