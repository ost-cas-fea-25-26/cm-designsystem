import * as React from "react";
import { IconBase } from "../IconBase";

export const Edit = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="Edit" {...props}>
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M8.1 3.5.3 11.3c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1h3c.3 0 .5-.1.7-.3l7.8-7.8zM15.7 3.3l-3-3c-.4-.4-1-.4-1.4 0L9.5 2.1l4.4 4.4 1.8-1.8c.4-.4.4-1 0-1.4" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
