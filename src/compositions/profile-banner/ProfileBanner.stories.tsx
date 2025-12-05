import { fn } from "storybook/test";
import { ProfileBanner } from "./ProfileBanner";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Profile/ProfileBanner",
  component: ProfileBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    isCurrentUser: false,
    avatarSrc: "example",
    avatarAlt: "Avatar image",
    imageSrc:
      "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    imageAlt: "Profile banner image",
    displayName: "Display Name",
    userName: "Username",
    location: "Location",
    joinedTimestamp: new Date(),
    description:
      "Ostschweizer mit Leidenschaft für Fussball, designaffin, nie ohne Bart, Weinliebhaber, leichte Tendenz zu Football Manager-Sucht, kocht gerne indisch, baut seit neustem Duplotürme und Brio-Bahnanlagen.",
    onClick: fn(),
  },
};

export const LoggedIn: Story = {
  args: {
    isCurrentUser: true,
    avatarSrc: "example",
    avatarAlt: "Avatar image",
    imageSrc:
      "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    imageAlt: "Profile banner image",
    displayName: "Display Name",
    userName: "Username",
    location: "Location",
    joinedTimestamp: new Date(),
    description:
      "Ostschweizer mit Leidenschaft für Fussball, designaffin, nie ohne Bart, Weinliebhaber, leichte Tendenz zu Football Manager-Sucht, kocht gerne indisch, baut seit neustem Duplotürme und Brio-Bahnanlagen.",
    onClick: fn(),
  },
};
