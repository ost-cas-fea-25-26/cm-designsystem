import { createElement } from "react";
import { type VariantProps } from "tailwind-variants";
import { labelStyles } from "./styles";

type LabelVariants = VariantProps<typeof labelStyles>;
type LabelSize = "xl" | "lg" | "md" | "sm";

interface LabelProps extends LabelVariants {
  size: LabelSize;
  as?: string;
  children: React.ReactNode;
}

export const Label = ({ as = "label", ...props }: LabelProps) => {
  return createElement(as, { className: labelStyles(props) }, props.children);
};
