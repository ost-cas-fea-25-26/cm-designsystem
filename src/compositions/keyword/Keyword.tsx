import { tv, type VariantProps } from "tailwind-variants";
import { Paragraph } from "../../components";
import { ReactNode } from "react";

const keywordStyles = tv({
  slots: {
    base: ["text-violet-600"],
  },
});

type KeywordVariants = VariantProps<typeof keywordStyles>;

interface KeywordProps extends KeywordVariants {
  /**
   * The text content displayed as keyword.
   */
  children: ReactNode;
}

/**
 * Renders a styled keyword element.
 */
export const Keyword: React.FC<KeywordProps> = (props: KeywordProps) => {
  const { base } = keywordStyles(props);

  return (
    <Paragraph as="span" size="lg" className={base()}>
      {props.children}
    </Paragraph>
  );
};
