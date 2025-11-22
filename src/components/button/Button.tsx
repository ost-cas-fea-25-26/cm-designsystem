import { cn, tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import type { IconBaseProps } from "../icons/IconBase";
import {
  AccessibleButton,
  type BaseAccessibleButtonProps,
} from "../accessible-button/AccessibleButton";

const buttonStyles = tv({
  base: [
    "flex",
    "gap-2",
    "text-white",
    "rounded-lg",
    "hover:ring-3",
    "hover:ring-solid",
    "active:ring-4",
    "transition",
    "duration-350",
    "active:duration-300",
    "ease-in-out",
    "flex",
    "justify-center",
    "w-full",
    "cursor-pointer",
  ],
  variants: {
    intent: {
      primary: [
        "bg-slate-600",
        "hover:bg-slate-700",
        "hover:ring-slate-100",
        "active:ring-violet-200",
      ],
      secondary: [
        "bg-violet-600",
        "hover:bg-violet-700",
        "hover:ring-violet-100",
        "active:ring-violet-200",
      ],
      tertiary: [
        "bg-linear-to-r",
        "from-pink-500",
        "from-0%",
        "to-100%",
        "to-violet-600",
        "hover:to-80%",
        "hover:ring-violet-100",
        "active:to-70%",
        "active:ring-violet-200",
      ],
    },
    size: {
      md: ["pt-3", "pb-3", "pl-3", "pr-3"],
      lg: ["pt-4", "pb-4", "pl-6", "pr-6"],
    },
  },
});

type ButtonVariants = VariantProps<typeof buttonStyles>;
type ButtonIntent = "primary" | "secondary" | "tertiary";
type ButtonSize = "md" | "lg";

/**
 * Props for the Button component.
 *
 * @inheritdoc BaseAccessibleButtonProps
 * @inheritdoc ButtonVariants
 */
interface ButtonProps extends ButtonVariants, BaseAccessibleButtonProps {
  /**
   * Visual intent of the button (controls background color, hover, and active styles).
   */
  intent: ButtonIntent;

  /**
   * Visual size of the button (padding and spacing).
   */
  size: ButtonSize;

  /**
   * Optional icon element rendered alongside the button label.
   */
  icon?: React.ComponentType<IconBaseProps>;

  /**
   * Visible text label displayed inside the button.
   */
  children: string;
}

/**
 * A fully accessible, stylable button component.
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  ...props
}: ButtonProps) => {
  return (
    <AccessibleButton className={cn(className, buttonStyles(props))} {...props}>
      <Label as="span" size="md">
        {props.children}
      </Label>
      {props.icon && <props.icon />}
    </AccessibleButton>
  );
};
