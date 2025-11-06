import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import * as React from "react";
import { IconBase } from "../IconBase";

export const Calendar: React.FC<React.ComponentProps<typeof IconBase>> = (
  props
) => (
  <AccessibleIcon label="Calendar">
    <IconBase {...props}>
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M14 3h-1V1a1 1 0 0 0-2 0v2H5V1a1 1 0 0 0-2 0v2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M2 14V7h12v7z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </IconBase>
  </AccessibleIcon>
);
