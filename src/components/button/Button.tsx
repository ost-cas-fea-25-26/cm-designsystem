import { Label } from "../typography/Label";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "md" | "lg";

export interface ButtonProps {
  size: ButtonSize;
  variant?: ButtonVariant;
  text: string;
}

export const Button = ({ size, variant = "primary", text }: ButtonProps) => {
  return (
    <button
      className={`${getVariantColor(variant)} ${getPaddingSize(size)} rounded-lg`}
    >
      <Label as="span" size="md" className="text-white">
        {text}
      </Label>
    </button>
  );
};

const getVariantColor = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return "bg-slate-600";
    case "secondary":
      return "bg-violet-200";
    case "tertiary":
      return "bg-pink-600";
  }
};

const getPaddingSize = (size: ButtonSize) => {
  switch (size) {
    case "md":
      return "p-3";
    case "lg":
      return "pt-4 pb-4 pl-6 pr-6";
  }
};
