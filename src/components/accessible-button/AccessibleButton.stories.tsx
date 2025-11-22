import { expect, fn } from "storybook/test";
import { AccessibleButton } from "./AccessibleButton";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../typography/Label";

const meta = {
  title: "Components/Buttons/AccessibleButton",
  component: AccessibleButton,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccessibleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: "Lorem ipsum",
    onClick: fn(),
    children: <Label size="md">Lorem ipsum</Label>,
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Lorem ipsum")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
