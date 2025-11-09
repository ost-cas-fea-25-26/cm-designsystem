import { fn } from "storybook/test";
import avatarImage from "../../assets/avatar.svg";
import { Form, Input } from "./Input";
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
    size: {
      control: "select",
    },
    label: {
      control: "text",
    },
    children: {
      control: "object",
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // size: "sm",
    // label: "Lorem ipsum",
    // src: avatarImage,
    // children: "PA",
    // onClick: fn(),
  },
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
