import { fn } from "storybook/test";
import { Post } from "./Post";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Posts/Post",
  component: Post,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "lg",
    src: "",
    userName: "UserName",
    displayName: "Display Name",
    timestamp: new Date(),
    text: `Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.
    
#casfee #goOST #smartive #teamCM`,
    onAvatarClick: fn(),
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    src: "",
    userName: "UserName",
    displayName: "Display Name",
    timestamp: new Date(),
    text: "Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.",
    onAvatarClick: fn(),
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
  },
};

export const PostWithImage: Story = {
  args: {
    size: "lg",
    src: "",
    userName: "UserName",
    displayName: "Display Name",
    timestamp: new Date(),
    text: "Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.",
    imageSrc:
      "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    imageAlt: "Profile banner image",
    onAvatarClick: fn(),
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
  },
};
