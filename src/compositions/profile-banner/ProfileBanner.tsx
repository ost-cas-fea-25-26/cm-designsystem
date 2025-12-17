"use client";

import { useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Avatar, Paragraph } from "../../components";
import {
  ImageUploadModal,
  type ImageUploadModalRef,
} from "../image-upload-modal/ImageUploadModal";
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
  avatarSrc?: string | null;

  /** Alt text for the avatar image. */
  avatarAlt: string;

  /** URL of the profile banner or main image. */
  imageSrc?: string | null;

  /** Alt text for the main image. */
  imageAlt: string;

  /** The user's display name. */
  displayName?: string | null;

  /** The user’s username/handle. */
  userName?: string | null;

  /** The user’s location string. */
  location?: string | null;

  /** Date when the user joined. */
  joinedTimestamp?: Date | null;

  /** Bio or profile description text. */
  description?: string | null;

  /** Whether the profile being viewed belongs to the logged-in user. */
  isCurrentUser: boolean;

  /**
   *     Optional callback triggered when the profile/banner image changes.
   *     Receives the selected `File`, or `null` if cleared.
   */
  onProfileImageChange?: (file: File | null) => void;

  /**
   *     Optional callback triggered when the avatar image changes.
   *     Receives the selected `File`, or `null` if cleared.
   */
  onAvatarImageChange?: (file: File | null) => void;
}

/**
 * Profile banner component for displaying user profile info.
 */
export const ProfileBanner: React.FC<ProfileBannerProps> = (
  props: ProfileBannerProps
) => {
  const { base, avatar, info, description } = ProfileBannerStyles(props);
  const profileImageUploadModalRef = useRef<ImageUploadModalRef>(null);
  const avatarImageUploadModalRef = useRef<ImageUploadModalRef>(null);

  return (
    <>
      <div className={base()}>
        <ProfileBannerImage
          src={props.imageSrc}
          alt={props.imageAlt}
          onClick={() => profileImageUploadModalRef.current?.openModal(true)}
        />
        <div className={avatar()}>
          <Avatar
            src={props.avatarSrc}
            alt={props.avatarAlt}
            size="xl"
            onActionClick={
              props.isCurrentUser
                ? () => avatarImageUploadModalRef.current?.openModal(true)
                : undefined
            }
          />
        </div>
        <div className={info()}>
          <ProfileBannerInfo
            isCurrentUser={props.isCurrentUser}
            displayName={props.displayName}
            userName={props.userName}
            location={props.location}
            joinedTimestamp={props.joinedTimestamp}
          />
          <Paragraph size="md" className={description()}>
            {props.description}
          </Paragraph>
        </div>
      </div>

      <ImageUploadModal
        ref={profileImageUploadModalRef}
        onFileChange={props.onProfileImageChange ?? (() => {})}
      />
      <ImageUploadModal
        ref={avatarImageUploadModalRef}
        onFileChange={props.onAvatarImageChange ?? (() => {})}
      />
    </>
  );
};
