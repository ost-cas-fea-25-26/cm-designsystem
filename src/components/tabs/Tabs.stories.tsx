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
    items: {
      control: "object",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    items: [
      { value: "test", label: "Test" },
      { value: "test2", label: "Test2" },
      { value: "test3", label: "Test3" },
    ],
    value: "test",
    children: [
      <TabItem value="test">Test</TabItem>,
      <TabItem value="test2">Test2</TabItem>,
      <TabItem value="test3">Test3</TabItem>,
    ],
  },
};
