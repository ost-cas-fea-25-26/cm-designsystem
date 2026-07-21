import { fn } from "storybook/test";
import { ProfileBannerInfo } from "./ProfileBannerInfo";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Profile/ProfileBannerInfo",
  component: ProfileBannerInfo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileBannerInfo>;

const Container = (props: { children: React.ReactNode }) => (
  <div
    style={{
      maxWidth: 900,
      margin: "0 auto",
      width: "100%",
      paddingBlock: "20px",
    }}
  >
    {props.children}
  </div>
);

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  render: (args) => (
    <Container>
      <ProfileBannerInfo {...args} />
    </Container>
  ),
  args: {
    isCurrentUser: false,
    displayName: "Display Name",
    userName: "Username",
    location: "Location",
    joinedTimestamp: new Date(new Date().getTime() - 5 * 60 * 1000),
    onProfileClick: fn(),
  },
};

export const LoggedIn: Story = {
  render: (args) => (
    <Container>
      <ProfileBannerInfo {...args} />
    </Container>
  ),
  args: {
    isCurrentUser: true,
    displayName: "Display Name",
    userName: "Username",
    location: "Location",
    joinedTimestamp: new Date(new Date().getTime() - 5 * 60 * 1000),
    onProfileClick: fn(),
    onSettingsClick: fn(),
  },
};
