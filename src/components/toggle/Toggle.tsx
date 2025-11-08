import { Toggle as RadixToggle } from "radix-ui";
import { type VariantProps, tv } from "tailwind-variants";
import { HeartOutline } from "../icons/generated";
import { Label } from "../typography/Label";

type ToggleVariants = VariantProps<typeof toggleStyles>;

const toggleStyles = tv({
  base: [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",
    "rounded-full",
    "px-3",
    "py-2",
    "transition-all",
    "duration-150",
    "ease-in-out",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
  ],
  variants: {
    pressed: {
      false: [
        // not sure if this is needed
        // "w-20",
        "h-8",
        "bg-transparent",
        "hover:bg-pink-50",
        "hover:text-pink-600",
      ],
      true: [
        // NOTE: w-23 is not a default Tailwind class; ensure it's configured or replace with arbitrary value like w-[92px]
        // not sure if this is needed
        // "w-23",
        "h-8",
        "bg-pink-100",
        "text-pink-900",
        "hover:bg-pink-200",
      ],
    },
  },
  defaultVariants: {
    pressed: false,
  },
});

interface ToggleProps extends ToggleVariants {
  children: React.ReactNode;
  ariaLabel: string;
}

export const Toggle = (_props: ToggleProps) => {
  return (
    <RadixToggle.Root aria-label={_props.ariaLabel} className={toggleStyles({})}>
      <HeartOutline />
      <Label as="span" size="md">
        Like
      </Label>
    </RadixToggle.Root>
  );
};
