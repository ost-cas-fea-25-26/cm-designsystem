import { tv, type VariantProps } from "tailwind-variants";
import type { IconBaseProps } from "../icons/IconBase";

const roundButtonStyles = tv({
  base: [
    "text-white",
    "rounded-full",
    "hover:ring-3",
    "active:ring-4",
    "transition",
    "duration-350",
    "active:duration-300",
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
  ariaLabel: string;
  onClick: () => void;
  children: React.ReactElement<IconBaseProps>;
}

export const RoundButton = ({
  intent = "primary",
  ...props
}: RoundButtonProps) => {
  return (
    <button
      className={roundButtonStyles({ intent })}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};
