import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BinaryTabs } from "../components/tabs/BinaryTabs";

const meta = {
  title: "Components/BinaryTabs",
  component: BinaryTabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
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
    items: [
      { value: "mumbles", label: "Deine Mumbles" },
      { value: "likes", label: "Deine Likes" },
    ],
    defaultValue: "mumbles",
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
  args: {
    items: [
      { value: "mumbles", label: "Deine Mumbles" },
      { value: "likes", label: "Deine Likes" },
    ],
    variant: "muted",
  },
  render: (args) => {
    const ControlledWrapper: React.FC = () => {
      const [val, setVal] = React.useState<string>(args.items[0].value);
      return (
        <BinaryTabs
          {...args}
          value={val}
          onValueChange={(v) => {
            setVal(v);
            args.onValueChange?.(v);
          }}
        />
      );
    };
    return <ControlledWrapper />;
  },
  parameters: {
    docs: { description: { story: "Controlled Beispiel mit externem State." } },
  },
};

export const VariantDefault: Story = {
  args: {
    items: [
      { value: "mumbles", label: "Deine Mumbles" },
      { value: "likes", label: "Deine Likes" },
    ],
    defaultValue: "mumbles",
    variant: "default",
  },
  parameters: {
    docs: { description: { story: "Muted Tone = default." } },
  },
};

export const VariantMuted: Story = {
  args: {
    items: [
      { value: "mumbles", label: "Deine Mumbles" },
      { value: "likes", label: "Deine Likes" },
    ],
    defaultValue: "mumbles",
    variant: "muted",
  },
  parameters: {
    docs: { description: { story: "Muted Tone" } },
  },
};

// PanelsExample removed per request.
