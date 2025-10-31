import type { ReactNode } from "react";
import { Label } from "../typography/Label";

export const TextLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Label size="sm" as="a">
      <a
        href={href}
        className="hover:decoration-violet-200 text-violet-600 underline underline-offset-2 decoration-violet-600"
      >
        {children}
      </a>
    </Label>
  );
};
