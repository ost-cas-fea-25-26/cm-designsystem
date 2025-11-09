import { fn } from "storybook/test";
import { Form } from "./Form";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../input/Input";
import { Button } from "../button/Button";

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
    children: {
      description: "Fields and Action Button.",
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Label",
  },
  render: (args) => (
    <Form label={args.label}>
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
        <Button
          intent="primary"
          size="md"
          label="Submit"
          onClick={fn()}
        ></Button>
      </Form.Action>
    </Form>
  ),
  // play: async ({ args, userEvent, canvas, step }) => {
  //   await step("Check initial render", async () => {
  //     const input = canvas.getByPlaceholderText(/placeholder/i);
  //     await expect(input).toBeVisible();
  //     await expect(input).toHaveAccessibleName(/label/i);

  //     const label = canvas.getByLabelText(/label/i);
  //     await expect(label).toBeVisible();

  //     const icon = canvas.getByText(/mumble/i);
  //     await expect(icon).toBeVisible();
  //   });

  //   await step("Check click event", async () => {
  //     const input = canvas.getByPlaceholderText(/placeholder/i);
  //     await waitFor(() => userEvent.type(input, "a"));
  //     input.blur();
  //     await expect(args.onChange).toHaveBeenCalledWith("a");
  //   });
  // },
};
