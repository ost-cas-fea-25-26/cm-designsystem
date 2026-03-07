import React from "react";
import { cn, tv, type VariantProps } from "tailwind-variants";
import {
  AccessibleButton,
  type BaseAccessibleButtonProps,
} from "../accessible-button/AccessibleButton";
import { Label } from "../typography/Label";
import type { IconBaseProps } from "../icons/IconBase";

const naviButtonStyles = tv({
  base: [
    "flex",
    "flex-col",
    "gap-1",
    "transition",
    "duration-300",
    "ease-in-out",
    "text-white",
    "rounded-lg",
    "items-center",
    "pt-3",
    "pb-3",
    "pl-2",
    "pr-2",
  ],
  variants: {
    intent: {
      secondary: ["bg-violet-600", "hover:bg-violet-700"],
    },
  },
});

type NaviButtonVariants = VariantProps<typeof naviButtonStyles>;
type NaviButtonIntent = "secondary";

/**
 * Props for the NaviButton component.
 *
 * @inheritdoc BaseAccessibleButtonProps
 * @inheritdoc NaviButtonVariants
 */
interface NaviButtonProps
  extends NaviButtonVariants, BaseAccessibleButtonProps {
  /**
   * Visual intent of the button (controls background color, hover, and active styles).
   */
  intent?: NaviButtonIntent;

  /**
   * Optional icon element rendered alongside the button label.
   */
  icon?: React.ComponentType<IconBaseProps>;

  /**
   * Optional className applied to the icon element.
   */
  iconClassName?: string;

  /**
   * Visible text label displayed inside the button.
   */
  children: string;
}

/**
 * A navigation-style button component that combines an accessible,
 * keyboard-friendly button foundation with variant-based styling.
 */
export const NaviButton: React.FC<NaviButtonProps> = ({
  intent = "secondary",
  className,
  ...props
}: NaviButtonProps) => {
  return (
    <AccessibleButton
      className={cn(naviButtonStyles({ intent, ...props }), className)}
      {...props}
    >
      {props.icon && <props.icon className={props.iconClassName} />}
      <Label as="span" size="md">
        {props.children}
      </Label>
    </AccessibleButton>
  );
};
