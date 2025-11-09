import * as RadixToggle from "@radix-ui/react-toggle";
import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { HeartFilled, HeartOutline } from "../icons/generated";
import { Label } from "../typography/Label";

const toggleStyles = tv({
  slots: {
    base: [
      "inline-flex items-center justify-center gap-2 h-8 px-3 py-2 rounded-full",
      "transition-all duration-150 ease-in-out",
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
        icon: "text-inherit hover:transition-all hover:duration-350 hover:ease-in-out",
        label:
          "text-inherit hover:transition-all hover:duration-350 hover:ease-in-out",
      },
      true: {
        base: "", // Farbe für pressed wird über label festgelegt
        icon: "text-pink-500 transition-all duration-300 ease-out",
        label: "text-pink-900 transition-transform duration-300 ease-out",
      },
    },
    hasLikes: {
      true: {
        base: "hover:bg-pink-50 hover:text-pink-600",
        icon: "text-pink-500",
        label: "text-pink-900",
      },
      false: "",
    },
    animating: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // pressed + animating --> Label ausblenden / nach oben verschieben
    {
      pressed: true,
      animating: true,
      class: {
        label: "opacity-0 -translate-y-1 transition-all duration-300 ease-out",
        icon: "text-pink-500",
      },
    },
    // pressed + nicht animating --> Label sichtbar
    {
      pressed: true,
      animating: false,
      class: {
        label:
          "opacity-100 translate-y-0 text-pink-900 transition-all duration-300 ease-out",
        icon: "text-pink-500",
      },
    },
    // pressed + hasLikes --> überschreibt Hover-Farbe
    {
      pressed: true,
      hasLikes: true,
      class: {
        label: "text-pink-900",
      },
    },
    // not pressed + animating
    {
      pressed: false,
      animating: true,
      class: {
        label: "opacity-0 -translate-y-1 transition-all duration-300 ease-out",
      },
    },
    // not pressed + nicht animating
    {
      pressed: false,
      animating: false,
      class: {
        label: "opacity-100 translate-y-0 transition-all duration-300 ease-out",
      },
    },
  ],
  defaultVariants: {
    pressed: false,
    animating: false,
  },
});

type ToggleVariants = VariantProps<typeof toggleStyles>;

interface ToggleProps extends ToggleVariants {
  ariaLabel: string;
  pressed?: boolean;
  likes?: number;
  onLikeChange: (liked: boolean) => void;
}

export const Toggle = ({
  ariaLabel,
  pressed = false,
  likes = 0,
  onLikeChange,
}: ToggleProps) => {
  const [animating, setAnimating] = useState(false);
  const [selected, setSelected] = useState(pressed);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [label, setLabel] = useState(
    likes ? (likes === 1 ? `${likes} Like` : `${likes} Likes`) : "Like"
  );

  const {
    base,
    icon,
    label: labelSlot,
  } = toggleStyles({
    pressed: selected,
    hasLikes: currentLikes > 0,
    animating,
  });

  const handleClick = () => {
    const nextSelected = !selected;

    setSelected(nextSelected);
    setLabel(nextSelected ? "Liked" : "Like"); 
    onLikeChange?.(nextSelected);

    // 2s warten, dann animieren
    setTimeout(() => {
      const nextLikes = currentLikes + (nextSelected ? 1 : -1);

      setCurrentLikes(nextLikes);
      setLabel(nextLikes === 1 ? "1 Like" : `${nextLikes} Likes`);
      setAnimating(true);

      setTimeout(() => setAnimating(false), 300);
    }, 2000);
  };

  return (
    <RadixToggle.Root
      aria-label={ariaLabel}
      className={base()}
      onClick={handleClick}
    >
      <span className={icon()}>
        {selected ? <HeartFilled /> : <HeartOutline />}
      </span>
      <span className={labelSlot()}>
        <Label as="span" size="md">
          {label}
        </Label>
      </span>
    </RadixToggle.Root>
  );
};
