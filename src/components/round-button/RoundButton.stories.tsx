import { expect, fn } from "storybook/test";
import { Mumble } from "../icons/generated";
import { RoundButton } from "./RoundButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/RoundButton",
  component: RoundButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    intent: {
      control: "select",
      description: "Button style variant (primary).",
    },
    ariaLabel: {
      control: "text",
      description: "Accessible label for the icon-only button.",
    },
    onClick: {
      description: "Callback function when button is clicked.",
    },
    children: {
      control: "object",
      description: "Icon component to display in the button.",
    },
  },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    intent: "primary",
    ariaLabel: "AriaLabel",
    onClick: fn(),
    children: <Mumble />,
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
