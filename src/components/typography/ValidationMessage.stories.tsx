import { ValidationMessage } from "./ValidationMessage";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Typography/ValidationMessage",
  component: ValidationMessage,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ValidationMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "span",
    type: "error",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const Error: Story = {
  args: {
    as: "span",
    type: "error",
    children: "Lorem ipsum dolor sit amet",
  },
};

/**
 * Override the default HTML tag, so that typography is rendered as `span`.
 */
export const CustomTag: Story = {
  args: {
    as: "h1",
    type: "error",
    children: "Lorem ipsum dolor sit amet",
  },
};
