// LogoLink.stories.tsx
import { LogoLink } from "./LogoLink";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof LogoLink> = {
  title: "Branding/LogoLink",
  component: LogoLink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "violet" }, // Storybook Background
  },
};

export default meta;
type Story = StoryObj<typeof LogoLink>;

export const Default: Story = {
  args: {
    href: "#",
  },
  render: (args) => (
    <div className="bg-violet-600 p-10">
      <LogoLink {...args} />
    </div>
  ),
};
