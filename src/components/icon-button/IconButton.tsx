import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import type { IconBaseProps } from "../icons/IconBase";

const iconButtonStyles = tv({
  slots: {
    base: ["flex", "gap-1", "transition", "duration-350", "ease-in-out"],
    icon: ["w-3", "h-3"],
  },
  variants: {
    intent: {
      primary: { base: ["text-slate-400", "hover:text-slate-600"] },
      secondary: { base: ["text-violet-600", "hover:text-violet-900"] },
    },
  },
});

type IconButtonVariants = VariantProps<typeof iconButtonStyles>;
type IconButtonIntent = "primary" | "secondary";

interface IconButtonProps extends IconButtonVariants {
  label: string;
  intent: IconButtonIntent;
  onClick: () => void;
  children: React.ReactElement<IconBaseProps>;
}

export const IconButton = (props: IconButtonProps) => {
  const { base, icon } = iconButtonStyles();

  return (
    <button
      className={base(props)}
      onClick={props.onClick}
      aria-label={props.label}
    >
      {React.cloneElement(props.children, {
        className: `${icon(props)}`,
      })}
      <Label as="span" size="sm">
        {props.label}
      </Label>
    </button>
  );
};
