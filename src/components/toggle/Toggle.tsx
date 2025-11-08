import * as RadixToggle from "@radix-ui/react-toggle";
import { tv, type VariantProps } from "tailwind-variants";
import { HeartFilled, HeartOutline } from "../icons/generated";
import { Label } from "../typography/Label";
import type { ReactNode } from "react";


const toggleStyles = tv({
  slots: {
    
    base: [
      // layout + spacing + shape
      "inline-flex items-center justify-center gap-2 h-8 px-3 py-2 rounded-full",
      // interaction & motion
      "transition-all duration-150 ease-in-out",
      // focus styles
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
    ],
    icon: "inline-flex",
    label: "",
  },
  variants: {
    pressed: {
      false: {
        base: "bg-transparent hover:bg-pink-50 hover:text-pink-600",
        icon: "text-inherit",
        label: "text-inherit",
      },
      true: {
        base: "text-pink-900",
        icon: "text-pink-500",
        label: "text-pink-900",
      },
    },
  },
  defaultVariants: {
    pressed: false,
  },
});



/*
 * Varianten:
 * Ohne Data
 * - pressed: active / "Liked"
 *  - todo: transition for 2s to "1 Like" after click
 * - not pressed: 
 *  - default: schwarzes "Like"
 *  - hover: pinkes "Like" mit pinkem Hintergrund
 * 
 * Mit Data (Es gibt schon Likes)
 * - pressed: active / "x Likes" (text: pink-900, icon: pink-500) + 1 like (achtung: state / data)
 * - not pressed:
 *  - default: "x Likes" (text: pink-900, icon: pink-500)
 *  - hover: pinkes "x Likes" mit pinkem Hintergrund (text: pink-500, icon: pink-500)
 */



type ToggleVariants = VariantProps<typeof toggleStyles>;

interface ToggleProps extends ToggleVariants {
  children: ReactNode;
  ariaLabel: string;
  pressed?: boolean;
}

export const Toggle = ({ ariaLabel, pressed, children }: ToggleProps) => {
  const { base, icon } = toggleStyles({ pressed });

  return (
    <RadixToggle.Root aria-label={ariaLabel} className={base()}>
      <span className={icon()}>
        {pressed ? <HeartFilled /> : <HeartOutline />}
      </span>

      <Label as="span" size="md">
        {children}
      </Label>
    </RadixToggle.Root>
  );
};
