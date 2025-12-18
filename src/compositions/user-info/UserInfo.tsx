"use client";

import { tv, type VariantProps } from "tailwind-variants";
import { Avatar } from "../../components/avatar/Avatar";
import { IconButton } from "../../components/icon-button/IconButton";
import { Profile, Time } from "../../components/icons/generated";
import { Label, type LabelSize } from "../../components/typography/Label";
import {
  DEFAULT_DISPLAYNAME,
  DEFAULT_USERNAME,
} from "../utils/defaults.constants";

const userInfoStyles = tv({
  slots: {
    base: ["flex", "gap-2", "items-center"],
    userInfo: ["flex", "flex-col", "gap-2", "justify-center", "items-start"],
    name: ["text-slate-900", "**:cursor-pointer"],
    detailInfo: ["flex", "flex", "gap-4"],
    timeInfo: ["text-slate-500"],
  },
});

type UserInfoVariants = VariantProps<typeof userInfoStyles>;
type UserInfoSize = "sm" | "md" | "lg";

interface UserInfoProps extends UserInfoVariants {
  /** Avatar image URL */
  src?: string | null;
  /** Size variant of the component */
  size: UserInfoSize;
  /** Display name of the user */
  displayName?: string | null;
  /** Username of the user */
  userName?: string | null;
  /** Timestamp for the user activity */
  timestamp?: Date | null;
  /** Click handler for the whole UserInfo component */
  onClick: () => void;
}

function timeSince(timestamp: Date | number): string {
  const now = new Date();
  const past = timestamp instanceof Date ? timestamp : new Date(timestamp);
  const diffMs = now.getTime() - past.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // approximate
  const years = Math.floor(days / 365); // approximate

  if (years > 0) return years === 1 ? "1 year ago" : `${years} years ago`;
  if (months > 0) return months === 1 ? "1 month ago" : `${months} months ago`;
  if (days > 0) return days === 1 ? "1 day ago" : `${days} days ago`;
  if (hours > 0) return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  if (minutes > 0)
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  return seconds <= 1 ? "just now" : `${seconds} seconds ago`;
}

function getLabelSize(size: UserInfoSize): LabelSize {
  switch (size) {
    case "sm":
      return "md";
    case "md":
      return "lg";
    case "lg":
      return "xl";
    default:
      return "md";
  }
}

/**
 * UserInfo Component
 *
 * Displays a user avatar, display name, username, and a timestamp indicating
 * when an activity occurred. The entire component acts as an interactive button
 * and includes keyboard accessibility using `Enter` and `Space`.
 */
export const UserInfo: React.FC<UserInfoProps> = ({
  displayName = DEFAULT_DISPLAYNAME,
  userName = DEFAULT_USERNAME,
  timestamp = new Date(),
  ...props
}: UserInfoProps) => {
  const { base, userInfo, name, detailInfo, timeInfo } = userInfoStyles(props);

  return (
    <div className={base()}>
      {props.src && (
        <Avatar
          alt="Profile"
          size="sm"
          src={props.src}
          onAvatarClick={props.onClick}
        />
      )}
      <div className={userInfo()}>
        <button onClick={props.onClick} className={name()}>
          <Label size={getLabelSize(props.size)}>{displayName}</Label>
        </button>
        <div className={detailInfo()}>
          <IconButton intent="secondary" icon={Profile} onClick={props.onClick}>
            {userName ?? DEFAULT_USERNAME}
          </IconButton>

          <IconButton
            intent="primary"
            icon={Time}
            className={timeInfo()}
            onClick={props.onClick}
          >
            {timeSince(timestamp!)}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
