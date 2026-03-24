import { cn, tv, type VariantProps } from "tailwind-variants";

const PostBaseStyles = tv({
  slots: {
    base: [
      "bg-white",
      "rounded-2xl",
      "pl-4",
      "pr-4",
      "md:pl-12",
      "md:pr-12",
      "pt-6",
      "pb-6",
      "md:pt-8",
      "md:pb-8",
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

  /** Navigation via onClick handler */
  onClick?: () => void;
}

/**
 * Base layout wrapper for a post, including an avatar section
 * and content area.
 */
export const PostBase: React.FC<PostBaseProps> = ({
  className,
  onClick,
  ...props
}) => {
  const { base } = PostBaseStyles(props);

  return (
    <div
      className={cn(
        base(),
        className,
        onClick
          ? "cursor-pointer focus-visible:ring-2 focus-visible:ring-slate-300"
          : undefined
      )}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {props.children}
    </div>
  );
};
