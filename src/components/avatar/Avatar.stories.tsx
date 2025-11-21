import { expect, fn, waitFor } from "storybook/test";
import avatarImage from "../../assets/avatar.svg";
import { Avatar } from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: "select",
      description: "Size of avatar (sm, md, lg, xl).",
    },
    label: {
      control: "text",
      description: "Accessible label for the avatar.",
    },
    src: {
      control: "text",
      description: "Image source URL for the avatar.",
    },
    children: {
      control: "object",
      description: "Fallback content (initials) when image is not available.",
    },
    onClick: {
      description: "Callback function when avatar is clicked.",
    },
    onActionClick: {
      description:
        "Optional callback for action button (only visible in xl size).",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    size: "sm",
    label: "Lorem ipsum",
    src: avatarImage,
    children: "PA",
    onClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await waitFor(() => expect(canvas.getByRole("img")).toBeVisible());
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    label: "Lorem ipsum",
    src: avatarImage,
    children: "PA",
    onClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("img")).toBeVisible();
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Lorem ipsum",
    src: avatarImage,
    children: "PA",
    onClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("img")).toBeVisible();
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    label: "Lorem ipsum",
    src: avatarImage,
    children: "PA",
    onClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("img")).toBeVisible();
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("img"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const ExtraLargeWithAction: Story = {
  args: {
    size: "xl",
    label: "Lorem ipsum",
    src: avatarImage,
    children: "PA",
    onClick: fn(),
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
      await expect(args.onClick).toHaveBeenCalled();
    });

    await step("Check action click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onActionClick).toHaveBeenCalled();
    });
  },
};

export const Fallback: Story = {
  args: {
    size: "md",
    label: "Lorem ipsum",
    src: "",
    children: "PA",
    onClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.queryByRole("img")).not.toBeInTheDocument();
      const fallback = await canvas.findByLabelText("Lorem ipsum");
      await expect(fallback).toHaveTextContent("PA");
    });

    await step("Check click event", async () => {
      const fallback = await canvas.findByLabelText("Lorem ipsum");
      await userEvent.click(fallback);
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
