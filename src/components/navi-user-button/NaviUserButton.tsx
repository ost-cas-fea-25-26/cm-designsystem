import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Avatar } from "../avatar/Avatar";

const naviUserButtonStyles = tv({
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

type NaviUserButtonVariants = VariantProps<typeof naviUserButtonStyles>;
type NaviUserButtonIntent = "secondary";

interface NaviUserButtonProps extends NaviUserButtonVariants {
  ariaLabel: string;
  alt: string;
  intent?: NaviUserButtonIntent;
  src: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const NaviUserButton = ({
  intent = "secondary",
  ...props
}: NaviUserButtonProps) => {
  return (
    <button
      className={naviUserButtonStyles({ intent, ...props })}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      <Avatar alt={props.alt} size="sm" src={props.src}>
        {props.children}
      </Avatar>
    </button>
  );
};
