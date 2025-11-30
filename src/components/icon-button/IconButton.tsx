import React from "react";
import { cn, tv, type VariantProps } from "tailwind-variants";
import {
  AccessibleButton,
  type BaseAccessibleButtonProps,
} from "../accessible-button/AccessibleButton";
import { Label } from "../typography/Label";
import type { IconBaseProps } from "../icons/IconBase";

const iconButtonStyles = tv({
  slots: {
    base: [
      "flex",
      "gap-1",
      "transition",
      "duration-350",
      "ease-in-out",
      "cursor-pointer",
    ],
    icon: ["w-3", "h-3"],
  },
  variants: {
    intent: {
      primary: { base: ["text-slate-500", "hover:text-slate-600"] },
      secondary: { base: ["text-violet-600", "hover:text-violet-900"] },
    },
  },
});

type IconButtonVariants = VariantProps<typeof iconButtonStyles>;
type IconButtonIntent = "primary" | "secondary";

/**
 * Props for the IconButton component.
 *
 * @inheritdoc BaseAccessibleButtonProps
 * @inheritdoc IconButtonVariants
 */
interface IconButtonProps
  extends IconButtonVariants, BaseAccessibleButtonProps {
  /**
   * Visual intent of the button (controls background color, hover, and active styles).
   */
  intent: IconButtonIntent;

  /**
   * Icon element rendered alongside the button label.
   */
  icon?: React.ComponentType<IconBaseProps>;

  /**
   * Visible text label displayed inside the button.
   */
  children: string;
}

/**
 * A compact, accessible button component that displays an icon alongside
 * a text label.
 */
export const IconButton: React.FC<IconButtonProps> = ({
  className,
  ...props
}: IconButtonProps) => {
  const { base, icon } = iconButtonStyles();

  return (
    <AccessibleButton className={cn(className, base(props))} {...props}>
      {props.icon && <props.icon className={icon(props)} />}
      <Label as="span" size="md">
        {props.children}
      </Label>
    </AccessibleButton>
  );
};
