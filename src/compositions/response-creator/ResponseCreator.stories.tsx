import { fn } from "storybook/test";
import { ResponseCreator } from "./ResponseCreator";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Posts/ResponseCreator",
  component: ResponseCreator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResponseCreator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "example",
    displayName: "Display Name",
    userName: "Username",
    onSendClick: (text: string, file: File | null) => console.log(text, file),
    onAvatarClick: fn(),
  },
};
