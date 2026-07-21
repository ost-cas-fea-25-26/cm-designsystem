import * as React from "react";
import { IconBase } from "../IconBase";

export const Checkmark = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="Checkmark" {...props}>
    <path
      fill="currentColor"
      d="M5.6 9.6 2.753 6.754a.5.5 0 0 0-.707 0L.353 8.446a.5.5 0 0 0 0 .708l4.893 4.893a.5.5 0 0 0 .707 0l9.693-9.693a.5.5 0 0 0 0-.708l-1.693-1.692a.5.5 0 0 0-.707 0z"
    />
  </IconBase>
);
