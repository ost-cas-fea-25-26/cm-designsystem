import * as RadixAvatar from "@radix-ui/react-avatar";
import { tv, type VariantProps } from "tailwind-variants";
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

interface AvatarProps extends AvatarVariants {
  label: string;
  size: AvatarSize;
  src: string;
  children: React.ReactNode;
  onClick: () => void;
  onActionClick?: () => void;
}

export const Avatar = (props: AvatarProps) => {
  const { base, avatar, action } = avatarStyles(props);
  return (
    <RadixAvatar.Root onClick={props.onClick} className={base(props)}>
      <RadixAvatar.Image
        src={props.src}
        alt={props.label}
        className={avatar(props)}
      />
      {props.size === "xl" && props.onActionClick && (
        <div className={action(props)}>
          <RoundButton
            intent="primary"
            label={`Edit ${props.label}`}
            onClick={props.onActionClick ?? (() => {})}
          >
            <Edit />
          </RoundButton>
        </div>
      )}

      <RadixAvatar.Fallback>
        <div className={avatar(props)}>{props.children}</div>
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};
