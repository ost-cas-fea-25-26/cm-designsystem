import { ValidationMessage } from "./ValidationMessage";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography/ValidationMessage",
  component: ValidationMessage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    as: { control: "text", description: "Render test with given HTML tag." },
    type: { control: "text", description: "Type of Validation message." },
    children: { control: "text", description: "Validation message text." },
    className: {
      control: "text",
      description: "Classes to override styling of component.",
    },
  },
} satisfies Meta<typeof ValidationMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    as: "span",
    type: "error",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const CustomTag: Story = {
  args: {
    as: "h1",
    type: "error",
    children: "Lorem ipsum dolor sit amet",
  },
};
