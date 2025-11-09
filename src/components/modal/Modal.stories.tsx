import * as RadixForm from "@radix-ui/react-form";
import { expect, fn, waitFor } from "storybook/test";
import { Cancel, Mumble } from "../icons/generated";
import { Modal } from "./Modal";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import * as RadixDialog from "@radix-ui/react-dialog";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      control: "text",
      description: "Title of modal.",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: "Test",
    children: [
      // <Modal.Trigger>
      //   {/* <Button
      //     intent="primary"
      //     label="Open Modal"
      //     size="md"
      //     onClick={fn()}
      //   ></Button> */}
      //   <button>Edit Profile</button>
      // </Modal.Trigger>,
      // <Modal.Content>
      //   <span>Hellouuu</span>
      // </Modal.Content>,
    ],
  },
  render: (args) => (
    <div>
      <Modal title="Test"></Modal>
    </div>
  ),
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      const input = canvas.getByPlaceholderText(/placeholder/i);
      await expect(input).toBeVisible();
      await expect(input).toHaveAccessibleName(/label/i);

      const label = canvas.getByLabelText(/label/i);
      await expect(label).toBeVisible();

      const icon = canvas.getByText(/mumble/i);
      await expect(icon).toBeVisible();
    });

    await step("Check click event", async () => {
      const input = canvas.getByPlaceholderText(/placeholder/i);
      await waitFor(() => userEvent.type(input, "a"));
      input.blur();
      await expect(args.onChange).toHaveBeenCalledWith("a");
    });
  },
};
