import { Paragraph } from "./Paragraph";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

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

/**
 * Override the default HTML tag, so that typography is rendered as `span`.
 */
export const CustomTag: Story = {
  args: {
    size: "lg",
    as: "span",
    children: "Lorem ipsum dolor sit amet",
  },
};
