import { createElement, type JSX } from "react";
import { type VariantProps } from "tailwind-variants";
import { validationMessageStyles } from "./styles";
import { twMerge } from "tailwind-merge";

type ValidationMessageVariants = VariantProps<typeof validationMessageStyles>;
type ValidationMessageType = "error";

interface ValidationMessageProps extends ValidationMessageVariants {
  as?: keyof JSX.IntrinsicElements;
  type?: ValidationMessageType;
  className?: string;
  children: React.ReactNode;
}

export const ValidationMessage = ({
  as = "span",
  type = "error",
  className,
  ...props
}: ValidationMessageProps) => {
  return createElement(
    as,
    {
      className: twMerge(
        className,
        validationMessageStyles({ type, ...props })
      ),
    },
    props.children
  );
};
