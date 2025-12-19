"use client";

import * as RadixToggle from "@radix-ui/react-toggle";
import { tv, type VariantProps } from "tailwind-variants";
import { ReplyFilled, ReplyOutline } from "../icons/generated";
import { Label } from "../typography/Label";

const toggleStyles = tv({
  slots: {
    base: [
      "inline-flex",
      "items-center",
      "justify-center",
      "gap-2",
      "h-8",
      "px-3",
      "py-2",
      "rounded-full",
      "transition-all",
      "duration-150",
      "ease-in-out",
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-offset-2",
      "disabled:opacity-50",
      "disabled:pointer-events-none",
      "cursor-pointer",
    ],
    icon: ["inline-flex"],
    label: [],
  },
  variants: {
    pressed: {
      true: {
        base: ["hover:bg-violet-50", "hover:text-violet-600"],
        icon: [
          "text-violet-600",
          "hover:transition-all",
          "hover:duration-300",
          "hover:ease-out",
        ],
        label: [
          "text-inherit",
          "hover:transition-all",
          "hover:duration-300",
          "hover:ease-out",
        ],
      },
      false: {
        base: ["hover:bg-violet-50", "hover:text-violet-600"],
        icon: [
          "text-inherit",
          "hover:transition-all",
          "hover:duration-350",
          "hover:ease-in-out",
        ],
        label: [
          "text-inherit",
          "hover:transition-all",
          "hover:duration-350",
          "hover:ease-in-out",
        ],
      },
    },
  },
});
type ToggleVariants = VariantProps<typeof toggleStyles>;

interface ToggleProps extends ToggleVariants {
  ariaLabel: string;
  labelText: string;
  pressed?: boolean;
  onToggle: (toggled: boolean) => void;
  disabled?: boolean;
}

export const Toggle = ({
  ariaLabel,
  labelText,
  pressed = false,
  onToggle,
  disabled = false,
}: ToggleProps) => {
  const { base, icon, label: labelSlot } = toggleStyles({ pressed });

  return (
    <RadixToggle.Root
      aria-label={ariaLabel}
      className={base()}
      pressed={pressed}
      onPressedChange={onToggle}
      disabled={disabled}
    >
      <span
        className={icon()}
        aria-hidden="true"
        aria-label={pressed ? "ReplyFilled" : "ReplyOutline"}
      >
        {pressed ? <ReplyFilled /> : <ReplyOutline />}
      </span>
      <span className={labelSlot()}>
        <Label as="span" size="md">
          {labelText}
        </Label>
      </span>
    </RadixToggle.Root>
  );
};
