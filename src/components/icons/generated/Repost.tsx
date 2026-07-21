import * as React from "react";
import { IconBase } from "../IconBase";

export const Repost = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="Repost" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M14.413.389a.5.5 0 0 0-.849-.235l-1.488 1.559a7.494 7.494 0 1 0 3.062 8.595 1 1 0 0 0-1.9-.616 5.513 5.513 0 1 1-2.573-6.5l-1.6 1.68a.5.5 0 0 0 .27.837L15.157 6.8a.48.48 0 0 0 .31-.04.5.5 0 0 0 .27-.563z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
