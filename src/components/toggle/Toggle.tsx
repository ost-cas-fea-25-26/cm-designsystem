import { Toggle as RadixToggle } from "radix-ui";
import { tv, type VariantProps } from "tailwind-variants";
import { HeartFilled, HeartOutline } from "../icons/generated";
import { Label } from "../typography/Label";
import type { ReactNode } from "react";

const toggleStyles = tv({
  base: [
    // layout + spacing + shape
    "inline-flex items-center justify-center gap-2 h-8 px-3 py-2 rounded-full",
    // interaction & motion
    "transition-all duration-150 ease-in-out",
    // focus styles & disabled state
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  ],
  variants: {
    pressed: {
      // not sure if w-20  is needed
      false: "bg-transparent hover:bg-pink-50 hover:text-pink-600",
      // NOTE: w-23 requires custom Tailwind config; if unavailable use w-[92px] (23*4) or a standardized size.
      // not sure if w-23 is needed
      true: " text-pink-900",
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
  return (
    <RadixToggle.Root
      aria-label={ariaLabel}
      className={toggleStyles({ pressed })}
    >    
         {pressed ? <HeartFilled /> : <HeartOutline />}

      <Label as="span" size="md">
        {children}
      </Label>
    </RadixToggle.Root>
  );
};
