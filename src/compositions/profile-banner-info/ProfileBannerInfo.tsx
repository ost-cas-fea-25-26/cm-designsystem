import { tv, type VariantProps } from "tailwind-variants";
import { IconButton } from "../../components/icon-button/IconButton";
import { Profile, Location, Calendar } from "../../components/icons/generated";
import { Label } from "../../components/typography/Label";

const profileBannerInfoStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-2", "items-start"],
    displayName: ["text-slate-900", "**:cursor-pointer"],
    detailInfo: ["flex", "gap-4"],
    secondaryInfo: ["text-slate-500"],
  },
});

type ProfileBannerInfoVariants = VariantProps<typeof profileBannerInfoStyles>;

interface ProfileBannerInfoProps extends ProfileBannerInfoVariants {
  /**
   * The user's full display name (e.g., "John Doe").
   */
  displayName: string;

  /**
   * The user's username or handle (e.g., "@john").
   */
  userName: string;

  /**
   * The user's location as a readable text label.
   */
  location: string;

  /**
   * A timestamp representing when the user joined.
   * Used to generate the "Member since" relative date.
   */
  joinedTimestamp: Date;

  /**
   * Callback fired whenever any profile-related element is clicked.
   * Typically used to open the profile or navigate to a user page.
   */
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
export const ProfileBannerInfo: React.FC<ProfileBannerInfoProps> = (
  props: ProfileBannerInfoProps
) => {
  const { base, displayName, detailInfo, secondaryInfo } =
    profileBannerInfoStyles(props);

  return (
    <div className={base()}>
      <button onClick={props.onClick} className={displayName()}>
        <Label size="xl">{props.displayName}</Label>
      </button>
      <div className={detailInfo()}>
        <IconButton intent="secondary" icon={Profile} onClick={props.onClick}>
          {props.userName}
        </IconButton>

        <IconButton
          intent="primary"
          icon={Location}
          onClick={props.onClick}
          className={secondaryInfo()}
        >
          {props.location}
        </IconButton>

        <IconButton
          intent="primary"
          icon={Calendar}
          onClick={props.onClick}
          className={secondaryInfo()}
        >
          {memberSincePrefix + timeSince(props.joinedTimestamp)}
        </IconButton>
      </div>
    </div>
  );
};
