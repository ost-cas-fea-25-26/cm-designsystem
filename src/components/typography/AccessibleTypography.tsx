import { createElement, type JSX } from "react";

/**
 * Props for the Typography component.
 */
export interface AccessibleTypographyProps {
  /**
   * The HTML tag to render (e.g., "p", "h1", "span").
   * Determines the semantic element used for the text.
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * Additional Tailwind or custom class names to apply.
   */
  className?: string;

  /**
   * Defines the ARIA role of the element.
   */
  role?: string;

  /**
   * The accessible label associated with this element.
   * Useful when the visible text isn’t descriptive enough.
   */
  ariaLabel?: string;

  /**
   * The content to be rendered inside the element.
   */
  children: React.ReactNode;
}

/**
 * A flexible, semantic, accessible typography component that allows you
 * to set the HTML tag and optionally make it clickable.
 */
export const AccessibleTypography: React.FC<AccessibleTypographyProps> = (
  props: AccessibleTypographyProps
) => {
  return createElement(
    props.as ?? "span",
    {
      className: props.className,
      "aria-label": props.ariaLabel,
    },
    props.children
  );
};
