"use client";

import { tv, type VariantProps } from "tailwind-variants";
import { LikeToggle, Paragraph, TimedButton, Toggle } from "../../components";
import { Share } from "../../components/icons/generated";
import { ImageBanner } from "../image-banner/ImageBanner";
import { PostBase } from "../post-base/PostBase";
import { UserInfo } from "../user-info/UserInfo";
import { renderWithHashtags } from "../utils/keyword.utils";

const ResponseStyles = tv({
  slots: {
    base: [],
    content: ["flex", "flex-col", "gap-4"],
    text: [
      "text-slate-900",
      "text-wrap",
      "wrap-anywhere",
      "whitespace-pre-wrap",
    ],
    action: ["flex", "gap-10", "justify-start", "-ml-3"],
  },
});

type ResponseVariants = VariantProps<typeof ResponseStyles>;

interface ResponseProps extends ResponseVariants {
  /** The display name of the user who created the Response. */
  displayName?: string | null;

  /** The username or handle associated with the Response. */
  userName?: string | null;

  /** The date and time when the Response was created. */
  timestamp?: Date | null;

  /** The main text content of the Response. */
  text?: string | null;

  /** Avatar image URL */
  avatarSrc?: string | null;

  /** Triggered when the avatar is clicked. */
  onAvatarClick: () => void;

  /** Number of likes the post has received. */
  nbrOfLikes?: number | null;

  /** Is post liked by self */
  likedBySelf?: boolean | null;

  /** Number of comments the post has received. */
  nbrOfComments?: number | null;

  /** Optional image source URL displayed within the Response. */
  imageSrc?: string;

  /** Optional alt text for the Response image, used for accessibility. */
  imageAlt?: string;

  /** Callback fired when the comment button is clicked. */
  onCommentClick: () => void;

  /** Callback fired when the like button is clicked. */
  onLikeClick: () => void;

  /** Callback fired when the share button is clicked. */
  onShareClick: () => void;

  /** Whether the comment button is disabled. */
  commentsDisabled?: boolean;
}

/**
 * Detailed Response component displaying user info, text content,
 * optional image, and action buttons (comment, like, share).
 */
export const Response: React.FC<ResponseProps> = ({
  nbrOfLikes = 0,
  nbrOfComments = 0,
  commentsDisabled = false,
  ...props
}: ResponseProps) => {
  const { base, content, text, action } = ResponseStyles(props);

  return (
    <PostBase className={base()}>
      <div className={content()}>
        <UserInfo
          size="sm"
          src={props.avatarSrc}
          displayName={props.displayName}
          userName={props.userName}
          timestamp={props.timestamp}
          onClick={props.onAvatarClick}
        />
        <Paragraph size="md" className={text()}>
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
            disabled={commentsDisabled}
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
