import { expect, fn, waitFor } from "storybook/test";
import avatarImage from "../../assets/avatar.svg";
import { Avatar } from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
    alt: "Lorem ipsum",
    src: avatarImage,
    onAvatarClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await waitFor(() => expect(canvas.getByRole("img")).toBeVisible());
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onAvatarClick).toHaveBeenCalled();
    });
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    alt: "Lorem ipsum",
    src: avatarImage,
    onAvatarClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("img")).toBeVisible();
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onAvatarClick).toHaveBeenCalled();
    });
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    alt: "Lorem ipsum",
    src: avatarImage,
    onAvatarClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("img")).toBeVisible();
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onAvatarClick).toHaveBeenCalled();
    });
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    alt: "Lorem ipsum",
    src: avatarImage,
    onAvatarClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("img")).toBeVisible();
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onAvatarClick).toHaveBeenCalled();
    });
  },
};

/**
 * The extra large variant of the Avatar component provides an optional edit action button.
 */
export const ExtraLargeWithAction: Story = {
  args: {
    size: "xl",
    alt: "Lorem ipsum",
    actionAriaLabel: "Edit Profile",
    src: avatarImage,
    onAvatarClick: fn(),
    onActionClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("img")).toBeVisible();
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.getByRole("button")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onAvatarClick).toHaveBeenCalled();
    });

    await step("Check action click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onActionClick).toHaveBeenCalled();
    });
  },
};

/**
 * Fallback to a default image.
 */
export const DefaultFallback: Story = {
  args: {
    size: "md",
    alt: "Lorem ipsum",
    src: "",
    onAvatarClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.queryByRole("img")).toBeInTheDocument();
      await canvas.findByAltText("Lorem ipsum");
    });

    await step("Check click event", async () => {
      const fallback = await canvas.findByAltText("Lorem ipsum");
      await userEvent.click(fallback);
      await expect(args.onAvatarClick).toHaveBeenCalled();
    });
  },
};
