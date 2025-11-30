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
    a11y: {
      test: "error",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      description: "Fields and Action Button.",
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  render: () => (
    <Form>
      <Form.Fields>
        <Input
          name="Test"
          placeholder="Placeholder"
          onChange={fn()}
          label="Input"
        />
        <Input
          name="Test"
          placeholder="Placeholder"
          onChange={fn()}
          label="Input"
        />
        <Input
          name="Test"
          placeholder="Placeholder"
          onChange={fn()}
          label="Input"
        />
      </Form.Fields>
      <Form.Action>
        <Button type="submit" intent="primary" size="md" onClick={fn()}>
          Submit
        </Button>
      </Form.Action>
    </Form>
  ),
};
