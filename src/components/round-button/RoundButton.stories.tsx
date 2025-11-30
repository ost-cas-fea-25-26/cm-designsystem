import { expect, fn } from "storybook/test";
import { Mumble } from "../icons/generated";
import { RoundButton } from "./RoundButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Buttons/RoundButton",
  component: RoundButton,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: "primary",
    ariaLabel: "AriaLabel",
    onClick: fn(),
    icon: Mumble,
  },
  play: async ({ args, canvas, userEvent, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByText("Mumble")).toBeVisible();
      await expect(canvas.getByLabelText("AriaLabel")).toBeVisible();
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
