import { expect, fn } from "storybook/test";
import { LogOut, Profile, Settings } from "../icons/generated";
import { NaviButton } from "./NaviButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Buttons/NaviButton",
  component: NaviButton,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NaviButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
  args: {
    intent: "secondary",
    onClick: fn(),
    icon: Profile,
    children: "Lorem",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Lorem");
      await expect(canvas.getByText("Profile")).toBeVisible();
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const SettingsButton: Story = {
  args: {
    intent: "secondary",
    onClick: fn(),
    className: "group",
    icon: Settings,
    iconClassName: "transition group-hover:rotate-90 duration-350",
    children: "Settings",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Settings");
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export const LogOutButton: Story = {
  args: {
    intent: "secondary",
    onClick: fn(),
    className: "group",
    icon: LogOut,
    iconClassName:
      "transition-transform group-hover:[&>g]:[&>path:first-child]:translate-x-0.5 duration-350",
    children: "Log out",
  },
  play: async ({ args, userEvent, canvas, step }) => {
    await step("Check initial render", async () => {
      await expect(canvas.getByRole("button")).toBeVisible();
      await expect(canvas.getByRole("button")).toHaveTextContent("Settings");
    });

    await step("Check click event", async () => {
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};
