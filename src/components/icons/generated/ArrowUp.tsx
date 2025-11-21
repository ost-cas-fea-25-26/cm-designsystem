import * as React from "react";
import { IconBase } from "../IconBase";

export const ArrowUp = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="ArrowUp" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M8.781.375a1.036 1.036 0 0 0-1.562 0l-4 5A1 1 0 0 0 4 7h3v8a1 1 0 1 0 2 0V7h3a1 1 0 0 0 .781-1.625z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
