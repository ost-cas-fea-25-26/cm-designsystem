import * as RadixTabs from "@radix-ui/react-tabs";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tabItemStyles = tv({});

type TabItemVariants = VariantProps<typeof tabItemStyles>;

export interface TabItemProps extends TabItemVariants {
  value: string;
  label: string;
  children: React.ReactNode;
}

export const TabItem = (props: TabItemProps) => {
  return (
    <RadixTabs.Content value={props.value} className={tabItemStyles(props)}>
      {React.Children.map(props.children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { key: props.value || index });
        }
        return child;
      })}
    </RadixTabs.Content>
  );
};
