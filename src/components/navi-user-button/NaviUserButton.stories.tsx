import { expect, fn, waitFor } from "storybook/test";
import avatarImage from "../../assets/avatar.svg";
import { NaviUserButton } from "./NaviUserButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Buttons/NaviUserButton",
  component: NaviUserButton,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NaviUserButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    intent: "secondary",
    ariaLabel: "Lorem ipsum",
    alt: "Alt Description",
    src: avatarImage,
    onClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toBeVisible();
      await expect(button).toHaveAccessibleName(/lorem ipsum/i);
      await waitFor(() =>
        expect(canvas.getByRole("img")).toHaveAccessibleName(/alt description/i)
      );
      await expect(canvas.queryByText("PA")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

/**
 * When image could not be loaded and no custom fallback defined.
 * A default fallback will be applied.
 */
export const DefaultFallback: Story = {
  args: {
    intent: "secondary",
    alt: "Lorem ipsum",
    src: "",
    onClick: fn(),
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      const fallback = await canvas.findByAltText("Lorem ipsum");
      await expect(fallback).toBeVisible();
    });

    await step("Check click event", async () => {
      const fallback = await canvas.findByAltText("Lorem ipsum");
      await userEvent.click(fallback);
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
