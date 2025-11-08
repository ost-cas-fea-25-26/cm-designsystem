import { expect } from "storybook/test";
import { Toggle } from "./Toggle";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Storybook meta configuration mirroring style of Tabs stories
const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    pressed: { control: "boolean" },
    children: { control: "text" },
    ariaLabel: { control: "text" },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pressed: false,
    ariaLabel: "Like",
    children: "Likes",
  },
  play: async ({ canvas, step }) => {
    await step("Check initial render (unpressed)", async () => {
      // Button visible
      await expect(canvas.getByRole("button", { name: /Like/i })).toBeVisible();
      // Outline icon label present
      await expect(canvas.getByText("HeartOutline")).toBeVisible();
    });
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    ariaLabel: "Liked",
    children: "Liked",
  },
  play: async ({ canvas, step }) => {
    await step("Check initial render (pressed)", async () => {
      await expect(
        canvas.getByRole("button", { name: /Liked/i })
      ).toBeVisible();
      await expect(canvas.getByText("HeartFilled")).toBeVisible();
    });
  },
};
