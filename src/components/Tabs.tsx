import type { ReactNode } from "react";

export const Tabs = ({ children }: { href: string; children: ReactNode }) => {
  return <div className="bg-slate-200 rounded-8">{children}</div>;
};
