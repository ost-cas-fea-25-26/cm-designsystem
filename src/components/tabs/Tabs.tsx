"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import type { TabItemProps } from "./TabItem";

const tabStyles = tv({
  slots: {
    list: ["bg-slate-200", "rounded-lg", "p-1", "flex", "gap-2", "group"],
    trigger: ["pt-2", "pb-2", "pr-3", "pl-3", "rounded-md"],
  },
  variants: {
    selected: {
      false: {
        trigger: ["bg-slate-200", "group-hover:text-slate-800"],
      },
      true: {
        trigger: ["bg-white", "text-violet-600"],
      },
    },
    effect: {
      first: {},
      middle: {},
      last: {},
    },
  },
  compoundVariants: [
    {
      selected: true,
      effect: "first",
      class: { trigger: ["group-hover:pr-6"] },
    },
    {
      selected: true,
      effect: "middle",
      class: { trigger: ["group-hover:pr-6", "group-hover:pl-6"] },
    },
    {
      selected: true,
      effect: "last",
      class: { trigger: ["group-hover:pl-6"] },
    },
  ],
});

type TabVariants = VariantProps<typeof tabStyles>;

export interface TabProps extends TabVariants {
  value: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

export const Tabs = ({ value, onChange, children, ...variants }: TabProps) => {
  const { list, trigger } = tabStyles(variants);

  const items = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabItemProps> =>
      React.isValidElement(child)
  );

  const getEffectVariant = (index: number, max: number) =>
    index === 0 ? "first" : index === max ? "last" : "middle";

  return (
    <RadixTabs.Root value={value} onValueChange={onChange}>
      <RadixTabs.List className={list()}>
        {items.map((child, index) => (
          <RadixTabs.Trigger
            key={child.props.value}
            value={child.props.value}
            className={trigger({
              selected: child.props.value === value,
              effect: getEffectVariant(index, items.length - 1),
            })}
          >
            <Label size="lg">{child.props.label}</Label>
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>

      {items}
    </RadixTabs.Root>
  );
};
