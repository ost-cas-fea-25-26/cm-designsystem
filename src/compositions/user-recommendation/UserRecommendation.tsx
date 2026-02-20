"use client";

import { tv, type VariantProps } from "tailwind-variants";
import { Avatar } from "../../components/avatar/Avatar";
import { Button } from "../../components/button/Button";
import { IconButton } from "../../components/icon-button/IconButton";
import { Mumble, Profile } from "../../components/icons/generated";
import { Label } from "../../components/typography/Label";

const userRecommendationStyles = tv({
  slots: {
    base: [
      "flex",
      "flex-col",
      "gap-4",
      "items-center",
      "p-4",
      "bg-white",
      "rounded-2xl",
    ],
    userInfo: ["flex", "flex-col", "gap-2", "items-center"],
    displayName: ["text-slate-900", "**:cursor-pointer"],
  },
});

type UserRecommendationVariants = VariantProps<typeof userRecommendationStyles>;

interface UserRecommendationProps extends UserRecommendationVariants {
  /** URL of the user's avatar image. */
  src: string;
  /** Display name of the user (e.g., "Jane Doe"). */
  displayName: string;
  /** Username/handle of the user (e.g., "@jane"). */
  userName: string;
  /** Label shown on the follow button (e.g., "Follow"). */
  label: string;
  /** Handler invoked when the "Follow" button is clicked. */
  onFollowClick: () => void;
  /** Handler invoked when user profile elements (avatar or username) are clicked. */
  onProfileClick: () => void;
}

/**
 * UserRecommendation Component
 *
 * Displays a recommended user with:
 * - A clickable avatar
 * - Display name and username
 * - A follow button
 */
export const UserRecommendation: React.FC<UserRecommendationProps> = (
  props: UserRecommendationProps
) => {
  const { base, userInfo, displayName } = userRecommendationStyles(props);

  return (
    <div className={base()}>
      <Avatar
        alt="Profile"
        size="lg"
        src={props.src}
        onAvatarClick={props.onProfileClick}
      />
      <div className={userInfo()}>
        <button onClick={props.onProfileClick} className={displayName()}>
          <Label size="lg">{props.displayName}</Label>
        </button>
        <IconButton
          icon={Profile}
          intent="secondary"
          onClick={props.onProfileClick}
        >
          {props.userName}
        </IconButton>
      </div>
      <Button
        icon={Mumble}
        intent="secondary"
        onClick={props.onFollowClick}
        size="md"
      >
        {props.label}
      </Button>
    </div>
  );
};
