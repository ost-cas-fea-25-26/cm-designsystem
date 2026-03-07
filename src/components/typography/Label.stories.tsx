import { Label } from "./Label";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Typography/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

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
