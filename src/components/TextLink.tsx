import type { ReactNode } from "react";
import { LabelSm } from "./typography/LabelSM";

export const TextLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <LabelSm>
      <a
        href={to}
        className="hover:decoration-violet-200 text-violet-600 underline underline-offset-2 decoration-violet-600"
      >
        {children}
      </a>
    </LabelSm>
  );
};
