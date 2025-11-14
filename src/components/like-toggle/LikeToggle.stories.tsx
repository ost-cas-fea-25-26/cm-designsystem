import { expect, userEvent } from "storybook/test";
import { LikeToggle } from "./LikeToggle";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Storybook meta configuration mirroring style of Tabs stories
const meta = {
  title: "Components/LikeToggle",
  component: LikeToggle,
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
    onLikeChange: {
      action: "likeChanged",
      description: "Callback invoked after user toggles like (pressed state).",
    },
  },
} satisfies Meta<typeof LikeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoLikes: Story = {
  args: {
    pressed: false,
    ariaLabel: "Like",
    likes: 0,
    onLikeChange: () => {},
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
    onLikeChange: () => {},
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
    onLikeChange: () => {},
  },
  play: async ({ canvas, step }) => {
    await step("Shows existing likes count", async () => {
      await expect(
        canvas.getByRole("button", { name: /5 Likes/i })
      ).toBeVisible();
      await expect(canvas.getByText(/5 Likes/)).toBeVisible();
    });

    await step("Click like -> 6 Likes", async () => {
      await userEvent.click(canvas.getByRole("button", { name: /5 Likes/i }));
      await expect(canvas.getByText(/Liked/)).toBeVisible();

      await new Promise((r) => setTimeout(r, 2500));
      await expect(canvas.getByText(/6 Likes/)).toBeVisible();
    });
  },
};

export const ExistingLikesLiked: Story = {
  args: {
    pressed: true,
    ariaLabel: "5 Likes",
    likes: 5,
    onLikeChange: () => {},
  },
  play: async ({ canvas, step }) => {
    await step("Shows pressed state with existing 5 likes", async () => {
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
    onLikeChange: () => {},
  },
  render: (args) => {
    return <LikeToggle {...args} />;
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

export const Liked: Story = {
  args: {
    pressed: true,
    ariaLabel: "1 Like",
    likes: 1,
    onLikeChange: () => {},
  },
  play: async ({ canvas, step }) => {
    await step("Shows pressed single like", async () => {
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
    onLikeChange: () => {},
  },
  play: async ({ canvas, step }) => {
    await step("Shows pressed multiple likes", async () => {
      await expect(
        canvas.getByRole("button", { name: /12 Likes/i })
      ).toBeVisible();
      await expect(canvas.getByText(/12 Likes/)).toBeVisible();
    });

    await step("Unlike", async () => {
      await userEvent.click(canvas.getByRole("button", { name: /12 Likes/i }));
      await new Promise((r) => setTimeout(r, 2500));
      await expect(canvas.getByText(/11 Likes/)).toBeVisible();
    });
  },
};
