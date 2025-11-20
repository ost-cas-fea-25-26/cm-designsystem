import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
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

type NaviButtonWithLabel = NaviButtonVariants & {
  label: string;
  ariaLabel?: never;
  intent?: NaviButtonIntent;
  onClick: () => void;
  children: React.ReactElement<IconBaseProps>;
};

type NaviButtonIconOnly = NaviButtonVariants & {
  label?: never;
  ariaLabel: string;
  intent?: NaviButtonIntent;
  onClick: () => void;
  children: React.ReactElement<IconBaseProps>;
};

type NaviButtonProps = NaviButtonWithLabel | NaviButtonIconOnly;

export const NaviButton = ({
  intent = "secondary",
  ...props
}: NaviButtonProps) => {
  return (
    <button
      className={naviButtonStyles({ intent, ...props })}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      {props.children}
      {props.label && (
        <Label as="span" size="sm">
          {props.label}
        </Label>
      )}
    </button>
  );
};
