// Main Icon component (string-based API)
export { Icon } from "./Icon";
export type { IconProps } from "./Icon";

// Individual icon components (recommended for cleaner API)
export {
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
  // Dynamic icons with props
  ArrowIcon,
  ReplyIcon,
  HeartIcon,
} from "./Icons";

// Export prop types for dynamic icons
export type { ArrowIconProps, ReplyIconProps, HeartIconProps } from "./Icons";

// Base props type for creating new icons
export type { BaseIconProps } from "./iconUtils";
