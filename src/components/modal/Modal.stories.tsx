import { useState } from "react";
import { fn } from "storybook/test";
import { Button } from "../button/Button";
import { Cancel, Checkmark } from "../icons/generated";
import { Modal } from "./Modal";
import type { Meta, StoryObj } from "@storybook/react-vite";

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
    title: "Modal",
    open: false,
    children: [],
    onOpenChange: fn(),
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return (
      <div>
        <Button
          intent="primary"
          size="lg"
          label="Click Me!"
          onClick={() => setOpen(true)}
        />

        <Modal open={open} onOpenChange={setOpen} title={args.title}>
          <Modal.Body>Hello, this is a Modal!!!</Modal.Body>
          <Modal.Actions>
            <Button
              intent="primary"
              size="md"
              label="Cancel"
              onClick={() => setOpen(false)}
            >
              <Cancel />
            </Button>
            <Button
              intent="secondary"
              size="md"
              label="Save"
              onClick={() => setOpen(false)}
            >
              <Checkmark />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  },
};
