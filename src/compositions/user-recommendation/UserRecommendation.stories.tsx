import { fn } from "storybook/test";
import { UserRecommendation } from "./UserRecommendation";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compositions/UserRecommendation",
  component: UserRecommendation,
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
} satisfies Meta<typeof UserRecommendation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
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
