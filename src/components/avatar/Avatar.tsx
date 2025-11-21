import * as RadixAvatar from "@radix-ui/react-avatar";
import { tv, type VariantProps } from "tailwind-variants";
import fallbackImage from "../../assets/fallback.png";
import { Edit } from "../icons/generated";
import { RoundButton } from "../round-button/RoundButton";

const avatarStyles = tv({
  slots: {
    base: ["relative", "inline-block"],
    avatar: [
      "rounded-full",
      "transition",
      "duration-300",
      "ease-in-out",
      "min-w-10",
      "min-h-10",
      "flex",
      "items-center",
      "justify-center",
    ],
    action: ["absolute", "bottom-2", "right-2"],
  },
  variants: {
    isClickable: {
      true: { base: ["cursor-pointer"] },
    },
    size: {
      sm: { avatar: ["w-10", "h-10", "hover:scale-105"] },
      md: {
        avatar: [
          "w-16",
          "h-16",
          "border",
          "border-solid",
          "border-slate-100",
          "border-6",
          "hover:scale-105",
        ],
      },
      lg: {
        avatar: [
          "w-24",
          "h-24",
          "border",
          "border-solid",
          "border-slate-100",
          "border-6",
          "hover:scale-95",
        ],
      },
      xl: {
        avatar: [
          "w-40",
          "h-40",
          "border",
          "border-solid",
          "border-slate-100",
          "border-6",
        ],
      },
    },
  },
});

type AvatarVariants = VariantProps<typeof avatarStyles>;
type AvatarSize = "sm" | "md" | "lg" | "xl";

/**
 * Props for the Avatar component.
 */
interface AvatarProps extends AvatarVariants {
  /**
   * Alternative text describing the avatar image.
   */
  alt: string;

  /**
   * Controls the visual size of the avatar.
   */
  size: AvatarSize;

  /**
   * The URL source of the avatar image.
   */
  src: string;

  /**
   * Accessible label for the action button that appears on extra-large (`xl`)
   * avatars when `onActionClick` is provided.
   */
  actionAriaLabel?: string;

  /**
   * Optional fallback content rendered when the image cannot load.
   * Typically initials or an icon.
   */
  children?: React.ReactNode;

  /**
   * Click handler for the entire avatar.
   * Makes the outer wrapper clickable.
   */
  onAvatarClick?: () => void;

  /**
   * Optional click handler for the action button.
   * Only visible when:
   * - `size === "xl"`
   * - `onActionClick` is provided
   *
   * Useful for “Edit avatar” or “Change photo” actions.
   */
  onActionClick?: () => void;
}

/**
 * A flexible and accessible user avatar component.
 * Built on top of Radix UI’s `Avatar` primitives and styled with Tailwind variants.
 */
export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const { base, avatar, action } = avatarStyles(props);
  return (
    <RadixAvatar.Root
      onClick={props.onAvatarClick}
      className={base({ isClickable: !!props.onAvatarClick, ...props })}
    >
      <RadixAvatar.Image
        src={props.src}
        alt={props.alt}
        className={avatar(props)}
      />
      {props.size === "xl" && props.onActionClick && (
        <div className={action(props)}>
          <RoundButton
            intent="primary"
            ariaLabel={props.actionAriaLabel ?? ""}
            onClick={props.onActionClick ?? (() => {})}
          >
            <Edit />
          </RoundButton>
        </div>
      )}

      <RadixAvatar.Fallback>
        <img src={fallbackImage} alt={props.alt} className={avatar(props)} />
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};
