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
    avatarSrc: "",
    userName: "UserName",
    displayName: "Display Name",
    timestamp: new Date(),
    text: `Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.

#casfee #goOST #smartive #teamCM`,
    nbrOfComments: 0,
    nbrOfLikes: 0,
    onAvatarClick: fn(),
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    avatarSrc: "",
    userName: "UserName",
    displayName: "Display Name",
    timestamp: new Date(),
    text: "Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.",
    nbrOfComments: 0,
    nbrOfLikes: 0,
    onAvatarClick: fn(),
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
  },
};

export const PostWithImage: Story = {
  args: {
    size: "lg",
    avatarSrc: "",
    userName: "UserName",
    displayName: "Display Name",
    timestamp: new Date(),
    text: "Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.",
    imageSrc:
      "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    imageAlt: "Profile banner image",
    nbrOfComments: 0,
    nbrOfLikes: 0,
    onAvatarClick: fn(),
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
  },
};

export const LikesAndComments: Story = {
  args: {
    size: "md",
    avatarSrc: "",
    userName: "UserName",
    displayName: "Display Name",
    timestamp: new Date(),
    text: "Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.",
    nbrOfComments: 10,
    nbrOfLikes: 100,
    onAvatarClick: fn(),
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
  },
};

export const PostWithDetailLink: Story = {
  name: "Post with Link to Detail Page",
  args: {
    size: "md",
    displayName: "Jane Doe",
    userName: "janedoe",
    timestamp: new Date(),
    text: "This is a post with a detail link. #example #storybook",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    onAvatarClick: fn(),
    nbrOfLikes: 5,
    nbrOfComments: 2,
    // imageSrc:
    //   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    // imageAlt: "Example banner",
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
    detailLink: "https://example.com/detail/123",
  },
};
