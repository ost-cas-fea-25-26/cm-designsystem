import { expect, fn } from "storybook/test";
import { TimedButton } from "./TimedButton";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Share } from "../icons/generated";

const meta = {
  title: "Components/Buttons/TimedButton",
  component: TimedButton,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Share,
    label: "Copy Link",
    labelActive: "Link copied",
    onClick: fn(),
  },
  play: async ({ canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Copy Link");
      await expect(canvas.getByText("Share")).toBeVisible();
    });
  },
};

export const DefaultHover: Story = {
  args: {
    icon: Share,
    label: "Copy Link",
    labelActive: "Link copied",
    onClick: fn(),
  },
  play: async ({ canvas, step, userEvent }) => {
    const button = canvas.getByRole("button");
    await step("Hover over button", async () => {
      await userEvent.hover(button);
      await expect(button).toBeVisible();
      await expect(button).toHaveTextContent("Copy Link");
    });
  },
};

export const Pressed: Story = {
  args: {
    icon: Share,
    label: "Copy Link",
    labelActive: "Link copied",
    onClick: fn(),
  },
  play: async ({ canvas, step, userEvent }) => {
    await step("Click button to show pressed state", async () => {
      const button = canvas.getByRole("button");
      await userEvent.click(button);
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Link copied");
    });
  },
};

export const InteractiveFlow: Story = {
  args: {
    icon: Share,
    label: "Copy Link",
    labelActive: "Link copied",
    onClick: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    const button = canvas.getByRole("button");

    await step("Initial state - default", async () => {
      await expect(button).toBeVisible();
      await expect(button).toHaveTextContent("Copy Link");
      await expect(canvas.getByText("Share")).toBeVisible();
    });

    await step("Hover over button", async () => {
      await userEvent.hover(button);
      await expect(button).toBeVisible();
    });

    await step("Click to copy link", async () => {
      await userEvent.click(button);
      await expect(args.onClick).toHaveBeenCalled();
    });

    await step(
      "Label changes to 'Link copied' with dissolve animation",
      async () => {
        await new Promise((r) => setTimeout(r, 400));
        await expect(button).toHaveTextContent("Link copied");
      }
    );

    await step("After 1s delay, returns to default state", async () => {
      await new Promise((r) => setTimeout(r, 1100));
      await expect(button).toHaveTextContent("Copy Link");
    });
  },
};
