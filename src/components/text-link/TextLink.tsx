import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";

const textLinkStyles = tv({
  base: [
    "text-violet-600",
    "underline",
    "decoration-violet-600",
    "underline-offset-2",
    "hover:decoration-violet-200",
  ],
});

type TextLinkVariants = VariantProps<typeof textLinkStyles>;

interface TextLinkProps extends TextLinkVariants {
  href: string;
  children: React.ReactNode;
}

export const TextLink = (props: TextLinkProps) => {
  return (
    <Label size="sm" as="span">
      <a
        href={props.href}
        aria-label={`Link to ${props.href}`}
        className={textLinkStyles(props)}
      >
        {props.children}
      </a>
    </Label>
  );
};
