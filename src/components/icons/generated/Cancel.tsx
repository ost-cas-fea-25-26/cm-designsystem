import * as React from "react";
import { IconBase } from "../IconBase";

export const Cancel = (props: React.ComponentProps<typeof IconBase>) => (
  <IconBase label="Cancel" {...props}>
    <path
      fill="currentColor"
      d="M12.558 1.258a.5.5 0 0 0-.711.004L8 5.2 4.154 1.262a.5.5 0 0 0-.712-.004L1.258 3.442a.5.5 0 0 0 .004.712L5.2 8l-3.938 3.847a.5.5 0 0 0-.004.71l2.184 2.185a.5.5 0 0 0 .712-.004L8 10.8l3.847 3.938a.5.5 0 0 0 .71.004l2.185-2.184a.5.5 0 0 0-.004-.711L10.8 8l3.938-3.846a.5.5 0 0 0 .004-.712z"
    />
  </IconBase>
);
