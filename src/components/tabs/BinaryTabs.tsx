import * as RadixTabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { Label } from "../typography/Label";
import { tv } from "tailwind-variants";

// Tailwind-variants style system for BinaryTabs
const binaryTabsStyles = {
  root: tv({
    base: "bg-slate-200 rounded-lg flex flex-row p-1",
  }),
  list: tv({
    base: "flex flex-row gap-1",
  }),
  trigger: tv({
    base: [
      "group rounded-xs p-3",
      // active state background via Radix data-state attribute
      "data-[state=active]:bg-white data-[state=active]:rounded-md",
      // focus styles (accessible but subtle)
      "focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border focus-visible:border-violet-300 focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.25)]",
      "transition-colors",
    ],
    variants: {
      tone: {
        default: "", // rely on Label tone
        muted: "", // rely on Label tone
      },
      active: {
        true: "", // active specific trigger styles could go here later
        false: "", // inactive trigger styles could go here later
      },
    },
  }),
};

export interface BinaryTabsProps {
  leftLabel: string;
  rightLabel: string;
  value?: "left" | "right"; // controlled (optional)
  defaultValue?: "left" | "right"; // uncontrolled initial
  onValueChange?: (value: "left" | "right") => void;
  variant?: "default" | "muted";
}

/**
 * BinaryTabs – genau zwei Tabs ('left' & 'right').
 * - Active tab uses Label tone 'accent'.
 * - Muted tab uses tone derived from variant ('default' | 'muted').
 * - Always guarantees one active tab; invalid controlled value coerces to 'left'.
 */
export const BinaryTabs = ({
  leftLabel,
  rightLabel,
  value,
  defaultValue = "left",
  onValueChange,
  variant = "default",
}: BinaryTabsProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<"left" | "right">(
    defaultValue,
  );

  // Determine active value (set invalid controlled values to 'left')
  const activeValue: "left" | "right" = isControlled
    ? value === "right"
      ? "right"
      : "left"
    : internalValue;

  const handleChange = (next: string) => {
    const coerced: "left" | "right" = next === "right" ? "right" : "left";
    if (isControlled) {
      onValueChange?.(coerced);
    } else {
      setInternalValue(coerced);
      onValueChange?.(coerced);
    }
  };

  return (
    <RadixTabs.Root
      value={activeValue}
      onValueChange={handleChange}
      className={binaryTabsStyles.root()}
    >
      <RadixTabs.List
        aria-label="Binary Tabs"
        className={binaryTabsStyles.list()}
      >
        <RadixTabs.Trigger
          value="left"
          className={binaryTabsStyles.trigger({
            tone: variant,
            active: activeValue === "left",
          })}
        >
          <Label
            size="lg"
            as="span"
            tone={activeValue === "left" ? "accent" : variant}
          >
            {leftLabel}
          </Label>
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value="right"
          className={binaryTabsStyles.trigger({
            tone: variant,
            active: activeValue === "right",
          })}
        >
          <Label
            size="lg"
            as="span"
            tone={activeValue === "right" ? "accent" : variant}
          >
            {rightLabel}
          </Label>
        </RadixTabs.Trigger>
      </RadixTabs.List>
      {/* Hidden panels to satisfy aria-controls; replace with real content when available */}
      <RadixTabs.Content value="left" className="sr-only" />
      <RadixTabs.Content value="right" className="sr-only" />
    </RadixTabs.Root>
  );
};
