import * as RadixTabs from "@radix-ui/react-tabs";
import { tv, type VariantProps } from "tailwind-variants";

const tabItemStyles = tv({});

type TabItemVariants = VariantProps<typeof tabItemStyles>;

export interface TabItemProps extends TabItemVariants {
  value: string;
  children: React.ReactNode;
}

export const TabItem = (props: TabItemProps) => {
  return (
    <RadixTabs.Content value={props.value} className={tabItemStyles(props)}>
      {props.children}
    </RadixTabs.Content>
  );
};
