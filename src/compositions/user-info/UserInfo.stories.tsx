import { fn } from "storybook/test";
import { UserInfo } from "./UserInfo";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compositions/UserInfo",
  component: UserInfo,
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
    size: {
      control: "select",
      description: "Size of user (sm, md, lg, xl).",
    },
  },
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    size: "sm",
    src: "example",
    displayName: "Display Name",
    userName: "Username",
    timestamp: new Date(new Date().getTime() - 5 * 60 * 1000),
    onClick: fn(),
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    displayName: "Display Name",
    userName: "Username",
    timestamp: new Date(new Date().getTime() - 5 * 60 * 1000),
    onClick: fn(),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    displayName: "Display Name",
    userName: "Username",
    timestamp: new Date(new Date().getTime() - 5 * 60 * 1000),
    onClick: fn(),
  },
};
