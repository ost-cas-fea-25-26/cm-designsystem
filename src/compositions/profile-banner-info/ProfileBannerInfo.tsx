"use client";

import { tv, type VariantProps } from "tailwind-variants";
import { IconButton } from "../../components/icon-button/IconButton";
import {
  Profile,
  Location,
  Calendar,
  Settings,
} from "../../components/icons/generated";
import { Label } from "../../components/typography/Label";

const profileBannerInfoStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-2", "items-start"],
    title: ["flex", "gap-1", "items-center", "**:cursor-pointer"],
    icon: ["text-violet-600", "-mt-0.5"],
    name: ["text-slate-900"],
    detailInfo: ["flex", "gap-4"],
    secondaryInfo: ["text-slate-500"],
  },
});

type ProfileBannerInfoVariants = VariantProps<typeof profileBannerInfoStyles>;

interface ProfileBannerInfoProps extends ProfileBannerInfoVariants {
  /** Whether the profile being viewed belongs to the logged-in user. */
  isCurrentUser: boolean;

  /**
   * The user's full display name (e.g., "John Doe").
   */
  displayName?: string | null;

  /**
   * The user's username or handle (e.g., "@john").
   */
  userName?: string | null;

  /**
   * The user's location as a readable text label.
   */
  location?: string | null;

  /**
   * A timestamp representing when the user joined.
   * Used to generate the "Member since" relative date.
   */
  joinedTimestamp?: Date | null;

  /**
   * Callback fired whenever any profile-related element is clicked.
   * Typically used to open the profile or navigate to a user page.
   */
  onProfileClick?: () => void;

  /** A function called when the settings button is clicked. */
  onSettingsClick?: () => void;
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

  if (years > 0) return years === 1 ? "1 year" : `${years} years`;
  if (months > 0) return months === 1 ? "1 month" : `${months} months`;
  if (days > 0) return days === 1 ? "1 day" : `${days} days`;
  if (hours > 0) return hours === 1 ? "1 hour" : `${hours} hours`;
  if (minutes > 0) return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  return seconds <= 1 ? "just now" : `${seconds} seconds`;
}

const memberSincePrefix: string = "Member since ";

/**
 * ProfileBannerInfo Component
 *
 * Renders profile information used in a user profile banner
 */
export const ProfileBannerInfo: React.FC<ProfileBannerInfoProps> = ({
  displayName = "New User",
  userName = "newuser",
  location = "Location",
  joinedTimestamp = new Date(),
  ...props
}: ProfileBannerInfoProps) => {
  const { base, title, icon, name, detailInfo, secondaryInfo } =
    profileBannerInfoStyles(props);

  return (
    <div className={base()}>
      <div className={title()}>
        <button onClick={props.onProfileClick} className={name()}>
          <Label size="xl">{displayName}</Label>
        </button>

        {props.isCurrentUser && (
          <button onClick={props.onSettingsClick}>
            <Settings className={icon()} />
          </button>
        )}
      </div>
      <div className={detailInfo()}>
        <IconButton
          intent="secondary"
          icon={Profile}
          onClick={props.onProfileClick}
        >
          {userName!}
        </IconButton>

        <IconButton
          intent="primary"
          icon={Location}
          onClick={props.onProfileClick}
          className={secondaryInfo()}
        >
          {location!}
        </IconButton>

        <IconButton
          intent="primary"
          icon={Calendar}
          onClick={props.onProfileClick}
          className={secondaryInfo()}
        >
          {memberSincePrefix + timeSince(joinedTimestamp!)}
        </IconButton>
      </div>
    </div>
  );
};
