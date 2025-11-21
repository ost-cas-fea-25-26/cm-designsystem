import { cnBase, type VariantProps } from "tailwind-variants";
import {
  AccessibleTypography,
  type AccessibleTypographyProps,
} from "./AccessibleTypography";
import { headingStyles } from "./styles";
import type { JSX } from "react";

type HeadingVariants = VariantProps<typeof headingStyles>;
type HeadingSize = "1" | "2" | "3" | "4";

/**
 * Heading component props.
 *
 * @inheritDoc TypographyProps
 * @inheritDoc HeadingVariants
 */
interface HeadingProps extends HeadingVariants, AccessibleTypographyProps {
  as: keyof JSX.IntrinsicElements;
  /**
   * Controls the visual size of the heading.
   */
  size: HeadingSize;
}

/**
 * A semantic, accessible Heading component built on top of the AccessibleTypography component.
 */
export const Heading: React.FC<HeadingProps> = ({
  as,
  className,
  ...props
}: HeadingProps) => {
  const styles = cnBase(className, headingStyles(props));
  return (
    <AccessibleTypography
      as={as}
      className={styles}
      role="heading"
      aria-level={props.size}
      {...props}
    />
  );
};
