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
    ariaLabel: { control: "text" },
    hasData: { control: { type: "number", min: 0 } },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoLikes: Story = {
  args: {
    pressed: false,
    ariaLabel: "Like",
    hasData: 0,
    children: "Toggle", // required but unused
  },
  play: async ({ canvas, step }) => {
    await step("Initial label is 'Like'", async () => {
      await expect(canvas.getByRole("button", { name: /Like/i })).toBeVisible();
      await expect(canvas.getByText(/Like$/)).toBeVisible();
    });
  },
};

export const NoLikesHover: Story = {
  args: {
    pressed: false,
    ariaLabel: "Like",
    hasData: 0,
    children: "Toggle",
  },
  play: async ({ canvas, step, userEvent }) => {
    const button = canvas.getByRole("button", { name: /Like/i });
    await step("Hover over Like", async () => {
      await userEvent.hover(button);
      // We can't directly assert Tailwind classes via testing-library, but we can check aria-label stays and text still visible
      await expect(button).toBeVisible();
      await expect(canvas.getByText(/Like$/)).toBeVisible();
    });
  },
};

export const ExistingLikes: Story = {
  args: {
    pressed: false,
    ariaLabel: "5 Likes",
    hasData: 5,
    children: "Toggle",
  },
  play: async ({ canvas, step }) => {
    await step("Shows existing likes count", async () => {
      await expect(
        canvas.getByRole("button", { name: /5 Likes/i })
      ).toBeVisible();
      await expect(canvas.getByText(/5 Likes/)).toBeVisible();
    });
  },
};

export const FirstLikeAnimation: Story = {
  args: {
    ariaLabel: "Like",
    hasData: 0,
    children: "Toggle",
  },
  render: (args) => {
    return <Toggle {...args} />;
  },
  play: async ({ canvas, step, userEvent }) => {
    const button = canvas.getByRole("button", { name: /Like/i });
    await step("Click to trigger 'Liked'", async () => {
      await userEvent.click(button);
      await expect(canvas.getByText(/Liked/)).toBeVisible();
    });
    await step("After 2s label becomes '1 Like'", async () => {
      await new Promise((r) => setTimeout(r, 2100));
      await expect(canvas.getByText(/1 Like/)).toBeVisible();
    });
  },
};

export const IncrementExistingLikes: Story = {
  args: {
    ariaLabel: "5 Likes",
    hasData: 5,
    children: "Toggle",
  },
  render: (args) => {
    return <Toggle {...args} />;
  },
  play: async ({ canvas, step, userEvent }) => {
    const button = canvas.getByRole("button", { name: /5 Likes/i });
    await step(
      "Click adds immediate +1 (label updates after animation logic)",
      async () => {
        await userEvent.click(button);
        await expect(canvas.getByText(/Liked/)).toBeVisible();
      }
    );
  },
};

export const Liked: Story = {
  args: {
    pressed: true,
    ariaLabel: "0 Like",
    hasData: 0,
    children: "Toggle",
  },
  play: async ({ canvas, step }) => {
    await step("Shows pressed liked state with final count", async () => {
      await expect(
        canvas.getByRole("button", { name: /1 Like/i })
      ).toBeVisible();
      await expect(canvas.getByText(/1 Like/)).toBeVisible();
    });
  },
};
