import * as RadixForm from "@radix-ui/react-form";
import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import { ValidationMessage } from "../typography/ValidationMessage";

const textareaStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-1", "w-full", "h-full"],
    control: [
      "w-full",
      "h-full",
      "ring",
      "hover:ring-2",
      "focus:ring-2",
      "ring-slate-200",
      "hover:ring-slate-300",
      "focus:ring-violet-600",
      "focus-visible:ring-violet-600",
      "focus-within:ring-violet-600",
      "focus-visible:outline-none",
      "bg-slate-100",
      "rounded-lg",
      "p-4",
      "transition",
      "duration-300",
      "ease-in-out",
      "font-medium",
      "text-slate-900",
      "text-[20px]/[135%]",
      "tracking-normal",
      "placeholder:font-medium",
      "placeholder:text-slate-500",
      "placeholder:text-[20px]/[135%]",
      "placeholder:tracking-normal",
      "resize-none",
    ],
    message: ["text-error"],
  },
});

type TextareaVariants = VariantProps<typeof textareaStyles>;

interface TextareaProps extends TextareaVariants {
  name: string;
  placeholder: string;
  label?: string;
  isRequired?: boolean;
  onChange: (value: string) => void;
}

export const Textarea = ({ isRequired = false, ...props }: TextareaProps) => {
  const { base, control, message } = textareaStyles({
    ...props,
  });
  const [value, setValue] = useState("");

  return (
    <RadixForm.Field name={props.name} className={base(props)}>
      {/* Label */}
      {props.label && (
        <RadixForm.Label>
          <Label size="md">{props.label}</Label>
        </RadixForm.Label>
      )}

      {/* Control */}
      <RadixForm.Control asChild>
        <textarea
          className={control(props)}
          required={isRequired}
          placeholder={props.placeholder}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => props.onChange(value)}
        />
      </RadixForm.Control>

      {/* Validation Messages */}
      <div className={message(props)}>
        {isRequired && (
          <RadixForm.Message match="valueMissing">
            <ValidationMessage>{`${props.name} is required`}</ValidationMessage>
          </RadixForm.Message>
        )}
      </div>
    </RadixForm.Field>
  );
};
