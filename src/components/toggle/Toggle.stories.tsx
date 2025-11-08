import { Toggle } from "./Toggle";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Toggle> = {
  title: "Components/ToggleButton",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => <Toggle aria-label="Like">Like</Toggle>,
};

// export const Active: Story = {
//   render: () => (
//     <Toggle pressed aria-label="Like active">
//       Like active
//     </Toggle>
//   ),
// };
