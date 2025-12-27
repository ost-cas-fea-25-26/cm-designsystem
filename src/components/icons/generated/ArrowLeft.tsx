import * as React from "react";
import { IconBase } from "../IconBase";

export const ArrowLeft = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="ArrowLeft" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M15 7H7V4a1 1 0 0 0-1.625-.781l-5 4a1 1 0 0 0 0 1.562l5 4A1 1 0 0 0 7 12V9h8a1 1 0 0 0 0-2"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
