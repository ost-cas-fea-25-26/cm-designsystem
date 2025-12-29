"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useState } from "react";
import { cn, tv, type VariantProps } from "tailwind-variants";
import { Edit } from "../../components/icons/generated";

const ProfileBannerImageStyles = tv({
  slots: {
    base: ["w-full", "max-w-[680px]", "min-w-[680px]", "sm:min-w-[320px]"],
    image: [
      "h-full",
      "w-full",
      "cursor-pointer",
      "rounded-2xl",
      "object-cover",
    ],
    overlay: [
      "group",
      "absolute",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "inset-0",
      "bg-violet-600/0",
      "hover:bg-violet-600/50",
      "transition",
      "duration-500",
      "ease-in-out",
    ],
    icon: [
      "w-8",
      "h-8",
      "opacity-0",
      "group-hover:opacity-100",
      "transition",
      "duration-500",
      "rotate-15",
      "group-hover:rotate-0",
    ],
  },
  variants: {
    isFallback: {
      true: { image: ["bg-violet-200"] },
    },
  },
});

type ProfileBannerImageVariants = VariantProps<typeof ProfileBannerImageStyles>;

interface ProfileBannerImageProps extends ProfileBannerImageVariants {
  /** Avatar image URL */
  src?: string | null;

  /**
   * Alternative text for the image, used for accessibility.
   */
  alt: string;

  /** Click handler for the whole ProfileBannerImage component */
  onClick: () => void;
}

/**
 * ProfileBannerImage component
 *
 * Displays a banner image with a fixed aspect ratio (17:8) and an optional overlay icon.
 * If the image fails to load, a fallback element is displayed instead.
 */
export const ProfileBannerImage: React.FC<ProfileBannerImageProps> = (
  props: ProfileBannerImageProps
) => {
  const { base, image, overlay, icon } = ProfileBannerImageStyles(props);
  const [src, setSrc] = useState<string>(props.src ?? "");

  return (
    <div className={base()}>
      <AspectRatio.Root ratio={17 / 8}>
        {src ? (
          <>
            <img
              className={image()}
              src={src}
              alt={props.alt}
              onError={() => setSrc("")}
            />
            {/* Overlay*/}
            <button className={cn(image(), overlay())} onClick={props.onClick}>
              <Edit className={icon()} />
            </button>
          </>
        ) : (
          <div className={image({ isFallback: true })} />
        )}
      </AspectRatio.Root>
    </div>
  );
};
