import { Label } from "../typography/Label";
import type { ReactNode } from "react";

export const TextLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Label size="sm" as="span">
      <a
        href={href}
        className="text-violet-600 underline decoration-violet-600 underline-offset-2 hover:decoration-violet-200"
      >
        {children}
      </a>
    </Label>
  );
};
