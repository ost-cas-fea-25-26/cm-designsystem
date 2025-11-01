import type { Meta, StoryObj } from "@storybook/react-vite";

import { Paragraph } from "./Paragraph";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: "select" },
    role: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ParagraphLarge: Story = {
  args: {
    size: "lg",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const ParagraphMedium: Story = {
  args: {
    size: "md",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const CustomTag: Story = {
  args: {
    size: "lg",
    role: "span",
    children: "Lorem ipsum dolor sit amet",
  },
};
