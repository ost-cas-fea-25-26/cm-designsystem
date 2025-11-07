import * as RadixTabs from "@radix-ui/react-tabs";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import type { TabItemProps } from "./TabItem";

const tabStyles = tv({
  slots: {
    list: ["bg-slate-200", "rounded-lg", "p-1", "flex", "gap-2", "group"],
    trigger: ["pt-2", "pb-2", "pr-3", "pl-3", "rounded-md"],
    label: [],
  },
  variants: {
    selected: {
      false: {
        trigger: ["bg-slate-200"],
        label: ["group-hover:text-slate-800"],
      },
      true: {
        trigger: ["bg-white"],
        label: ["text-violet-600"],
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
      class: {
        trigger: ["group-hover:pr-6"],
      },
    },
    {
      selected: true,
      effect: "middle",
      class: {
        trigger: ["group-hover:pr-6", "group-hover:pl-6"],
      },
    },
    {
      selected: true,
      effect: "last",
      class: {
        trigger: ["group-hover:pl-6"],
      },
    },
  ],
});

type TabVariants = VariantProps<typeof tabStyles>;

export interface TabLabelProps {
  value: string;
  label: string;
}

export interface TabProps extends TabVariants {
  value: string;
  onChange?: (value: string) => void;
  children: React.ReactElement<TabItemProps>[];
}

export const Tabs = (props: TabProps) => {
  const { list, trigger, label } = tabStyles(props);
  const [currentSelection, setSelection] = React.useState(props.value);

  const getEffectVariant = (index: number, max: number) =>
    index === 0 ? "first" : max === index ? "last" : "middle";

  const onClick = (value: string) => {
    setSelection(value);
    props.onChange?.(value);
  };

  return (
    <RadixTabs.Root defaultValue={props.value}>
      <RadixTabs.List className={list()}>
        {props.children.map((child, index) => (
          <RadixTabs.Trigger
            value={child.props.value}
            className={trigger({
              selected: child.props.value === currentSelection,
              effect: getEffectVariant(index, props.children.length - 1),
            })}
            onClick={() => onClick(child.props.value)}
          >
            <Label
              size="lg"
              className={label({
                selected: child.props.value === currentSelection,
              })}
            >
              {child.props.label}
            </Label>
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>

      {React.Children.map(props.children, (child, index) =>
        React.cloneElement(child, { key: child.props.value || index })
      )}
    </RadixTabs.Root>
  );
};
