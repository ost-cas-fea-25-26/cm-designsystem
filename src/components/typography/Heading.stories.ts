import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "./Heading";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Typography/Heading",
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: "select" },
    as: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Heading1: Story = {
  args: {
    size: "1",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const Heading2: Story = {
  args: {
    size: "2",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const Heading3: Story = {
  args: {
    size: "3",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const Heading4: Story = {
  args: {
    size: "4",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const CustomTag: Story = {
  args: {
    size: "1",
    as: "span",
    children: "Lorem ipsum dolor sit amet",
  },
};
