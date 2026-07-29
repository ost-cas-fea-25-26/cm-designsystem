import { cn, tv, type VariantProps } from "tailwind-variants";
import {
  AccessibleButton,
  type BaseAccessibleButtonProps,
} from "../accessible-button/AccessibleButton";
import { Avatar } from "../avatar/Avatar";

const naviUserButtonStyles = tv({
  base: [
    "flex",
    "flex-col",
    "gap-1",
    "transition",
    "duration-300",
    "ease-in-out",
    "text-white",
    "rounded-lg",
    "items-center",
    "pt-3",
    "pb-3",
    "pl-2",
    "pr-2",
  ],
  variants: {
    intent: {
      secondary: ["bg-violet-600", "hover:bg-violet-700"],
    },
  },
});

type NaviUserButtonVariants = VariantProps<typeof naviUserButtonStyles>;
type NaviUserButtonIntent = "secondary";

/**
 * Props for the NaviUserButton component.
 *
 * @inheritdoc BaseAccessibleButtonProps
 * @inheritdoc NaviUserButtonVariants
 */
interface NaviUserButtonProps
  extends NaviUserButtonVariants, BaseAccessibleButtonProps {
  /**
   * Visual intent of the button (controls background color, hover, and active styles).
   */
  intent?: NaviUserButtonIntent;

  /**
   * Source URL for the user avatar image.
   */
  src: string;

  /**
   * Accessible alt text describing the avatar.
   * Required for proper screen reader support.
   */
  alt: string;
}

/**
 * A user-focused navigation button that displays a user avatar and behaves
 * like an accessible, keyboard-friendly button.
 */
export const NaviUserButton: React.FC<NaviUserButtonProps> = ({
  intent = "secondary",
  className,
  ...props
}: NaviUserButtonProps) => {
  return (
    <AccessibleButton
      className={cn(naviUserButtonStyles({ intent, ...props }), className)}
      {...props}
    >
      <Avatar
        alt={props.alt}
        size="sm"
        src={props.src}
        onAvatarClick={props.onClick}
      />
    </AccessibleButton>
  );
};
