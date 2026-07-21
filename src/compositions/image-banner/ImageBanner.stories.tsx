import { fn } from "storybook/test";
import { ImageBanner } from "./ImageBanner";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/ImageBanner",
  component: ImageBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    alt: "Profile banner image",
    onClick: fn(),
  },
};

export const Fallback: Story = {
  args: {
    src: "",
    alt: "Profile banner image",
    onClick: fn(),
  },
};
