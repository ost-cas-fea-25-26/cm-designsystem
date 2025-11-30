import { expect } from "storybook/test";
import { TabItem } from "./TabItem";
import { Tabs } from "./Tabs";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: "text",
      description: "Currently selected tab value.",
    },
    onChange: {
      description: "Callback function when tab selection changes.",
    },
    children: {
      control: "object",
      description: "Array of TabItem components.",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    value: "1",
    children: [
      <TabItem key="1" value="1" label="Lorem ipsum 1">
        <div style={{ padding: "1rem", maxWidth: "400px" }}>Lorem ipsum 1</div>
      </TabItem>,
      <TabItem key="2" value="2" label="Lorem ipsum 2">
        <div style={{ padding: "1rem", maxWidth: "400px" }}>Lorem ipsum 2</div>
      </TabItem>,
      <TabItem key="3" value="3" label="Lorem ipsum 3">
        <div style={{ padding: "1rem", maxWidth: "400px" }}>Lorem ipsum 3</div>
      </TabItem>,
    ],
  },
  play: async ({ canvas, userEvent, step }) => {
    await step("Check initial render", async () => {
      await expect(
        canvas.getByRole("tab", { name: /Lorem ipsum 1/i })
      ).toBeVisible();
      await expect(
        canvas.getByRole("tab", { name: /Lorem ipsum 2/i })
      ).toBeVisible();
      await expect(
        canvas.getByRole("tab", { name: /Lorem ipsum 3/i })
      ).toBeVisible();
      await expect(
        canvas.getByRole("tabpanel", {
          name: /Lorem ipsum 1/i,
        })
      ).toBeVisible();
    });

    await step("Click second Tab", async () => {
      await userEvent.click(
        canvas.getByRole("tab", { name: /Lorem ipsum 2/i })
      );
      await expect(
        canvas.getByRole("tabpanel", {
          name: /Lorem ipsum 2/i,
        })
      ).toBeVisible();
    });
  },
};

export const Binary: Story = {
  args: {
    value: "1",
    children: [
      <TabItem key="1" value="1" label="Lorem ipsum 1">
        <div style={{ padding: "1rem", maxWidth: "400px" }}>Lorem ipsum 1</div>
      </TabItem>,
      <TabItem key="2" value="2" label="Lorem ipsum 2">
        <div style={{ padding: "1rem", maxWidth: "400px" }}>Lorem ipsum 2</div>
      </TabItem>,
    ],
  },
  play: async ({ canvas, userEvent, step }) => {
    await step("Check initial render", async () => {
      await expect(
        canvas.getByRole("tab", { name: /Lorem ipsum 1/i })
      ).toBeVisible();
      await expect(
        canvas.getByRole("tab", { name: /Lorem ipsum 2/i })
      ).toBeVisible();
      await expect(
        canvas.getByRole("tabpanel", {
          name: /Lorem ipsum 1/i,
        })
      ).toBeVisible();
    });

    await step("Click second Tab", async () => {
      await userEvent.click(
        canvas.getByRole("tab", { name: /Lorem ipsum 2/i })
      );
      await expect(
        canvas.getByRole("tabpanel", {
          name: /Lorem ipsum 2/i,
        })
      ).toBeVisible();
    });
  },
};
