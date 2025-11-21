import { tv, type VariantProps } from "tailwind-variants";
import { Avatar } from "../../components/avatar/Avatar";
import { Button } from "../../components/button/Button";
import { IconButton } from "../../components/icon-button/IconButton";
import { Mumble, Profile } from "../../components/icons/generated";
import { Label } from "../../components/typography/Label";

const userRecommendationStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-4", "items-center", "p-4", "bg-white"],
    userInfo: ["flex", "flex-col", "gap-2", "items-center"],
    displayName: ["text-slate-900"],
  },
});

type UserRecommendationVariants = VariantProps<typeof userRecommendationStyles>;

interface UserRecommendationProps extends UserRecommendationVariants {
  /** Avatar image URL */
  src: string;
  /** Display name of the user */
  displayName: string;
  /** Username of the user */
  userName: string;
  /** Label of the button */
  label: string;
  /** Click handler for the whole UserRecommendation component */
  onFollowClick: () => void;
  onProfileClick: () => void;
}

export const UserRecommendation: React.FC<UserRecommendationProps> = (
  props: UserRecommendationProps
) => {
  const { base, userInfo, displayName } = userRecommendationStyles(props);

  return (
    <div className={base()}>
      <Avatar
        label="Profile"
        size="lg"
        src={props.src}
        onClick={props.onProfileClick}
      />
      <div className={userInfo()}>
        <Label
          size="lg"
          className={displayName()}
          onClick={props.onProfileClick}
        >
          {props.displayName}
        </Label>
        <IconButton
          label={props.userName}
          intent="secondary"
          onClick={props.onProfileClick}
        >
          <Profile />
        </IconButton>
      </div>
      <Button
        label={props.label}
        intent="secondary"
        onClick={props.onFollowClick}
        size="md"
      >
        <Mumble />
      </Button>
    </div>
  );
};
