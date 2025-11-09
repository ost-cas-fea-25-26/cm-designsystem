import { createElement } from "react";
import { type VariantProps } from "tailwind-variants";
import { validationMessageStyles } from "./styles";

type ValidationMessageVariants = VariantProps<typeof validationMessageStyles>;
type ValidationMessageType = "error";

interface ValidationMessageProps extends ValidationMessageVariants {
  as?: string;
  type?: ValidationMessageType;
  children: React.ReactNode;
}

export const ValidationMessage = ({
  as = "span",
  type = "error",
  ...props
}: ValidationMessageProps) => {
  return createElement(
    as,
    { className: validationMessageStyles({ type, ...props }) },
    props.children
  );
};
