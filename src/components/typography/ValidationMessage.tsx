import { createElement, type JSX } from "react";
import { twMerge } from "tailwind-merge";
import { cnBase, type VariantProps } from "tailwind-variants";
import { validationMessageStyles } from "./styles";
import {
  AccessibleTypography,
  type AccessibleTypographyProps,
} from "./AccessibleTypography";

type ValidationMessageVariants = VariantProps<typeof validationMessageStyles>;
type ValidationMessageType = "error";

/**
 * ValidationMessage component props.
 *
 * @inheritDoc TypographyProps
 * @inheritDoc ValidationMessageVariants
 */
interface ValidationMessageProps
  extends ValidationMessageVariants,
    AccessibleTypographyProps {
  /**
   * Controls the visual variant of the validation message.
   */
  type?: ValidationMessageType;
}

/**
 * A semantic, accessible ValidationMessage component built on top of the AccessibleTypography component.
 */
export const ValidationMessage: React.FC<ValidationMessageProps> = ({
  as = "span",
  type = "error",
  className,
  ...props
}: ValidationMessageProps) => {
  const styles = cnBase(className, validationMessageStyles({ type, ...props }));
  return (
    <AccessibleTypography
      as={as}
      className={styles}
      {...props}
    ></AccessibleTypography>
  );
};
