import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";

const buttonStyles = tv({
  base: [
    "text-white",
    "rounded-lg",
    "hover:border-3",
    "hover:border-solid",
    "active:border-4",
    "transition",
    "duration-300",
    "ease-in-out",
  ],
  variants: {
    intent: {
      primary: [
        "bg-slate-600",
        "hover:bg-slate-700",
        "hover:border-slate-100",
        "active:border-violet-200",
      ],
      secondary: [
        "bg-violet-600",
        "hover:bg-violet-700",
        "hover:border-violet-100",
        "active:border-violet-200",
      ],
      tertiary: [
        "bg-gradient-to-r",
        "from-pink-500",
        "from-50%",
        "to-violet-600",
        "hover:from-30%",
        "hover:border-violet-100",
        "active:from-20%",
        "active:border-violet-200",
      ],
    },
    size: {
      md: ["pt-2", "pb-2", "pl-3", "pr-3"],
      lg: ["pt-3", "pb-3", "pl-6", "pr-6"],
    },
  },
});

type ButtonVariants = VariantProps<typeof buttonStyles>;
type ButtonIntent = "primary" | "secondary" | "tertiary";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ButtonVariants {
  intent: ButtonIntent;
  size: ButtonSize;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={buttonStyles(props)}>
      <Label as="span" size="md">
        {props.children}
      </Label>
    </button>
  );
};
