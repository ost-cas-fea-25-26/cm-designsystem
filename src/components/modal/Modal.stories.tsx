import { useState } from "react";
import { fn } from "storybook/test";
import { Button } from "../button/Button";
import { Form } from "../form/Form";
import { Cancel, Checkmark, Mumble } from "../icons/generated";
import { Input } from "../input/Input";
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
    open: {
      control: "boolean",
      description: "Controls whether the modal is open or closed.",
    },
    onOpenChange: {
      description: "Callback function when modal open state changes.",
    },
    children: {
      control: "object",
      description:
        "Modal content including Modal.Body and Modal.Actions components.",
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
        <Button intent="primary" size="lg" onClick={() => setOpen(true)}>
          Click Me!
        </Button>

        <Modal open={open} onOpenChange={setOpen} title={args.title}>
          <Modal.Body>Hello, this is a Modal!!!</Modal.Body>
          <Modal.Actions>
            <Button
              intent="primary"
              size="md"
              icon={Cancel}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              intent="secondary"
              size="md"
              icon={Checkmark}
              onClick={() => setOpen(false)}
            >
              Save
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  },
};

export const WithForm: Story = {
  args: {
    title: "Edit Profile",
    open: false,
    children: [],
    onOpenChange: fn(),
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return (
      <div>
        <Button intent="primary" size="lg" onClick={() => setOpen(true)}>
          Open Form Modal
        </Button>

        <Modal open={open} onOpenChange={setOpen} title={args.title}>
          <Modal.Body>
            <Form
              fields={
                <>
                  <Input
                    name="username"
                    label="Username"
                    placeholder="Enter username"
                    onChange={fn()}
                    children={<Mumble />}
                  />
                  <Input
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter email"
                    onChange={fn()}
                  />
                  <Input
                    name="bio"
                    label="Bio"
                    placeholder="Tell us about yourself"
                    onChange={fn()}
                  />
                </>
              }
              action={
                <Button
                  intent="secondary"
                  size="md"
                  icon={Checkmark}
                  onClick={() => setOpen(false)}
                >
                  Save Changes
                </Button>
              }
            />
          </Modal.Body>
          <Modal.Actions>
            <Button
              intent="primary"
              size="md"
              icon={Cancel}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  },
};
