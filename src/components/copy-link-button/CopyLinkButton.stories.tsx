import { expect, fn } from "storybook/test";
import { CopyLinkButton } from "./CopyLinkButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/CopyLinkButton",
  component: CopyLinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    pressed: {
      control: "boolean",
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof CopyLinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
    pressed: false,
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
    onClick: fn(),
    pressed: false,
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
    onClick: fn(),
    pressed: true,
  },
  play: async ({ canvas, step }) => {
    await step("Check pressed state", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Copy Link");
    });
  },
};

export const InteractiveFlow: Story = {
  args: {
    onClick: fn(),
    pressed: false,
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
  },
};
