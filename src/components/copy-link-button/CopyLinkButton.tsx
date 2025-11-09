import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Share } from "../icons/generated";
import { Label } from "../typography/Label";

const copyLinkButtonStyles = tv({
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
    ],
    icon: ["inline-flex"],
    label: [],
  },
  variants: {
    pressed: {
      true: {
        base: ["bg-slate-100"],
        icon: [],
        label: [],
      },
      false: {
        base: ["hover:bg-slate-100"],
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

/*
hover -> onClick 
// On click
// Change to: "Active, Share";
// Animate: Dissolve;
animation-timing-function: ease-in-out;
animation-duration: 350ms;

*/

type ShareButtonVariants = VariantProps<typeof copyLinkButtonStyles>;
interface ShareButtonProps extends ShareButtonVariants {
  onClick: () => void;
}

export const CopyLinkButton = ({ onClick }: ShareButtonProps) => {
  const [pressedState, setPressed] = useState(false);

  const {
    base,
    icon: iconSlot,
    label: labelSlot,
  } = copyLinkButtonStyles({ pressed: pressedState });

  const handleClick = () => {
    console.log("CLICK");
    setPressed(!pressedState);
    onClick();
  };

  return (
    <button onClick={handleClick} className={base()}>
      <span className={iconSlot()} aria-hidden="true">
        <Share />
      </span>

      <span className={labelSlot()}>
        <Label as="span" size="md">
          {pressedState ? "Link copied" : "Copy Link"}
        </Label>
      </span>
    </button>
  );
};
