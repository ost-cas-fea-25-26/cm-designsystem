import { fn } from "storybook/test";
import { AccessibleTypography } from "./AccessibleTypography";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Typography/AccessibleTypography",
  component: AccessibleTypography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccessibleTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children: "Lorem ipsum dolor sit amet",
    ariaLabel: "Example Text",
  },
};

/**
 * When a `onClick()` is given the text gets clickable and shows the pointer cursor on hover.
 */
export const Clickable: Story = {
  args: {
    as: "h1",
    children: "Lorem ipsum dolor sit amet",
    ariaLabel: "Example Text",
    onClick: fn(),
  },
};
