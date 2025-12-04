import { cn, tv, type VariantProps } from "tailwind-variants";
import { Avatar } from "../../components/avatar/Avatar";

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
    avatar: ["absolute", "-left-5", "top-6"],
  },
});

type PostBaseVariants = VariantProps<typeof PostBaseStyles>;

export interface PostBaseProps extends PostBaseVariants {
  /** Avatar image URL */
  src: string;

  /**
   *  Triggered when the avatar is clicked.
   */
  onAvatarClick: () => void;

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
  const { base, avatar } = PostBaseStyles(props);

  return (
    <div className={cn(base(), props.className)}>
      <div className={avatar()}>
        <Avatar
          alt="Profile"
          size="md"
          src={props.src}
          onAvatarClick={props.onAvatarClick}
        />
      </div>

      {props.children}
    </div>
  );
};
