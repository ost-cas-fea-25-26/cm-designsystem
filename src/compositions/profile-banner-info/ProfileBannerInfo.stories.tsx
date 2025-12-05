import { fn } from "storybook/test";
import { ProfileBannerInfo } from "./ProfileBannerInfo";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/ProfileBannerInfo",
  component: ProfileBannerInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileBannerInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    displayName: "Display Name",
    userName: "Username",
    location: "Location",
    joinedTimestamp: new Date(new Date().getTime() - 5 * 60 * 1000),
    onClick: fn(),
  },
};
