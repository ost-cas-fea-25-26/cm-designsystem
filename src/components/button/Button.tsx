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
    <button className={`btn btn-${variant} btn-${size}`}>
      <Label as="span" size="md">
        {text}
      </Label>
    </button>
  );
};
