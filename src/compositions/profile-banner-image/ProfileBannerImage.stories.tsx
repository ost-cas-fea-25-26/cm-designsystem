import { fn } from "storybook/test";
import { ProfileBannerImage } from "./ProfileBannerImage";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Profile/ProfileBannerImage",
  component: ProfileBannerImage,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileBannerImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    alt: "Profile banner image",
    onClick: () => fn(),
  },
};

export const Fallback: Story = {
  args: {
    src: "",
    alt: "Profile banner image",
    onClick: fn(),
  },
};
