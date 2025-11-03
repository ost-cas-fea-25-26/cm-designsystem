import * as RadixTabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { Label } from "../typography/Label";
import { tv } from "tailwind-variants";

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
      "data-[state=active]:bg-white data-[state=active]:rounded-md",
      "focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border focus-visible:border-violet-300 focus-visible:shadow-[0_0_0_2px_rgba(124,58,237,0.25)]",
      "transition-colors",
    ],
    variants: {
      tone: {
        default: "",
        muted: "",
      },
      active: {
        true: "",
        false: "",
      },
    },
  }),
};

export interface BinaryTabsItem {
  value: string;
  label: string;
  panel?: React.ReactNode;
}

export interface BinaryTabsProps {
  items: [BinaryTabsItem, BinaryTabsItem];
  value?: string; // controlled value
  defaultValue?: string; // uncontrolled initial value
  onValueChange?: (value: string) => void;
  variant?: "default" | "muted";
}

/**
 * BinaryTabs – genau zwei Tabs ('left' & 'right').
 * - Active tab uses Label tone 'accent'.
 * - Muted tab uses tone derived from variant ('default' | 'muted').
 * - Always guarantees one active tab. if none is active, 'left' will be set.
 */
export const BinaryTabs = ({
  items,
  value,
  defaultValue,
  onValueChange,
  variant = "default",
}: BinaryTabsProps) => {
  const [first, second] = items;
  const allowed = new Set([first.value, second.value]);

  const initial = (() => {
    if (value && allowed.has(value)) return value;
    if (defaultValue && allowed.has(defaultValue)) return defaultValue;
    return first.value;
  })();

  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string>(initial);
  const activeValue = isControlled
    ? allowed.has(value!)
      ? value!
      : first.value
    : internalValue;

  const handleChange = (next: string) => {
    const coerced = allowed.has(next) ? next : first.value;
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
        {[first, second].map((item) => {
          const active = activeValue === item.value;
          return (
            <RadixTabs.Trigger
              key={item.value}
              value={item.value}
              className={binaryTabsStyles.trigger({ tone: variant, active })}
            >
              <Label size="lg" as="span" tone={active ? "accent" : variant}>
                {item.label}
              </Label>
            </RadixTabs.Trigger>
          );
        })}
      </RadixTabs.List>
    </RadixTabs.Root>
  );
};
