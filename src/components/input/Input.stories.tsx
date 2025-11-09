import { fn } from "storybook/test";
import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mumble } from "../icons/generated";
import * as RadixForm from "@radix-ui/react-form";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Input",
  component: Input,
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
    },
    name: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    isRequired: {
      control: "boolean",
    },
    children: {
      control: "object",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Enter Email",
    name: "email",
    placeholder: "hans.muster@email.com",
    isRequired: true,
    onChange: fn(),
    children: <Mumble />,
  },
  render: (args) => (
    <RadixForm.Root>
      <Input {...args} />
    </RadixForm.Root>
  ),
  // play: async ({ args, userEvent, canvas, step }) => {
  //   await step("Check initial render", async () => {
  //     await waitFor(() => expect(canvas.getByRole("img")).toBeVisible());
  //     await expect(canvas.getByAltText("Lorem ipsum")).toBeVisible();
  //     await expect(canvas.queryByRole("button")).not.toBeInTheDocument();
  //   });

  //   await step("Check click event", async () => {
  //     await userEvent.click(canvas.getByRole("img"));
  //     await expect(args.onClick).toHaveBeenCalled();
  //   });
  // },
};
