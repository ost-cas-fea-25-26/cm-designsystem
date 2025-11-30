import { expect, fn } from "storybook/test";
import { Profile } from "../icons/generated";
import { IconButton } from "./IconButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: "primary",
    onClick: fn(),
    icon: Profile,
    children: "Lorem ipsum",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Profile")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    onClick: fn(),
    icon: Profile,
    children: "Lorem ipsum",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Profile")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
