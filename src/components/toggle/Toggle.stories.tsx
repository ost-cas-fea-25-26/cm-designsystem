import { expect, fn } from "storybook/test";
import { Toggle } from "./Toggle";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toggle component displays a Comment icon that switches between filled and outline states based on whether there is data. Used for toggling Comment status.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ariaLabel: {
      control: "text",
      description: "Accessible label for the toggle",
    },
    labelText: {
      control: "text",
      description: "Text label displayed next to the icon",
    },
    pressed: {
      control: "boolean",
      description: "Initial pressed state of the toggle",
    },
    hasData: {
      control: "boolean",
      description: "Whether the toggle has data (affects icon state)",
    },
    onToggle: {
      action: "toggled",
      description: "Callback invoked when the toggle state changes",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoData: Story = {
  args: {
    ariaLabel: "Comment",
    labelText: "Comment",
    pressed: false,
    hasData: false,
    onToggle: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step("Check initial render without data", async () => {
      await expect(
        canvas.getByRole("button", { name: /Comment/i })
      ).toBeVisible();
      await expect(canvas.getByText("Comment")).toBeVisible();
      await expect(canvas.getByLabelText("CommentOutline")).toBeInTheDocument();
    });

    await step("Click toggle", async () => {
      await userEvent.click(canvas.getByRole("button", { name: /Comment/i }));
      await expect(args.onToggle).toHaveBeenCalledWith(true);
    });
  },
};

export const WithData: Story = {
  args: {
    ariaLabel: "Comment",
    labelText: "Comment",
    pressed: false,
    hasData: true,
    onToggle: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step("Check initial render with data", async () => {
      await expect(
        canvas.getByRole("button", { name: /Comment/i })
      ).toBeVisible();
      await expect(canvas.getByText("Comment")).toBeVisible();
      await expect(canvas.getByLabelText("CommentFilled")).toBeInTheDocument();
    });

    await step("Click toggle", async () => {
      await userEvent.click(canvas.getByRole("button", { name: /Comment/i }));
      await expect(args.onToggle).toHaveBeenCalledWith(true);
    });
  },
};

export const Pressed: Story = {
  args: {
    ariaLabel: "Comment",
    labelText: "Comment",
    pressed: true,
    hasData: true,
    onToggle: fn(),
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step("Check initial pressed state", async () => {
      await expect(
        canvas.getByRole("button", { name: /Comment/i })
      ).toBeVisible();
      await expect(canvas.getByText("Comment")).toBeVisible();
      await expect(canvas.getByLabelText("CommentFilled")).toBeInTheDocument();
    });

    await step("Click to unpress toggle", async () => {
      await userEvent.click(canvas.getByRole("button", { name: /Comment/i }));
      await expect(args.onToggle).toHaveBeenCalledWith(false);
    });
  },
};

export const CustomLabel: Story = {
  args: {
    ariaLabel: "Comment on post",
    labelText: "Comment",
    pressed: false,
    hasData: false,
    onToggle: fn(),
  },
  play: async ({ canvas, step }) => {
    await step("Check custom labels", async () => {
      await expect(
        canvas.getByRole("button", { name: /Comment on post/i })
      ).toBeVisible();
      await expect(canvas.getByText("Comment")).toBeVisible();
    });
  },
};
