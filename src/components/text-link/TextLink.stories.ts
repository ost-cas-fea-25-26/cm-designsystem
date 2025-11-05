import { TextLink } from "./TextLink";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TextLink",
  component: TextLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    href: "https://example.com",
    children: "Example Link",
  },
};

export const Hover: Story = {
  args: {
    href: "https://example.com",
    children: "Hover over this link",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hover over the link to see the decoration color change from violet-600 to violet-200.",
      },
    },
  },
};
