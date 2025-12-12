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
  displayName: string;

  /** The username or handle associated with the Response. */
  userName: string;

  /** The date and time when the Response was created. */
  timestamp: Date;

  /** The main text content of the Response. */
  text: string;

  /** Avatar image URL */
  src: string;

  /** Triggered when the avatar is clicked. */
  onAvatarClick: () => void;

  /** Number of likes the post has received. */
  nbrOfLikes: number;

  /** Number of comments the post has received. */
  nbrOfComments: number;

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
}

/**
 * Detailed Response component displaying user info, text content,
 * optional image, and action buttons (comment, like, share).
 */
export const Response: React.FC<ResponseProps> = (props: ResponseProps) => {
  const { base, content, text, action } = ResponseStyles(props);

  return (
    <PostBase className={base()}>
      <div className={content()}>
        <UserInfo
          size="sm"
          src={props.src}
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
            ariaLabel="Comment"
            labelText={
              props.nbrOfComments === 0
                ? "Comment"
                : props.nbrOfComments === 1
                  ? "1 Comment"
                  : `${props.nbrOfComments} Comments`
            }
            pressed={props.nbrOfComments !== 0}
            onToggle={props.onCommentClick}
          />
          <LikeToggle
            likes={props.nbrOfLikes}
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
