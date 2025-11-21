import { Paragraph } from "./Paragraph";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: "select", description: "Paragraph size." },
    as: { control: "text", description: "Render test with given HTML tag." },
    children: { control: "text", description: "Paragraph text." },
    className: {
      control: "text",
      description: "Classes to override styling of component.",
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ParagraphLarge: Story = {
  args: {
    size: "lg",
    as: "p",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const ParagraphMedium: Story = {
  args: {
    size: "md",
    as: "p",
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
