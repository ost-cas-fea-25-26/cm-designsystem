import { expect } from "storybook/test";
import { Toggle } from "./Toggle";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Storybook meta configuration mirroring style of Tabs stories
const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toggle supports an ephemeral 'Liked' state for 2s when transitioning from 0 likes to 1 like. After the delay the label dissolves and shows '1 Like'. Passing likes > 0 skips the delay and increments immediately on press.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    pressed: {
      control: "boolean",
      description: "Whether toggle is visually pressed",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for the toggle",
    },
    likes: {
      control: { type: "number", min: 0 },
      description: "Existing like count (0 = first like animation)",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoLikes: Story = {
  args: {
    pressed: false,
    ariaLabel: "Like",
    likes: 0,
    children: "Toggle",
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
    likes: 0,
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
    likes: 5,
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
    likes: 0,
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
    likes: 5,
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
    ariaLabel: "1 Like",
    likes: 1,
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

export const LikedMultiple: Story = {
  args: {
    pressed: true,
    ariaLabel: "12 Likes",
    likes: 12,
    children: "Toggle",
  },
  play: async ({ canvas, step }) => {
    await step(
      "Shows pressed state with existing likes (includes +1 visually)",
      async () => {
        await expect(
          canvas.getByRole("button", { name: /12 Likes/i })
        ).toBeVisible();
        await expect(canvas.getByText(/12 Likes/)).toBeVisible();
      }
    );
  },
};
