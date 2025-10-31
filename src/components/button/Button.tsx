import { convertStyleToString, type Style } from "../Common/Style";
import { Label } from "../typography/Label";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "md" | "lg";

export interface ButtonProps {
  size: ButtonSize;
  variant?: ButtonVariant;
  text: string;
}

const ButtonStyle: Style<ButtonVariant, ButtonSize> = {
  variants: {
    primary: {
      default: "bg-slate-600",
      hover: "hover:bg-slate-700 hover:border-slate-100",
      active: "active:border-slate-200",
    },
    secondary: {
      default: "bg-violet-600",
      hover: "hover:bg-violet-700 hover:border-violet-100 ",
      active: "active:border-violet-200",
    },
    tertiary: {
      default: "bg-gradient-to-r from-pink-500 from-50% to-violet-600",
      hover: "hover:from-30% hover:border-violet-100",
      active: "active:from-20% active:border-violet-200",
    },
  },
  sizes: {
    md: "pt-2 pb-2 pl-3 pr-3",
    lg: "pt-3 pb-3 pl-6 pr-6",
  },
  default:
    "text-white rounded-lg hover:border-3 hover:border-solid active:border-4 transition duration-300 ease-in-out",
};

export const Button = ({ size, variant = "primary", text }: ButtonProps) => {
  return (
    <button
      className={`${convertStyleToString<ButtonVariant, ButtonSize>(ButtonStyle, variant, size)}`}
    >
      <Label as="span" size="md">
        {text}
      </Label>
    </button>
  );
};
