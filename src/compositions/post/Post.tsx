"use client";

import { tv, type VariantProps } from "tailwind-variants";
import {
  Avatar,
  LikeToggle,
  Paragraph,
  TimedButton,
  Toggle,
} from "../../components";
import { Share } from "../../components/icons/generated";
import { ImageBanner } from "../image-banner/ImageBanner";
import { PostBase } from "../post-base/PostBase";
import { UserInfo } from "../user-info/UserInfo";
import { renderWithHashtags } from "../utils/keyword.utils";

const PostStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-4", "md:gap-6", "md:relative"],
    header: ["flex", "gap-3", "items-start", "md:gap-0"],
    avatar: ["shrink-0", "md:absolute", "md:-left-8", "md:top-6"],
    userInfoWrapper: ["flex-1", "min-w-0"],
    content: ["flex", "flex-col", "gap-4", "md:gap-6"],
    text: [
      "text-slate-900",
      "text-wrap",
      "wrap-anywhere",
      "whitespace-pre-wrap",
    ],
    action: [
      "flex",
      "flex-row",
      "gap-4",
      "md:gap-10",
      "justify-start",
      "items-start",
    ],
  },
  variants: {
    size: {
      lg: {},
      md: {},
    },
  },
});

type PostVariants = VariantProps<typeof PostStyles>;
type PostSize = "md" | "lg";

interface PostProps extends PostVariants {
  /** Size of the post, affecting layout and styling. */
  size: PostSize;

  /** The display name of the user who created the post. */
  displayName?: string | null;

  /** The username or handle associated with the post. */
  userName?: string | null;

  /** The date and time when the post was created. */
  timestamp?: Date | null;

  /** The main text content of the post. */
  text?: string | null;

  /** Avatar image URL */
  avatarSrc?: string | null;

  /** Number of likes the post has received. */
  nbrOfLikes?: number | null;

  /** Is post liked by self */
  likedBySelf?: boolean | null;

  /** Number of comments the post has received. */
  nbrOfComments?: number | null;

  /** Optional image source URL displayed within the post. */
  imageSrc?: string | null;

  /** Optional alt text for the post image, used for accessibility. */
  imageAlt?: string | null;

  /** Triggered when the avatar is clicked. */
  onAvatarClick: (e: React.MouseEvent) => void;

  /** Callback fired when the comment button is clicked. */
  onCommentClick: () => void;

  /** Callback fired when the like button is clicked. */
  onLikeClick: () => void;

  /** Callback fired when the share button is clicked. */
  onShareClick: () => void;

  /** Callback fired when the post itself is clicked. */
  onPostClick: () => void;
}

/**
 * Detailed post component displaying user info, text content,
 * optional image, and action buttons (comment, like, share).
 */
export const Post: React.FC<PostProps> = ({
  nbrOfLikes = 0,
  nbrOfComments = 0,
  ...props
}: PostProps) => {
  const { base, header, avatar, userInfoWrapper, content, text, action } =
    PostStyles(props);

  return (
    <PostBase className={base()} onClick={props.onPostClick}>
      <div className={header()}>
        <div className={avatar()}>
          <Avatar
            alt="Profile"
            size="md"
            src={props.avatarSrc}
            onAvatarClick={props.onAvatarClick}
          />
        </div>
        <div className={userInfoWrapper()}>
          <UserInfo
            size={props.size}
            displayName={props.displayName}
            userName={props.userName}
            timestamp={props.timestamp}
            onClick={props.onAvatarClick}
            src={null}
          />
        </div>
      </div>

      <div className={content()}>
        <Paragraph size={props.size} className={text()}>
          {renderWithHashtags(props.text)}
        </Paragraph>
        {props.imageSrc && (
          <ImageBanner
            src={props.imageSrc}
            alt={props.imageAlt ?? ""}
            onClick={() => {}}
          />
        )}
        <div className={action()}>
          <Toggle
            ariaLabel="Comment"
            labelText={
              nbrOfComments === 0
                ? "Comment"
                : nbrOfComments === 1
                  ? "1 Comment"
                  : `${nbrOfComments} Comments`
            }
            pressed={nbrOfComments !== 0}
            onToggle={props.onCommentClick}
          />

          <LikeToggle
            pressed={props.likedBySelf ?? false}
            likes={nbrOfLikes}
            onLikeChange={props.onLikeClick}
          />

          <TimedButton
            icon={Share}
            label="Copy Link"
            labelActive="Link copied"
            onClick={props.onShareClick}
          />
        </div>
      </div>
    </PostBase>
  );
};
