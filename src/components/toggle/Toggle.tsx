import * as RadixToggle from "@radix-ui/react-toggle";
import { tv, type VariantProps } from "tailwind-variants";
import { HeartFilled, HeartOutline } from "../icons/generated";
import { Label } from "../typography/Label";
import type { ReactNode } from "react";

const toggleStyles = tv({
  slots: {
    root: [
      // layout + spacing + shape
      "inline-flex items-center justify-center gap-2 h-8 px-3 py-2 rounded-full",
      // interaction & motion
      "transition-all duration-150 ease-in-out",
      // focus styles & disabled state
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
    ],
    icon: "inline-flex",
    label: "",
  },
  variants: {
    pressed: {
      false: {
        root: "bg-transparent hover:bg-pink-50 hover:text-pink-600",
        icon: "text-inherit",
        label: "text-inherit",
      },
      true: {
        root: "text-pink-900",
        icon: "text-pink-500",
        label: "text-pink-900",
      },
    },
  },
  defaultVariants: {
    pressed: false,
  },
});

type ToggleVariants = VariantProps<typeof toggleStyles>;

interface ToggleProps extends ToggleVariants {
  children: ReactNode;
  ariaLabel: string;
  pressed?: boolean;
}

export const Toggle = ({ ariaLabel, pressed, children }: ToggleProps) => {
  const { root, icon } = toggleStyles({ pressed });

  return (
    <RadixToggle.Root aria-label={ariaLabel} className={root()}>
      <span className={icon()}>
        {pressed ? <HeartFilled /> : <HeartOutline />}
      </span>

      <Label as="span" size="md">
        {children}
      </Label>
    </RadixToggle.Root>
  );
};
