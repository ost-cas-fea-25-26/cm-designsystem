import { Heading } from "./Heading";
import { Label } from "./Label";
import { Paragraph } from "./Paragraph";
import { Placeholder } from "./Placeholder";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Combined typography showcase converting former MDX page to CSF stories.
const meta: Meta = {
  title: "Components/Typography/Typography",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          'Font: Google Font "Poppins"\n\nWeights: 500 (medium), 600 (semibold), 700 (bold)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <Heading size="1" as="h1">Lorem ipsum dolor sit amet</Heading>
      <Heading size="2" as="h2">Lorem ipsum dolor sit amet</Heading>
      <Heading size="3" as="h3">Lorem ipsum dolor sit amet</Heading>
      <Heading size="4" as="h4">Lorem ipsum dolor sit amet</Heading>
    </div>
  ),
};

export const Paragraphs: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <Paragraph size="lg" as="p">Lorem ipsum dolor sit amet</Paragraph>
      <Paragraph size="md" as="p">Lorem ipsum dolor sit amet</Paragraph>
    </div>
  ),
};

export const Labels: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      <Label size="xl" as="label">Lorem ipsum dolor sit amet</Label>
      <Label size="lg" as="label">Lorem ipsum dolor sit amet</Label>
      <Label size="md" as="label">Lorem ipsum dolor sit amet</Label>
      <Label size="sm" as="label">Lorem ipsum dolor sit amet</Label>
    </div>
  ),
};

export const Placeholders: Story = {
  render: () => (
    <div>
      <Placeholder as="span">Lorem ipsum dolor sit amet</Placeholder>
    </div>
  ),
};
