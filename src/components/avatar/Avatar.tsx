import { tv, type VariantProps } from "tailwind-variants";
import * as RadixAvatar from "@radix-ui/react-avatar";

const avatarStyles = tv({
  base: ["rounded-full", "transition", "duration-300", "ease-in-out"],
  variants: {
    size: {
      sm: ["w-10", "h-10", "hover:scale-105"],
      md: [
        "w-16",
        "h-16",
        "border",
        "border-solid",
        "border-slate-100",
        "border-6",
        "hover:scale-105",
      ],
      lg: [
        "w-24",
        "h-24",
        "border",
        "border-solid",
        "border-slate-100",
        "border-6",
        "hover:scale-95",
      ],
      xl: [
        "w-40",
        "h-40",
        "border",
        "border-solid",
        "border-slate-100",
        "border-6",
      ],
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
}

export const Avatar = (props: AvatarProps) => {
  return (
    <RadixAvatar.Root onClick={props.onClick}>
      <RadixAvatar.Image
        src={props.src}
        alt={props.label}
        className={avatarStyles(props)}
      />
      <RadixAvatar.Fallback
        delayMs={600}
        className={avatarStyles(props)}
        aria-label={props.label}
      >
        {props.children}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};
