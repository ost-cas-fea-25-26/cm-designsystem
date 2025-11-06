import * as React from "react";
import { IconBase } from "../IconBase";

export const Profile = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="Profile" {...props}>
    <path
      fill="currentColor"
      d="M8 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M8 8.5a7.01 7.01 0 0 0-7 7 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 7.01 7.01 0 0 0-7-7"
    />
  </IconBase>
);
