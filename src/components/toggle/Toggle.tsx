import { Toggle as RadixToggle } from "radix-ui";
import { type VariantProps, tv } from "tailwind-variants";
import { HeartOutline } from "../icons/generated";
import { Label } from "../typography/Label";

type ToggleVariants = VariantProps<typeof toggleStyles>;

// Figma spec mapping (provided):
// Flow: Horizontal => flex row (default) + gap
// Width: Hug (80px) => no fixed width; content + padding results ~80px
// Height: Hug (32px) => h-8 (32px)
// Padding: top/bottom 8px => py-2; left/right 12px => px-3
// Gap: 8px => gap-2
// Radius: 16px => rounded-2xl
// Top/Left: 16px each => using margins (mt-4 ml-4) instead of positional 'top' offsets.
// NOTE: Margins can be removed by consuming layout if not desired globally.
const toggleStyles = tv({
  base: [
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "h-8",
    "px-3",
    "py-2",
    "rounded-2xl",
    "mt-4",
    "ml-4",
    "hover:bg-violet3",
    "data-[state=on]:bg-violet6",
    "data-[state=on]:text-violet12",
    "focus:shadow-[0_0_0_2px]",
    "focus:shadow-black",
    "transition-colors",
  ],
  variants: {},
});

interface ToggleProps extends ToggleVariants {
  children: React.ReactNode;
}

export const Toggle = (_props: ToggleProps) => {
  return (
    <RadixToggle.Root aria-label="Toggle" className={toggleStyles({})}>
      <HeartOutline />
      <Label as="span" size="md">
        Like
      </Label>
    </RadixToggle.Root>
  );
};
