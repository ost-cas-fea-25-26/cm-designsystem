import { fn } from "storybook/test";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Form } from "./Form";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Form",
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    fields: {
      description: "Form fields content.",
    },
    action: {
      description: "Submit button element.",
    },
    onSubmit: {
      description: "Submit handler function.",
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const inputFields = (
  <>
    <Input
      name="input1"
      placeholder="Placeholder"
      onChange={fn()}
      label="Input 1"
    />
    <Input
      name="input2"
      placeholder="Placeholder"
      onChange={fn()}
      label="Input 2"
    />
    <Input
      name="input3"
      placeholder="Placeholder"
      onChange={fn()}
      label="Input 3"
    />
  </>
);

const submitButton = (
  <Button type="submit" intent="primary" size="md">
    Submit
  </Button>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    fields: inputFields,
    action: submitButton,
    onSubmit: (e) => {
      e.preventDefault();
      fn()(e);
    },
  },
};
