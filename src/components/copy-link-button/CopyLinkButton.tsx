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
      // "transition-colors",
      // "duration-150",
      // "ease-in-out",
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-offset-2",
      "disabled:opacity-50",
      "disabled:pointer-events-none",
      "hover:bg-slate-100",
      "overflow-hidden",
    ],
    icon: ["inline-flex"],
    label: ["transition-opacity", "duration-350", "ease-in-out"],
  },
  variants: {
    pressed: {
      false: {},
      true: {
        base: ["bg-slate-100"],
      },
    },
    animating: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      pressed: true,
      animating: true,
      class: {
        label: ["opacity-0"],
      },
    },
    {
      pressed: true,
      animating: false,
      class: {
        label: ["opacity-100"],
      },
    },
    {
      pressed: false,
      animating: true,
      class: {
        label: ["opacity-0"],
      },
    },
    {
      pressed: false,
      animating: false,
      class: {
        label: ["opacity-100"],
      },
    },
  ],
  defaultVariants: {
    pressed: false,
    animating: false,
  },
});

type ShareButtonVariants = VariantProps<typeof copyLinkButtonStyles>;
interface ShareButtonProps extends ShareButtonVariants {
  onClick: () => void;
}

export const CopyLinkButton = ({ onClick }: ShareButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const [animating, setAnimating] = useState(false);

  const { base, icon, label } = copyLinkButtonStyles({ pressed, animating });

  const handleClick = () => {
    // Klick -> Pressed
    setPressed(true);
    setAnimating(true);
    onClick();

    // Hover -> Pressed: Dissolve über 350ms
    setTimeout(() => setAnimating(false), 350);

    // Nach 1s Verzögerung -> zurück zu Default
    setTimeout(() => {
      setPressed(false);
      setAnimating(true);
      // Dissolve zurück
      setTimeout(() => setAnimating(false), 350);
    }, 1000);
  };

  return (
    <button className={base()} onClick={handleClick}>
      <span className={icon()} aria-hidden="true">
        <Share />
      </span>
      <span className={label()}>
        <Label as="span" size="md">
          {pressed ? "Link copied" : "Copy Link"}
        </Label>
      </span>
    </button>
  );
};
