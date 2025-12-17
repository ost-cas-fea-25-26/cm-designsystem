import { createElement, type JSX } from "react";
import { cn, tv, type VariantProps } from "tailwind-variants";

const PostBaseStyles = tv({
  slots: {
    base: [
      "bg-white",
      "rounded-2xl",
      "pl-12",
      "pr-12",
      "pt-8",
      "pb-8",
      "flex",
      "relative",
      "w-full",
      "focus-visible:ring-2",
      "hover:ring-2",
      "hover:ring-slate-200",
    ],
  },
});

type PostBaseVariants = VariantProps<typeof PostBaseStyles>;

export interface PostBaseProps extends PostBaseVariants {
  /**
   * Additional CSS class names to apply to the component.
   */
  className?: string;

  /** Content to be rendered inside the PostBase component */
  children: React.ReactNode;

  /** The HTML element type to render as. */
  as?: keyof JSX.IntrinsicElements;

  /** The URL to navigate to when the element is clicked, if rendered as an a. */
  href?: string;
}

/**
 * Base layout wrapper for a post, including an avatar section
 * and content area.
 */
export const PostBase: React.FC<PostBaseProps> = ({
  as = "div",
  className,
  href,
  ...props
}) => {
  const { base } = PostBaseStyles(props);

  return createElement(
    as ?? "div",
    {
      className: cn(base(), as === "a" && "cursor-pointer", className),
      href: as === "a" ? href : undefined,
    },
    props.children
  );
};
