import { createElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const labelStyles = tv({
  base: ["font-poppins", "font-semibold", "text-slate-600", "tracking-normal"],
  variants: {
    size: {
      xl: ["text-[24px]/[100%]"],
      lg: ["text-[20px]/[100%]"],
      md: ["text-[16px]/[100%]"],
      sm: ["text-[14px]/[100%]"],
    },
  },
});

type LabelVariants = VariantProps<typeof labelStyles>;
type LabelSize = "xl" | "lg" | "md" | "sm";

interface LabelProps extends LabelVariants {
  size: LabelSize;
  role: string;
  children: React.ReactNode;
}

export const Label = ({ role = "label", ...props }: LabelProps) => {
  return createElement(role, { className: labelStyles(props) }, props.children);
};
