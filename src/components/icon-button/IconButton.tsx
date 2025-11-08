import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import type { IconBaseProps } from "../icons/IconBase";

const iconButtonStyles = tv({
  base: ["flex", "gap-1", "transition", "duration-350", "ease-in-out"],
  variants: {
    intent: {
      primary: ["color-slate-400", "hover:color-slate-600"],
      secondary: ["color-violet-600", "hover:color-violet-900"],
    },
  },
});

type IconButtonVariants = VariantProps<typeof iconButtonStyles>;
type IconButtonIntent = "primary" | "secondary" | "tertiary";

interface IconButtonProps extends IconButtonVariants {
  label: string;
  intent: IconButtonIntent;
  onClick: () => void;
  children?: React.ReactElement<IconBaseProps>;
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <button className={iconButtonStyles(props)} onClick={props.onClick}>
      <Label as="span" size="md">
        {props.label}
      </Label>
      {props.children}
    </button>
  );
};
