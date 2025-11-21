import { cnBase, type VariantProps } from "tailwind-variants";
import { placeholderStyles } from "./styles";
import {
  AccessibleTypography,
  type AccessibleTypographyProps,
} from "./AccessibleTypography";

type PlaceholderVariants = VariantProps<typeof placeholderStyles>;

/**
 * Placeholder component props.
 *
 * @inheritDoc TypographyProps
 * @inheritDoc PlaceholderVariants
 */
interface PlaceholderProps
  extends PlaceholderVariants,
    AccessibleTypographyProps {}

/**
 * A semantic, accessible Placeholder component built on top of the AccessibleTypography component.
 */
export const Placeholder: React.FC<PlaceholderProps> = ({
  as = "span",
  className,
  ...props
}: PlaceholderProps) => {
  const styles = cnBase(className, placeholderStyles(props));
  return (
    <AccessibleTypography
      as={as}
      className={styles}
      {...props}
    ></AccessibleTypography>
  );
};
