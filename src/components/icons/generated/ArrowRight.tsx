import * as React from "react";
import { IconBase } from "../IconBase";

export const ArrowRight = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="ArrowRight" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M10.625 3.219A1 1 0 0 0 9 3.999v3H1a1 1 0 1 0 0 2h8v3a1 1 0 0 0 1.625.782l5-4a1 1 0 0 0 0-1.562z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
