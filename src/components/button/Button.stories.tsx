import { expect, fn } from "storybook/test";
import { Mumble } from "../icons/generated";
import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    intent: "primary",
    onClick: fn(),
    icon: Mumble,
    children: "Lorem ipsum",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Mumble")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Secondary: Story = {
  args: {
    size: "md",
    intent: "secondary",
    onClick: fn(),
    icon: Mumble,
    children: "Lorem ipsum",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Mumble")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Tertiary: Story = {
  args: {
    size: "md",
    intent: "tertiary",
    onClick: fn(),
    icon: Mumble,
    children: "Lorem ipsum",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Mumble")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

/**
 * Buttons also come in various sizes.
 */
export const Large: Story = {
  args: {
    size: "lg",
    intent: "tertiary",
    onClick: fn(),
    icon: Mumble,
    children: "Lorem ipsum",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Mumble")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

/**
 * Buttons also can only display text. Just drop the icon prop.
 */
export const NoIcon: Story = {
  args: {
    size: "md",
    intent: "tertiary",
    onClick: fn(),
    children: "Lorem ipsum",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.queryByText("Mumble")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
