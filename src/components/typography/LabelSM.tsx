import type { ReactNode } from "react";

export const LabelSm = ({ children }: { children: ReactNode }) => {
  return <label className="label-sm">{children}</label>;
};
