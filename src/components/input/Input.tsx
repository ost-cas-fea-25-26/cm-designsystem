"use client";

import * as RadixForm from "@radix-ui/react-form";
import React, { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import { labelStyles, placeholderStyles } from "../typography/styles";
import { ValidationMessage } from "../typography/ValidationMessage";
import type { IconBaseProps } from "../icons/IconBase";

const inputStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-1"],
    controlContainer: ["relative", "inline-block"],
    control: [
      "w-full",
      "ring",
      "focus:ring-2",
      "ring-slate-200",
      "hover:ring-violet-600",
      "focus-visible:ring-violet-600",
      "focus-within:ring-violet-600",
      "focus-visible:outline-none",
      "bg-slate-50",
      "rounded-lg",
      "p-4",
      "text-slate-700",
      "transition",
      "duration-300",
      "ease-in-out",
    ],
    icon: ["absolute", "w-4", "h-4", "right-4", "top-4.5"],
    message: ["text-error"],
  },
  variants: {
    hasIcon: {
      true: { control: ["pr-10"] },
      false: { control: ["pr-4"] },
    },
  },
});

type InputVariants = VariantProps<typeof inputStyles>;

interface InputProps extends InputVariants {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  isRequired?: boolean;
  children?: React.ReactElement<IconBaseProps>;
  onChange: (value: string) => void;
}

export const Input = ({
  type = "text",
  isRequired = false,
  ...props
}: InputProps) => {
  const { base, controlContainer, control, message, icon } = inputStyles({
    hasIcon: !!props.children,
    ...props,
  });
  const [value, setValue] = useState("");

  return (
    <RadixForm.Field name={props.name} className={base(props)}>
      {/* Label */}
      <RadixForm.Label>
        <Label size="md">{props.label}</Label>
      </RadixForm.Label>

      {/* Control */}
      <div className={controlContainer(props)}>
        <RadixForm.Control asChild>
          <input
            className={`${control(props)} ${labelStyles({ size: "md" })} ${placeholderStyles()}`}
            type={type}
            required={isRequired}
            placeholder={props.placeholder}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => props.onChange(value)}
          />
        </RadixForm.Control>
        {props.children &&
          React.cloneElement(props.children, { className: icon(props) })}
      </div>

      {/* Validation Messages */}
      <div className={message(props)}>
        {isRequired && (
          <RadixForm.Message match="valueMissing">
            <ValidationMessage>{`${props.name} is required`}</ValidationMessage>
          </RadixForm.Message>
        )}
        <RadixForm.Message match="typeMismatch">
          <ValidationMessage>{`${props.name} is invalid`}</ValidationMessage>
        </RadixForm.Message>
      </div>
    </RadixForm.Field>
  );
};
