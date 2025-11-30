import { cn, tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import type { IconBaseProps } from "../icons/IconBase";

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

type BaseButtonProps = ButtonVariants & {
  intent: ButtonIntent;
  size: ButtonSize;
  onClick: () => void;
  className?: string;
  children?: React.ReactElement<IconBaseProps>;
};

type ButtonWithLabel = BaseButtonProps & {
  label: string;
  ariaLabel?: string;
};

type ButtonIconOnly = BaseButtonProps & {
  label?: undefined;
  ariaLabel: string;
};

type ButtonProps = ButtonWithLabel | ButtonIconOnly;

export const Button = (props: ButtonProps) => {
  const { label, ariaLabel, children, ...rest } = props;

  // Set aria-label when no visible label exists
  const finalAriaLabel = label ? undefined : ariaLabel;

  return (
    <button
      {...rest}
      className={cn(props.className, buttonStyles(props))}
      onClick={props.onClick}
      aria-label={finalAriaLabel}
    >
      <Label as="span" size="md">
        {label}
      </Label>
      {children}
    </button>
  );
};
