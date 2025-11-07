import { createElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const placeholderStyles = tv({
  base: [
    "font-medium",
    "text-slate-300",
    "text-[16px]/[100%]",
    "tracking-normal",
  ],
});

type PlaceholderVariants = VariantProps<typeof placeholderStyles>;

interface PlaceholderProps extends PlaceholderVariants {
  as: string;
  children: React.ReactNode;
}

export const Placeholder = ({ as = "span", ...props }: PlaceholderProps) => {
  return createElement(as, { className: placeholderStyles() }, props.children);
};
