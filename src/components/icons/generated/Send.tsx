import * as React from "react";
import { IconBase } from "../IconBase";

export const Send = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="Send" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M15.707.293a1 1 0 0 0-1.043-.234l-14 5a.999.999 0 0 0-.111 1.835l4.586 2.292L10.999 5l-4.186 5.862 2.292 4.586a1.004 1.004 0 0 0 1.838-.112l5-14c.129-.363.037-.77-.236-1.043"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </IconBase>
);
