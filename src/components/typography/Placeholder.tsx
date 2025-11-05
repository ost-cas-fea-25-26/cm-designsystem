import { createElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const placeholderStyles = tv({
  base: [
    "font-poppins",
    "font-medium",
    "text-slate-300",
    "text-[16px]/[100%]",
    "tracking-normal",
  ],
});

type PlaceholderVariants = VariantProps<typeof placeholderStyles>;

interface PlaceholderProps extends PlaceholderVariants {
  role: string;
  children: React.ReactNode;
}

export const Placeholder = ({ role = "span", ...props }: PlaceholderProps) => {
  return createElement(
    role,
    { className: placeholderStyles() },
    props.children
  );
};
