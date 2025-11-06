import * as React from "react";

export const IconBase: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  children,
  ...props
}) => (
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
);
