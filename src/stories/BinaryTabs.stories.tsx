import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BinaryTabs } from "../components/tabs/BinaryTabs";

const meta = {
  title: "Components/BinaryTabs",
  component: BinaryTabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    leftLabel: "Deine Mumbles",
    rightLabel: "Deine Likes",
    variant: "muted",
  },
  argTypes: {
    variant: { control: { type: "radio" }, options: ["muted", "default"] },
    value: { control: false },
    onValueChange: { action: "valueChange" },
  },
} satisfies Meta<typeof BinaryTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Uncontrolled: Story = {
  args: {
    leftLabel: "Deine Mumbles",
    rightLabel: "Deine Likes",
    defaultValue: "left",
    variant: "muted",
  },
  parameters: {
    docs: {
      description: {
        story: "Uncontrolled Nutzung mit defaultValue (interner State).",
      },
    },
  },
};

// Playground: use story controls & actions to observe changes.

export const Controlled: Story = {
  render: (args) => {
    const ControlledExample: React.FC<typeof args> = (props) => {
      const [val, setVal] = React.useState<"left" | "right">("left");
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
    return <ControlledExample {...args} />;
  },
  args: {
    leftLabel: "Deine Mumbles",
    rightLabel: "Deine Likes",
    variant: "muted",
  },
  parameters: {
    docs: { description: { story: "Controlled Beispiel mit externem State." } },
  },
};

export const VariantDefault: Story = {
  args: {
    leftLabel: "Deine Mumbles",
    rightLabel: "Deine Likes",
    defaultValue: "left",
    variant: "default",
  },
  parameters: {
    docs: { description: { story: "Muted Tone = default." } },
  },
};

export const VariantMuted: Story = {
  args: {
    leftLabel: "Deine Mumbles",
    rightLabel: "Deine Likes",
    defaultValue: "left",
    variant: "muted",
  },
  parameters: {
    docs: { description: { story: "Muted Tone" } },
  },
};
