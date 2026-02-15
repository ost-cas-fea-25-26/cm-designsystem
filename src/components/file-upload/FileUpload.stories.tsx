import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import { FileUpload } from "./FileUpload";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/FileUpload",
  component: FileUpload,
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
      description: "Title of dropzone.",
    },
    subtitle: {
      control: "text",
      description: "Subtitle of dropzone",
    },
    actionLabel: {
      control: "text",
      description: "Label of upload button.",
    },
    onFileSelect: {
      description: "Method gets called when file selected.",
    },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    onFileSelect: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find the file input
    const input = await canvas.findByLabelText(/Drag & Drop your File/i);

    // Create a fake file
    const file = new File(["hello"], "test-image.png", { type: "image/png" });

    // Upload the file
    await userEvent.upload(input, file);

    // Wait for the upload to trigger
    await waitFor(() => {
      expect(args.onFileSelect).toHaveBeenCalledWith(file);
    });

    // Verify UI feedback
    await waitFor(() => {
      expect(canvas.getByText(/test-image.png/i)).toBeVisible();
    });
  },
};
