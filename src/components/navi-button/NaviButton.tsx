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

type NaviButtonProps = NaviButtonVariants & {
  label: string;
  intent?: NaviButtonIntent;
  onClick: () => void;
  children: React.ReactElement<IconBaseProps>;
};

export const NaviButton = ({
  intent = "secondary",
  label,
  onClick,
  children,
  ...rest
}: NaviButtonProps) => {
  return (
    <button className={naviButtonStyles({ intent, ...rest })} onClick={onClick}>
      {children}
      <Label as="span" size="sm">
        {label}
      </Label>
    </button>
  );
};
