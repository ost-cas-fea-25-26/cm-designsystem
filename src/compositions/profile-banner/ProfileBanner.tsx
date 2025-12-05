import { tv, type VariantProps } from "tailwind-variants";
import { Avatar, Paragraph } from "../../components";
import { ProfileBannerImage } from "../profile-banner-image/ProfileBannerImage";
import { ProfileBannerInfo } from "../profile-banner-info/ProfileBannerInfo";

const ProfileBannerStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-6", "w-170", "h-80", "relative"],
    avatar: ["absolute", "-bottom-20", "right-6"],
    info: ["flex", "flex-col", "gap-3"],
    description: ["text-slate-500"],
  },
});

type ProfileBannerVariants = VariantProps<typeof ProfileBannerStyles>;

interface ProfileBannerProps extends ProfileBannerVariants {
  /** URL of the user's avatar image. */
  avatarSrc: string;

  /** Alt text for the avatar image. */
  avatarAlt: string;

  /** URL of the profile banner or main image. */
  imageSrc: string;

  /** Alt text for the main image. */
  imageAlt: string;

  /** The user's display name. */
  displayName: string;

  /** The user’s username/handle. */
  userName: string;

  /** The user’s location string. */
  location: string;

  /** Date when the user joined. */
  joinedTimestamp: Date;

  /** Bio or profile description text. */
  description: string;

  /** Whether the profile being viewed belongs to the logged-in user. */
  isCurrentUser: boolean;
}

/**
 * Profile banner component for displaying user profile info.
 */
export const ProfileBanner: React.FC<ProfileBannerProps> = (
  props: ProfileBannerProps
) => {
  const { base, avatar, info, description } = ProfileBannerStyles(props);

  return (
    <div className={base()}>
      <ProfileBannerImage
        src={props.imageSrc}
        alt={props.imageAlt}
        onClick={() => {}}
      />
      <div className={avatar()}>
        <Avatar
          src={props.avatarSrc}
          alt={props.avatarAlt}
          size="xl"
          onActionClick={props.isCurrentUser ? () => {} : undefined}
        />
      </div>
      <div className={info()}>
        <ProfileBannerInfo
          isCurrentUser={props.isCurrentUser}
          displayName={props.displayName}
          userName={props.userName}
          location={props.location}
          joinedTimestamp={props.joinedTimestamp}
          onProfileClick={() => {}}
        />
        <Paragraph size="md" className={description()}>
          {props.description}
        </Paragraph>
      </div>
    </div>
  );
};
