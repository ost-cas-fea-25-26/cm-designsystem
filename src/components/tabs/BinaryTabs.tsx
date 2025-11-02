import * as RadixTabs from "@radix-ui/react-tabs";
import { useState, useEffect } from "react";
import { Label } from "../typography/Label";

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
  variant = "muted",
}: BinaryTabsProps) => {
  const isControlled = value !== undefined;
  // Internal state for uncontrolled usage.
  const [internalValue, setInternalValue] = useState<"left" | "right">(
    defaultValue === "right" ? "right" : "left",
  );

  // Coerce invalid controlled value to 'left'.
  const coercedControlled: "left" | "right" | undefined = isControlled
    ? value === "right" || value === "left"
      ? value
      : "left"
    : undefined;

  // Active value depending on mode.
  const activeValue: "left" | "right" = isControlled
    ? (coercedControlled as "left" | "right")
    : internalValue;

  // Allow dynamic defaultValue changes (rare but defensive).
  useEffect(() => {
    if (!isControlled && defaultValue && defaultValue !== internalValue) {
      setInternalValue(defaultValue === "right" ? "right" : "left");
    }
  }, [defaultValue, isControlled, internalValue]);

  // Inactive tone is exactly the variant ('muted' | 'default').
  // We only switch to 'accent' for the active tab.

  const handleChange = (next: string) => {
    if (next === "left" || next === "right") {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    }
  };

  return (
    <RadixTabs.Root
      value={activeValue}
      onValueChange={handleChange}
      className="bg-slate-200 rounded-lg flex flex-row p-1"
    >
      <RadixTabs.List aria-label="Binary Tabs" className="flex flex-row gap-1">
        <RadixTabs.Trigger
          value="left"
          className="group rounded-xs p-3 data-[state=active]:bg-white data-[state=active]:rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border focus-visible:border-violet-300 focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.25)]"
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
          className="group rounded-xs p-3 data-[state=active]:bg-white data-[state=active]:rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border focus-visible:border-violet-300 focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.25)]"
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
