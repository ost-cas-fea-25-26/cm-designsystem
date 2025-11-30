import { fn } from "storybook/test";
import { UserInfo } from "./UserInfo";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/UserInfo",
  component: UserInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

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
