import { Heading, Paragraph } from "../../components";
import { PostBase } from "./PostBase";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Posts/PostBase",
  component: PostBase,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <Heading size="4" as="h4">
          This is a Test!
        </Heading>
        <Paragraph size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </div>
    ),
  },
};
