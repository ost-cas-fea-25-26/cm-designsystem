// LogoLink.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { LogoLink } from "./LogoLink";

const meta: Meta<typeof LogoLink> = {
  title: "Branding/LogoLink",
  component: LogoLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LogoLink>;

export const Default: Story = {
  render: (args) => (
    <div className="inline-block bg-violet-600 p-8">
      <LogoLink {...args} />
      <p className="mt-4 text-white">
        Hover über das Logo, um den Wechsel zu sehen
      </p>
    </div>
  ),
};
