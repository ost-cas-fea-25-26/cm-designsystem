import * as React from "react";
import { IconBase } from "../IconBase";

export const ReplyFilled = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="ReplyFilled" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7c.4 0 .8 0 1.1-.1L14 16v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
