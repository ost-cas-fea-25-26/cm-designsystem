// src/components/icons/IconBase.tsx
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as React from "react";
import { cnBase, tv } from "tailwind-variants";

export type IconBaseProps = React.SVGProps<SVGSVGElement> & {
  label?: string;
};

const iconStyles = tv({
  base: ["w-4", "h-4"],
});

export const IconBase: React.FC<IconBaseProps> = ({
  label = "",
  children,
  className,
  ...props
}) => {
  return (
    <AccessibleIcon label={label}>
      <svg
        className={cnBase(className, iconStyles())}
        fill="currentColor"
        viewBox={props.viewBox || "0 0 16 16"}
        {...props}
      >
        {children}
      </svg>
    </AccessibleIcon>
  );
};
