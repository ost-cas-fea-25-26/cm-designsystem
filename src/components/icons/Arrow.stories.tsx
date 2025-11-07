import { Arrow } from "./generated/Arrow";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Arrow> = {
  title: "Icons/Arrow",
  component: Arrow,
  args: { direction: "right" },
};
export default meta;

type Story = StoryObj<typeof Arrow>;

export const Right: Story = { args: { direction: "right" } };
export const Down: Story = { args: { direction: "down" } };
export const Left: Story = { args: { direction: "left" } };
export const Up: Story = { args: { direction: "up" } };

export const Preview: Story = {
  render: (args) => (
    <div
      style={{ padding: 32, display: "flex", gap: 24, alignItems: "center" }}
    >
      <Arrow {...args} aria-hidden />
      <code
        style={{ fontSize: 12 }}
      >{`<Arrow direction="${args.direction}" />`}</code>
    </div>
  ),
  args: { direction: "right" },
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["up", "right", "down", "left"],
    },
  },
};
