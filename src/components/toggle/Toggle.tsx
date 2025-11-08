import * as RadixToggle from "@radix-ui/react-toggle";
import { useState, type ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { HeartFilled, HeartOutline } from "../icons/generated";
import { Label } from "../typography/Label";

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
    label: [
      "transition-all duration-300 ease-out", // dissolve + slide
      "opacity-100 translate-y-0",
    ],
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
    animating: {
      true: {
        label: "opacity-0 -translate-y-1", // Text verschwindet nach oben
      },
      false: {
        label: "opacity-100 translate-y-0", // Text erscheint wieder
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
  likes?: number;
}

export const Toggle = ({ ariaLabel, pressed, likes = 0 }: ToggleProps) => {
  /*
   * no likes: "Like"
   * clicked: "Liked"
   * clicked + 2s: "1 Like"
   * likes > 0: "x Likes"
   */
  const [animating, setAnimating] = useState(false);
  const [label, setLabel] = useState(
    likes ? (likes === 1 ? `${likes} Like` : `${likes} Likes`) : "Like"
  );

  const { base, icon, label: labelSlot } = toggleStyles({ pressed, animating });

  const handleClick = () => {
    setLabel("Liked");
    setAnimating(true);
    setTimeout(() => {
      setLabel(`${likes + 1} Like`);
      setAnimating(false);
    }, 2000);
  };

  return (
    <RadixToggle.Root
      aria-label={ariaLabel}
      className={base()}
      onClick={handleClick}
    >
      <span className={icon()}>
        {pressed ? <HeartFilled /> : <HeartOutline />}
      </span>

      <span className={labelSlot()}>
        <Label as="span" size="md">
          {label}
        </Label>
      </span>
    </RadixToggle.Root>
  );
};
