import {
  UploadIcon,
  CalendarIcon,
  CancelIcon,
  CheckmarkIcon,
  EditIcon,
  LocationIcon,
  SendIcon,
  LogOutIcon,
  SettingsIcon,
  FullscreenIcon,
  EyeIcon,
  MumbleIcon,
  ProfileIcon,
  TimeIcon,
  ShareIcon,
  RepostIcon,
} from "./Icons";
import type { BaseIconProps } from "./iconUtils";

// Extended props for the main Icon component
export interface IconProps extends BaseIconProps {
  name:
    | "upload"
    | "calendar"
    | "cancel"
    | "checkmark"
    | "edit"
    | "location"
    | "send"
    | "logout"
    | "settings"
    | "fullscreen"
    | "eye"
    | "mumble"
    | "profile"
    | "time"
    | "share"
    | "repost";
}

/**
 * Main Icon component - String-based API
 *
 * Usage: <Icon name="upload" size="md" />
 *
 * For a cleaner API, you can also import individual icons:
 * <UploadIcon size="md" />
 */
export const Icon = ({ name, ...props }: IconProps) => {
  const iconComponents = {
    upload: UploadIcon,
    calendar: CalendarIcon,
    cancel: CancelIcon,
    checkmark: CheckmarkIcon,
    edit: EditIcon,
    location: LocationIcon,
    send: SendIcon,
    logout: LogOutIcon,
    settings: SettingsIcon,
    fullscreen: FullscreenIcon,
    eye: EyeIcon,
    mumble: MumbleIcon,
    profile: ProfileIcon,
    time: TimeIcon,
    share: ShareIcon,
    repost: RepostIcon,
  };

  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent {...props} />;
};
