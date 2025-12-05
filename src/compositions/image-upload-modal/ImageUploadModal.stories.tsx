import { fn } from "storybook/test";
import { ImageUploadModal } from "./ImageUploadModal";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/ImageUploadModal",
  component: ImageUploadModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageUploadModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "",
    onSendClick: fn(),
    onAvatarClick: fn(),
  },
};
