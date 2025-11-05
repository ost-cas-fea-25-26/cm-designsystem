import type { Meta, StoryObj } from "@storybook/react-vite";

import { TabItem } from "./TabItem";
import { Tabs } from "./Tabs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: "text",
      children: "object",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    value: "1",
    children: [
      <TabItem value="1" label="Lorem ipsum 1">
        Lorem ipsum 1
      </TabItem>,
      <TabItem value="2" label="Lorem ipsum 2">
        Lorem ipsum 2
      </TabItem>,
      <TabItem value="3" label="Lorem ipsum 3">
        Lorem ipsum 3
      </TabItem>,
    ],
  },
};
