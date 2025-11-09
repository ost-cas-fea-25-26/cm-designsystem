import * as RadixForm from "@radix-ui/react-form";
import { expect, fn, waitFor } from "storybook/test";
import { Button } from "../button/Button";
import { Textarea } from "./Textarea";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      control: "text",
      description: "Label of input.",
    },
    name: {
      control: "text",
      description:
        "Name of input, which is used for accessibility and validation messages.",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text.",
    },
    isRequired: {
      control: "boolean",
      description:
        "Sets inputs as required and shows validation messages when required.",
    },
    onChange: {
      description: "Event hook for input changes.",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Label",
    name: "field",
    placeholder: "Placeholder",
    isRequired: true,
    onChange: fn(),
  },
  render: (args) => (
    <RadixForm.Root>
      <Textarea {...args} />
    </RadixForm.Root>
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
      await expect(args.onChange).toHaveBeenCalledWith("a");
    });
  },
};

export const RequiredValidation: Story = {
  args: {
    label: "Label",
    name: "field",
    placeholder: "Placeholder",
    isRequired: true,
    onChange: fn(),
  },
  render: (args) => (
    <RadixForm.Root>
      <Textarea {...args} />
      <RadixForm.Submit asChild>
        <Button
          intent="secondary"
          label="Test required"
          size="md"
          onClick={fn()}
        />
      </RadixForm.Submit>
    </RadixForm.Root>
  ),
  play: async ({ userEvent, canvas, step }) => {
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
      await expect(
        canvas.queryByText(/field is required/i)
      ).not.toBeInTheDocument();
      const button = canvas.getByRole("button");
      await waitFor(() => userEvent.click(button));
      await expect(
        canvas.queryByText(/field is required/i)
      ).toBeInTheDocument();
      const input = canvas.getByPlaceholderText(/placeholder/i);
      await waitFor(() => userEvent.type(input, "test[Tab]"));
      await waitFor(() => userEvent.click(button));
      await expect(
        canvas.queryByText(/field is required/i)
      ).not.toBeInTheDocument();
    });
  },
};
