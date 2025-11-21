import { cnBase, type VariantProps } from "tailwind-variants";
import {
  AccessibleTypography,
  type AccessibleTypographyProps,
} from "./AccessibleTypography";
import { paragraphStyles } from "./styles";

type ParagraphVariants = VariantProps<typeof paragraphStyles>;
type ParagraphSize = "lg" | "md";

/**
 * Paragraph component props.
 *
 * @inheritDoc TypographyProps
 * @inheritDoc ParagraphVariants
 */
interface ParagraphProps extends ParagraphVariants, AccessibleTypographyProps {
  /**
   * Controls the visual size of the paragraph.
   */
  size: ParagraphSize;
}

/**
 * A semantic, accessible Paragraph component built on top of the AccessibleTypography component.
 */
export const Paragraph: React.FC<ParagraphProps> = ({
  as = "p",
  className,
  ...props
}: ParagraphProps) => {
  const styles = cnBase(className, paragraphStyles(props));
  return <AccessibleTypography as={as} className={styles} {...props} />;
};
