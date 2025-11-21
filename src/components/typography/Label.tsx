import { cnBase, type VariantProps } from "tailwind-variants";
import {
  AccessibleTypography,
  type AccessibleTypographyProps,
} from "./AccessibleTypography";
import { labelStyles } from "./styles";

type LabelVariants = VariantProps<typeof labelStyles>;
type LabelSize = "xl" | "lg" | "md" | "sm";

/**
 * Label component props.
 *
 * @inheritDoc TypographyProps
 * @inheritDoc LabelVariants
 */
interface LabelProps extends LabelVariants, AccessibleTypographyProps {
  /**
   * Controls the visual size of the label.
   */
  size: LabelSize;
}

/**
 * A semantic, accessible Label component built on top of the AccessibleTypography component.
 */
export const Label: React.FC<LabelProps> = ({
  as = "label",
  className,
  ...props
}: LabelProps) => {
  const styles = cnBase(className, labelStyles(props));
  return (
    <AccessibleTypography
      as={as}
      className={styles}
      {...props}
     />
  );
};
