import { useEffect, useState } from "react";
import { expect, fn } from "storybook/test";
import { Toggle } from "./Toggle";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered"
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
      description: "Pressed state of the toggle (affects icon and styling)",
    },
    onToggle: {
      action: "toggled",
      description: "Callback invoked when the toggle state changes",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unpressed: Story = {
  args: {
    ariaLabel: "Comment",
    labelText: "Comment",
    pressed: false,
    onToggle: fn(),
  },
  render: (args) => {
    const [pressed, setPressed] = useState(args.pressed);

    useEffect(() => {
      setPressed(args.pressed);
    }, [args.pressed]);

    const handleToggle = (toggled: boolean) => {
      setPressed(toggled);
      args.onToggle?.(toggled);
    };

    return <Toggle {...args} pressed={pressed} onToggle={handleToggle} />;
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step("Check initial unpressed state", async () => {
      const button = canvas.getByRole("button", { name: /Comment/i });
      await expect(button).toBeVisible();
      await expect(canvas.getByText("Comment")).toBeVisible();
      await expect(canvas.getByLabelText("ReplyOutline")).toBeInTheDocument();
    });

    await step("Click toggle to press", async () => {
      const button = canvas.getByRole("button", { name: /Comment/i });
      await userEvent.click(button);
      await expect(args.onToggle).toHaveBeenCalledWith(true);
      await expect(canvas.getByLabelText("ReplyFilled")).toBeInTheDocument();
    });
  },
};

export const Pressed: Story = {
  args: {
    ariaLabel: "Comment",
    labelText: "Comment",
    pressed: true,
    onToggle: fn(),
  },
  render: (args) => {
    const [pressed, setPressed] = useState(args.pressed);

    useEffect(() => {
      setPressed(args.pressed);
    }, [args.pressed]);

    const handleToggle = (toggled: boolean) => {
      setPressed(toggled);
      args.onToggle?.(toggled);
    };

    return <Toggle {...args} pressed={pressed} onToggle={handleToggle} />;
  },
  play: async ({ args, canvas, step, userEvent }) => {
    await step("Check initial pressed state", async () => {
      const button = canvas.getByRole("button", { name: /Comment/i });
      await expect(button).toBeVisible();
      await expect(canvas.getByText("Comment")).toBeVisible();
      await expect(canvas.getByLabelText("ReplyFilled")).toBeInTheDocument();
    });

    await step("Click to unpress toggle", async () => {
      const button = canvas.getByRole("button", { name: /Comment/i });
      await userEvent.click(button);
      await expect(args.onToggle).toHaveBeenCalledWith(false);
      await expect(canvas.getByLabelText("ReplyOutline")).toBeInTheDocument();
    });
  },
};

export const CustomLabel: Story = {
  args: {
    ariaLabel: "Comment on post",
    labelText: "Comment",
    pressed: false,
    onToggle: fn(),
  },
  render: (args) => {
    const [pressed, setPressed] = useState(args.pressed);

    useEffect(() => {
      setPressed(args.pressed);
    }, [args.pressed]);

    const handleToggle = (toggled: boolean) => {
      setPressed(toggled);
      args.onToggle?.(toggled);
    };

    return <Toggle {...args} pressed={pressed} onToggle={handleToggle} />;
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
