import { fn } from "storybook/test";
import { PostCreator } from "./PostCreator";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Posts/PostCreator",
  component: PostCreator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostCreator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "",
    onSendClick: fn(),
    onAvatarClick: fn(),
  },
};
