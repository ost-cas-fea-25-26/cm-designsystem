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
}

/**
 * Base layout wrapper for a post, including an avatar section
 * and content area.
 */
export const PostBase: React.FC<PostBaseProps> = (props: PostBaseProps) => {
  const { base } = PostBaseStyles(props);

  return <div className={cn(base(), props.className)}>{props.children}</div>;
};
