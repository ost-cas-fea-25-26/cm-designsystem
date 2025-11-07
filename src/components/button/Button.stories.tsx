import { expect } from "storybook/internal/test";
import { Calendar, Mumble } from "../icons/generated";
import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
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
    size: {
      control: "select",
    },
    label: {
      control: "text",
    },
    children: {
      control: "object",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    size: "md",
    intent: "primary",
    label: "Lorem ipsum",
    onClick: () => {},
    children: <Mumble />,
  },
  play: async ({ canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Mumble")).toBeVisible();
    });
  },
};

export const Secondary: Story = {
  args: {
    size: "md",
    intent: "secondary",
    label: "Lorem ipsum",
    onClick: () => {},
    children: <Mumble />,
  },
  play: async ({ canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Mumble")).toBeVisible();
    });
  },
};

export const Tertiary: Story = {
  args: {
    size: "md",
    intent: "tertiary",
    label: "Lorem ipsum",
    onClick: () => {},
    children: <Mumble />,
  },
  play: async ({ canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Mumble")).toBeVisible();
    });
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    intent: "tertiary",
    label: "Lorem ipsum",
    onClick: () => {},
    children: <Mumble />,
  },
  play: async ({ canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.getByText("Mumble")).toBeVisible();
    });
  },
};

export const NoIcon: Story = {
  args: {
    size: "md",
    intent: "tertiary",
    label: "Lorem ipsum",
    onClick: () => {},
  },
  play: async ({ canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem ipsum");
      await expect(canvas.queryByText("Mumble")).not.toBeInTheDocument();
    });
  },
};
