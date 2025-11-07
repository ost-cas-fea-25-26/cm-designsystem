import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import type { IconBaseProps } from "../icons/IconBase";

const roundButtonStyles = tv({
  base: [
    "text-white",
    "rounded-3xl",
    "hover:ring-3",
    "active:ring-4",
    "transition",
    "duration-300",
    "ease-in-out",
    "p-4",
  ],
  variants: {
    intent: {
      primary: [
        "bg-slate-600",
        "hover:bg-slate-700",
        "hover:ring-slate-100",
        "active:ring-violet-200",
      ],
    },
  },
});

type RoundButtonVariants = VariantProps<typeof roundButtonStyles>;
type RoundButtonIntent = "primary";

interface RoundButtonProps extends RoundButtonVariants {
  intent?: RoundButtonIntent;
  onClick: () => void;
  children: React.ReactElement<IconBaseProps>;
}

export const RoundButton = ({
  intent = "primary",
  ...props
}: RoundButtonProps) => {
  return (
    <button className={roundButtonStyles({ intent })} onClick={props.onClick}>
      <Label as="span" size="md">
        {props.children}
      </Label>
    </button>
  );
};
