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
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Copy Link");
      await expect(canvas.getByText("Share")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Pressed: Story = {
  args: {
    onClick: fn(),
    pressed: true,
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Copy Link");
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
