import * as React from "react";
import { IconBase } from "../IconBase";

export const HeartFilled = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="HeartFilled" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M11.6 0C10.1 0 8.8.8 8 2 7.2.8 5.9 0 4.4 0 2 0 0 2 0 4.4c0 4.4 8 10.9 8 10.9s8-6.5 8-10.9C16 2 14 0 11.6 0"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
