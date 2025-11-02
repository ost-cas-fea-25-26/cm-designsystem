import * as RadixTabs from "@radix-ui/react-tabs";
import { Label } from "../typography/Label";

export interface BinaryTabsProps {
  leftId?: string; // default 'left'
  rightId?: string; // default 'right'
  leftLabel: string;
  rightLabel: string;
  value?: string; // controlled
  defaultValue?: string; // uncontrolled
  onValueChange?: (value: string) => void;
  variant?: "default" | "muted"; // inactive base tone (text color class)
  className?: string;
}

/**
 * BinaryTabs – spezialisiert auf genau zwei Tabs.
 * - Reduzierte API für Cases mit festem Dual-Switch (z.B. Liste vs Likes).
 * - Active = accent, inactive = variant mapping (default → default tone, muted → muted tone).
 */
export const BinaryTabs = ({
  leftId = "left",
  rightId = "right",
  leftLabel,
  rightLabel,
  value,
  defaultValue,
  onValueChange,
  variant = "muted",
  className = "",
}: BinaryTabsProps) => {
  // Base text color derived from variant; active coloring handled by Trigger state classes.
  const baseTextClass = variant === "muted" ? "text-gray-500" : "text-black";

  return (
    <RadixTabs.Root
      value={value}
      defaultValue={value ? undefined : defaultValue || leftId}
      onValueChange={onValueChange}
      className={`bg-slate-200 rounded-lg flex flex-row p-1 ${className}`}
    >
      <RadixTabs.List aria-label="Binary Tabs" className="flex flex-row gap-1">
        <RadixTabs.Trigger
          value={leftId}
          className="group rounded-xs p-3 data-[state=active]:bg-white data-[state=active]:rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border focus-visible:border-violet-300 focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.25)]"
        >
          <Label
            size="lg"
            as="span"
            tone="default"
            className={`${baseTextClass} group-data-[state=active]:text-violet-600`}
          >
            {leftLabel}
          </Label>
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          value={rightId}
          className="group rounded-xs p-3 data-[state=active]:bg-white data-[state=active]:rounded-md focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border focus-visible:border-violet-300 focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.25)]"
        >
          <Label
            size="lg"
            as="span"
            tone="default"
            className={`${baseTextClass} group-data-[state=active]:text-violet-600`}
          >
            {rightLabel}
          </Label>
        </RadixTabs.Trigger>
      </RadixTabs.List>
    </RadixTabs.Root>
  );
};
