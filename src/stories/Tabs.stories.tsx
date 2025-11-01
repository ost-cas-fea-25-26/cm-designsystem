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
    children: undefined,
  },
  argTypes: {
    children: { control: false },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Tabs {...args} />,
  args: { textTabLeft: "Deine Mumbles", textTabRight: "Deine Links" },
  parameters: {
    docs: {
      description: {
        story:
          "The Tabs component currently renders two static labels: 'Deine Mumbles' and 'Deine Links'. This story will evolve once dynamic tab data & interaction props are added.",
      },
    },
  },
};
