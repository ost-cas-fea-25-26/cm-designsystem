import { useEffect, useRef, useState } from "react";
import { cnBase, tv, type VariantProps } from "tailwind-variants";
import { Share } from "../icons/generated";
import { Label } from "../typography/Label";
import {
  AccessibleButton,
  type BaseAccessibleButtonProps,
} from "../accessible-button/AccessibleButton";
import type { IconBaseProps } from "../icons/IconBase";

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
    icon: ["w-4", "h-4", "inline-flex"],
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

/**
 * Props for the TimedButton component.
 *
 * @inheritdoc BaseAccessibleButtonProps
 * @inheritdoc TimedButtonVariants
 */
interface TimedButtonProps
  extends TimedButtonVariants,
    BaseAccessibleButtonProps {
  /**
   * Optional icon element rendered alongside the button label.
   */
  icon?: React.ComponentType<IconBaseProps>;

  /**
   * Default label displayed on the button.
   *
   * This is the visible text before the button is clicked or activated.
   */
  label: string;

  /**
   * Active label displayed temporarily after the button is clicked.
   *
   * Typically used to show feedback, e.g., `"Link copied!"`.
   */
  labelActive: string;
}

/**
 * A button component that temporarily changes its label when pressed.
 */
export const TimedButton: React.FC<TimedButtonProps> = ({
  className,
  onClick,
  ...props
}: TimedButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

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
    <AccessibleButton
      className={cnBase(className, base(props))}
      onClick={handleClick}
      {...props}
    >
      {props.icon && (
        <props.icon className={iconClass()} aria-hidden="true"></props.icon>
      )}
      <Label as="span" size="md" className={labelClass()}>
        {pressed ? props.labelActive : props.label}
      </Label>
    </AccessibleButton>
  );
};
