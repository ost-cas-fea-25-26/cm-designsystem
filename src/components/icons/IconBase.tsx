// src/components/icons/IconBase.tsx
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as React from "react";
import { tv } from "tailwind-variants";

export type IconBaseProps = React.SVGProps<SVGSVGElement> & {
  label?: string;
};

const iconStyles = tv({
  base: ["text-slate-600", "w-4", "h-4"],
});

export const IconBase: React.FC<IconBaseProps> = ({
  label = "",
  children,
  ...props
}) => (
  <AccessibleIcon label={label}>
    <svg className={iconStyles()} fill="currentColor" {...props}>
      {children}
    </svg>
  </AccessibleIcon>
);
