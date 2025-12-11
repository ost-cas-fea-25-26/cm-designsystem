import { fn } from "storybook/test";
import { Response } from "./Response";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Compositions/Posts/Response",
  component: Response,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Response>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "example",
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

export const ResponseWithImage: Story = {
  args: {
    src: "example",
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
    src: "example",
    userName: "UserName",
    displayName: "Display Name",
    timestamp: new Date(),
    text: "Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.",
    imageSrc: "",
    imageAlt: "Profile banner image",
    nbrOfComments: 10,
    nbrOfLikes: 100,
    onAvatarClick: fn(),
    onCommentClick: fn(),
    onLikeClick: fn(),
    onShareClick: fn(),
  },
};
