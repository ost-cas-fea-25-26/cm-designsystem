import { fn } from "storybook/test";
import { UserRecommendation } from "./UserRecommendation";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/UserRecommendation",
  component: UserRecommendation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserRecommendation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "example",
    displayName: "Display Name",
    userName: "Username",
    label: "Follow",
    onProfileClick: fn(),
    onFollowClick: fn(),
  },
};
