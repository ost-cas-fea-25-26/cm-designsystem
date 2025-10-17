import {
  UploadIcon,
  CalendarIcon,
  CancelIcon,
  CheckmarkIcon,
  EditIcon,
  LocationIcon,
  SendIcon,
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
    | "send";
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
  };

  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent {...props} />;
};
