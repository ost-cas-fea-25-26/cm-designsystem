import type { ReactNode } from "react";

export const TextLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  return <a href={to}>{children}</a>;
};
