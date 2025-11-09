import { useEffect, useRef, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Share } from "../icons/generated";
import { Label } from "../typography/Label";

const timedButtonStyles = tv({
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

type TimedButtonVariants = VariantProps<typeof timedButtonStyles>;
interface TimedButtonProps extends TimedButtonVariants {
  onClick: () => void;
  icon?: React.ReactNode;
  label?: string;
  labelActive?: string;
}

export const TimedButton = ({
  onClick,
  icon = <Share />,
  label = "Copy Link",
  labelActive = "Link copied",
}: TimedButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const {
    base,
    icon: iconClass,
    label: labelClass,
  } = timedButtonStyles({ pressed, animating });

  useEffect(() => {
    // Cleanup all timeouts when component unmounts
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, []);

  const handleClick = () => {
    // Klick -> Pressed
    setPressed(true);
    setAnimating(true);
    onClick();

    // Hover -> Pressed: Dissolve über 350ms
    const timeout1 = setTimeout(() => setAnimating(false), 350);
    timeoutsRef.current.push(timeout1);

    // Nach 1s Verzögerung -> zurück zu Default
    const timeout2 = setTimeout(() => {
      setPressed(false);
      setAnimating(true);
      // Dissolve zurück
      const timeout3 = setTimeout(() => setAnimating(false), 350);
      timeoutsRef.current.push(timeout3);
    }, 1000);
    timeoutsRef.current.push(timeout2);
  };

  return (
    <button className={base()} onClick={handleClick}>
      <span className={iconClass()} aria-hidden="true" aria-label="Share">
        {icon}
      </span>
      <span className={labelClass()}>
        <Label as="span" size="md">
          {pressed ? labelActive : label}
        </Label>
      </span>
    </button>
  );
};
