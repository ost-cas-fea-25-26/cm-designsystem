import { fn } from "storybook/test";
import { ProfileBanner } from "./ProfileBanner";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Profile/ProfileBanner",
  component: ProfileBanner,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
      viewports: {
        smallMobile: {
          name: "Small mobile",
          styles: { width: "320px", height: "568px" },
        },
        largeMobile: {
          name: "Large mobile",
          styles: { width: "414px", height: "896px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "834px", height: "1112px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "800px" },
        },
      },
    },
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },

    options: {
      storyPadding: false,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const LoggedOut: Story = {
  render: (args) => (
    <Container>
      <ProfileBanner {...args} />
    </Container>
  ),
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi, euismod aliquam nisl nisi euismod.",
  },
};

export const LoggedIn: Story = {
  render: (args) => (
    <Container>
      <ProfileBanner {...args} />
    </Container>
  ),
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi consectetur nisi, euismod aliquam nisl nisi euismod.",
    onProfileImageChange: fn(),
    onAvatarImageChange: fn(),
  },
};
