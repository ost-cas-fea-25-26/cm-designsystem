import { Toggle as RadixToggle } from "radix-ui";
import { type VariantProps, tv } from "tailwind-variants";
import { Paragraph } from "../typography/Paragraph";
import { Label } from "../typography/Label";

type ToggleVariants = VariantProps<typeof toggleStyles>;

const toggleStyles = tv({
  base: [
    "bg-violet-600",
    "hover:bg-violet-700",
    "hover:border-violet-100",
    "active:border-violet-200",
  ],
  variants: {
    intent: {
      primary: [
        "bg-slate-600",
        "hover:bg-slate-700",
        "hover:border-slate-100",
        "active:border-violet-200",
      ],
      secondary: [
        "bg-violet-600",
        "hover:bg-violet-700",
        "hover:border-violet-100",
        "active:border-violet-200",
      ],
      tertiary: [
        "bg-gradient-to-r",
        "from-pink-500",
        "from-50%",
        "to-violet-600",
        "hover:from-30%",
        "hover:border-violet-100",
        "active:from-20%",
        "active:border-violet-200",
      ],
    },
  },
});

interface ToggleProps extends ToggleVariants {
  children: React.ReactNode;
}

export const Toggle = (props: ToggleProps) => {
  return (
    <RadixToggle.Root
      aria-label="Toggle"
      className={toggleStyles({ intent: props.intent })}
    >
      <Label as="span" size="md">
        "hoi"
      </Label>
    </RadixToggle.Root>
  );
};
