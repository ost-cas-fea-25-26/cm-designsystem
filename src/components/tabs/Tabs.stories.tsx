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
      <TabItem key="1" value="1" label="Overview">
        <div style={{ padding: "1rem" }}>
          <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
            Overview
          </h3>
          <p>
            This is the overview tab content. Here you can see general
            information and a summary of the most important details.
          </p>
        </div>
      </TabItem>,
      <TabItem key="2" value="2" label="Details">
        <div style={{ padding: "1rem" }}>
          <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>Details</h3>
          <p>
            This tab contains detailed information. You can add more specific
            content, data, or components here.
          </p>
        </div>
      </TabItem>,
      <TabItem key="3" value="3" label="Settings">
        <div style={{ padding: "1rem" }}>
          <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>
            Settings
          </h3>
          <p>
            Configure your preferences and options in this settings panel.
            Customize the experience to your needs.
          </p>
        </div>
      </TabItem>,
    ],
  },
  play: async ({ canvas, userEvent, step }) => {
    await step("Check initial render", async () => {
      await expect(
        canvas.getByRole("tab", { name: /Overview/i })
      ).toBeVisible();
      await expect(canvas.getByRole("tab", { name: /Details/i })).toBeVisible();
      await expect(
        canvas.getByRole("tab", { name: /Settings/i })
      ).toBeVisible();
      await expect(
        canvas.getByRole("tabpanel", {
          name: /Overview/i,
        })
      ).toBeVisible();
    });

    await step("Click second Tab", async () => {
      await userEvent.click(canvas.getByRole("tab", { name: /Details/i }));
      await expect(
        canvas.getByRole("tabpanel", {
          name: /Details/i,
        })
      ).toBeVisible();
    });
  },
};

export const Binary: Story = {
  args: {
    value: "1",
    children: [
      <TabItem key="1" value="1" label="Profile">
        <div style={{ padding: "1rem" }}>
          <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>Profile</h3>
          <p>
            View and edit your profile information, including your name, email,
            and other personal details.
          </p>
        </div>
      </TabItem>,
      <TabItem key="2" value="2" label="Account">
        <div style={{ padding: "1rem" }}>
          <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>Account</h3>
          <p>
            Manage your account settings, security preferences, and notification
            options.
          </p>
        </div>
      </TabItem>,
    ],
  },
  play: async ({ canvas, userEvent, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("tab", { name: /Profile/i })).toBeVisible();
      await expect(canvas.getByRole("tab", { name: /Account/i })).toBeVisible();
      await expect(
        canvas.getByRole("tabpanel", {
          name: /Profile/i,
        })
      ).toBeVisible();
    });

    await step("Click second Tab", async () => {
      await userEvent.click(canvas.getByRole("tab", { name: /Account/i }));
      await expect(
        canvas.getByRole("tabpanel", {
          name: /Account/i,
        })
      ).toBeVisible();
    });
  },
};
