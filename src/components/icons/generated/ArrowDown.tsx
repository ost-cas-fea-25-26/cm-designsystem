import * as React from "react";
import { IconBase } from "../IconBase";

export const ArrowDown = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="ArrowDown" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M12 9H9V1a1 1 0 0 0-2 0v8H4a1 1 0 0 0-.78 1.625l4 5a1 1 0 0 0 1.561 0l4-5A1 1 0 0 0 12.001 9"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
