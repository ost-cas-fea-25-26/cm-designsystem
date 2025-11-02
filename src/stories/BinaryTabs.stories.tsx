import type { Meta, StoryObj } from "@storybook/react-vite";
import { BinaryTabs } from "../components/tabs/BinaryTabs";
import * as React from "react";

const meta = {
  title: "Components/BinaryTabs",
  component: BinaryTabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    leftLabel: "Deine Mumbles",
    rightLabel: "Deine Likes",
    variant: "muted",
    defaultValue: "left",
  },
  argTypes: {
    variant: { control: { type: "radio" }, options: ["muted", "default"] },
    value: { control: false },
    onValueChange: { action: "valueChange" },
  },
} satisfies Meta<typeof BinaryTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Zwei Tabs: Accent für aktiv, Variant-Ton für inaktiv.",
      },
    },
  },
};

const ControlledWrapper = (props: React.ComponentProps<typeof BinaryTabs>) => {
  const [val, setVal] = React.useState(props.defaultValue || "left");
  return (
    <BinaryTabs
      {...props}
      value={val}
      onValueChange={(v) => {
        setVal(v);
        props.onValueChange?.(v);
      }}
    />
  );
};

export const Controlled: Story = {
  render: (args) => <ControlledWrapper {...args} />,
  parameters: {
    docs: { description: { story: "Controlled Variante mit internem State." } },
  },
};

export const VariantDefault: Story = {
  args: { variant: "default" },
  parameters: {
    docs: { description: { story: "Inactive Tone = default." } },
  },
};
