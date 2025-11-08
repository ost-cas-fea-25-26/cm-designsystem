import { expect, fn } from "storybook/test";
import avatarImage from "../../assets/avatar.svg";
import { Profile } from "../icons/generated";
import { NaviUserButton } from "./NaviUserButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/NaviUserButton",
  component: NaviUserButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    intent: {
      control: "select",
    },
    label: {
      control: "text",
    },
    children: {
      control: "object",
    },
  },
} satisfies Meta<typeof NaviUserButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Secondary: Story = {
  args: {
    intent: "secondary",
    label: "Lorem ipsum",
    src: avatarImage,
    onClick: fn(),
    children: <Profile />,
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
      await expect(canvas.queryByText("Profile")).not.toBeInTheDocument();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const Fallback: Story = {
  args: {
    intent: "secondary",
    label: "Lorem ipsum",
    src: "",
    onClick: fn(),
    children: "PA",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByLabelText("Lorem ipsum")).toBeVisible();
      const fallback = await canvas.findByText("PA");
      await expect(fallback).toBeVisible();
    });

    await step("Check click event", async () => {
      const fallback = await canvas.findByText("PA");
      await userEvent.click(fallback);
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
