import { Heading } from "./Heading";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    size: "1",
    as: "h1",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const Heading2: Story = {
  args: {
    size: "2",
    as: "h2",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const Heading3: Story = {
  args: {
    size: "3",
    as: "h3",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const Heading4: Story = {
  args: {
    size: "4",
    as: "h4",
    children: "Lorem ipsum dolor sit amet",
  },
};

/**
 * Override the default HTML tag, so that typography is rendered as `span`.
 */
export const CustomTag: Story = {
  args: {
    size: "1",
    as: "span",
    children: "Lorem ipsum dolor sit amet",
  },
};
