import * as RadixToggle from "@radix-ui/react-toggle";
import { useState, type ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { HeartFilled, HeartOutline } from "../icons/generated";
import { Label } from "../typography/Label";

const toggleStyles = tv({
  // todo: add intent violett oder pink (see button primary / secondary)
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
    label: ""
  },
  variants: {
    pressed: {
      false: {
        base: "bg-transparent hover:bg-pink-50 hover:text-pink-600",
        icon: "text-inherit hover:transition-all hover:duration-350 hover:ease-in-out",
        label: "text-inherit hover:transition-all hover:duration-350 hover:ease-in-out"
        
      },
      true: {
        base: "",
        icon: "text-pink-500 transition-all duration-300  ease-out",
        label: "text-pink-900  transition-transform delay-2000 duration-300  ease-out",        
        // todo: label "liked" to "1 Like" transition
      },      
    },
    hasData: {
      true: {
        base:"hover:bg-pink-50",        
        icon: "text-pink-500 ",
        label: "text-pink-900  hover:text-pink-600 ",                
      },
      false: ""
    }
    
  },

  // compoundVariants: [
  //   // pressed like + animating  -> from "Liked" to "x Likes"
  //   {
  //     pressed: true,
  //     animating: true,
  //     class: {
  //       label: "opacity-0 -translate-y-1 text-pink-900",        
  //       icon: "text-pink-500",
  //     },
  //   },
  //   // pressed like + not animating (does this case exist?) -> stays "x Likes"
  //   {
  //     pressed: true,
  //     animating: false,
  //     class: {
  //       label: "opacity-100 translate-y-0 text-pink-900",
  //       icon: "text-pink-500",
  //     },
  //   },
  //   // not pressed like + animating -> from "Like" to "1 Like"
  //   {
  //     pressed: false,
  //     animating: true,
  //     class: {
  //       label: "opacity-0 -translate-y-1",
  //     },
  //   },
  //    // not pressed like + not animating -> stays "Like"
  //   {
  //     pressed: false,
  //     animating: false,
  //     class: {
  //       label: "opacity-100 translate-y-0",
  //     },
  //   },
  // ],
  defaultVariants: {
    pressed: false,
    animating: false,
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
  hasData?: boolean;
  // onChange: () => void;
}

export const Toggle = ({ ariaLabel, pressed = false, hasData = false }: ToggleProps) => {
  /*
   * no likes: "Like"
   * clicked: "Liked"
   * clicked + 2s: "1 Like"
   * likes > 0: "x Likes"
   */
  // const [animating, setAnimating] = useState(false);
  const [selected, setSelected] = useState(pressed);
  // const [label, setLabel] = useState(
  //   hasData ? (hasData  ? `${hasData} Like` : `${hasData} Likes`) : "Like"
  // );

  
  const { base, icon, label: labelSlot } = toggleStyles({ pressed: selected, hasData });

  const handleClick = () => {
    // does it need an isPressed state?
    // setLabel("Liked");
    setSelected(!selected);
    // setAnimating(true);
    setTimeout(() => {
      // todo: handled by parent
        // setLabel(`${hasData + 1} Like`);
        // todo: let parent know to update count

        // setAnimating(false);
      }, 2000);
    
  }

  return (
    <RadixToggle.Root
      aria-label={ariaLabel}
      className={base()}
      onClick={handleClick}
    >
      <span className={icon()}>
        {selected ? <HeartFilled /> : <HeartOutline />}        
      </span>

{/* 
// todo: transition from "Liked" to "1 Like"
<span
        className={`absolute transition-all duration-500 ${
          showNew ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
        }`}
>
        Loading...
</span>
<span
        className={`absolute transition-all duration-500 ${
          showNew ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
>
        Complete!
</span> */}

      <span className={labelSlot()}>
        <Label as="span" size="md">
          // todo: label from parent after onChange
          {label}
        </Label>
      </span>
    </RadixToggle.Root>
  );
}; 
