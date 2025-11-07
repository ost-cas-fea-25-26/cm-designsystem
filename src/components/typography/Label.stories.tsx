import { Label } from "./Label";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography/Typography/Label",
  component: Label,
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
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LabelExtraLarge: Story = {
  args: {
    size: "xl",
    as: "label",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const LabelLarge: Story = {
  args: {
    size: "lg",
    as: "label",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const LabelMedium: Story = {
  args: {
    size: "md",
    as: "label",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const LabelSmall: Story = {
  args: {
    size: "sm",
    as: "label",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const CustomTag: Story = {
  args: {
    size: "lg",
    as: "span",
    children: "Lorem ipsum dolor sit amet",
  },
};
