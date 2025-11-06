// src/components/icons/IconBase.tsx
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as React from "react";

export type IconBaseProps = React.SVGProps<SVGSVGElement> & {
  label?: string;
};

export const IconBase: React.FC<IconBaseProps> = ({
  label = "",
  className,
  children,
  ...props
}) => (
  <AccessibleIcon label={label}>
    <svg
      width="16"
      height="16"
      className={`text-slate-600 ${className || ""}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  </AccessibleIcon>
);
