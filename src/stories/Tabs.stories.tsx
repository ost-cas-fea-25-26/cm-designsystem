import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "../components/tabs/Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    textTabLeft: "Deine Mumbles",
    textTabRight: "Deine Likes",
    active: "left",
    variant: "muted",
  },
  argTypes: {
    active: { control: { type: "radio" }, options: ["left", "right"] },
    variant: {
      control: { type: "radio" },
      options: ["muted", "default"],
      description: "Variant defines inactive tone (muted vs default)",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Tabs {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with accent tone (active) and variant-driven inactive tone (muted | default). 'inactiveTone' is deprecated.",
      },
    },
  },
};

export const VariantMuted: Story = {
  render: (args) => <Tabs {...args} />,
  args: {
    textTabLeft: "Deine Mumbles",
    textTabRight: "Deine Likes",
    active: "left",
    variant: "muted",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variant 'muted': inactive tabs use muted tone (lower visual weight).",
      },
    },
  },
};

export const VariantDefault: Story = {
  render: (args) => <Tabs {...args} />,
  args: {
    textTabLeft: "Deine Mumbles",
    textTabRight: "Deine Likes",
    active: "left",
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Variant 'default': inactive tabs use default tone (higher contrast).",
      },
    },
  },
};
