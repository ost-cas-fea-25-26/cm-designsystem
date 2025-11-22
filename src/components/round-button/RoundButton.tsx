import { cnBase, tv, type VariantProps } from "tailwind-variants";
import type { IconBaseProps } from "../icons/IconBase";
import {
  AccessibleButton,
  type BaseAccessibleButtonProps,
} from "../accessible-button/AccessibleButton";

const roundButtonStyles = tv({
  base: [
    "text-white",
    "rounded-full",
    "hover:ring-3",
    "active:ring-4",
    "transition",
    "duration-350",
    "active:duration-300",
    "ease-in-out",
    "p-4",
  ],
  variants: {
    intent: {
      primary: [
        "bg-slate-600",
        "hover:bg-slate-700",
        "hover:ring-slate-100",
        "active:ring-violet-200",
      ],
    },
  },
});

type RoundButtonVariants = VariantProps<typeof roundButtonStyles>;
type RoundButtonIntent = "primary";

/**
 * Props for the RoundButton component.
 *
 * @inheritdoc BaseAccessibleButtonProps
 * @inheritdoc RoundButtonVariants
 */
interface RoundButtonProps
  extends RoundButtonVariants,
    BaseAccessibleButtonProps {
  /**
   * Visual intent of the button (controls background color, hover, and active styles).
   */
  intent?: RoundButtonIntent;

  /**
   * Accessible label for the button, used by screen readers.
   */
  ariaLabel: string;

  /**
   * Icon element rendered alongside the button label.
   */
  icon: React.ComponentType<IconBaseProps>;
}

/**
 * A circular, icon-only button component that provides full accessibility,
 * keyboard interaction, and visual feedback through hover and active states.
 */
export const RoundButton: React.FC<RoundButtonProps> = ({
  intent = "primary",
  className,
  ...props
}: RoundButtonProps) => {
  return (
    <AccessibleButton
      className={cnBase(className, roundButtonStyles({ intent }))}
      {...props}
    >
      {<props.icon></props.icon>}
    </AccessibleButton>
  );
};
