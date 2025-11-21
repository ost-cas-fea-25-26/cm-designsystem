import { Placeholder } from "./Placeholder";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Typography/Placeholder",
  component: Placeholder,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "span",
    children: "Lorem ipsum dolor sit amet",
  },
};

/**
 * Override the default HTML tag, so that typography is rendered as `span`.
 */
export const CustomTag: Story = {
  args: {
    as: "h1",
    children: "Lorem ipsum dolor sit amet",
  },
};
