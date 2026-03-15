"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useState } from "react";
import { cn, tv, type VariantProps } from "tailwind-variants";
import { Fullscreen } from "../../components/icons/generated";

const ImageBannerStyles = tv({
  slots: {
    base: ["w-full", "md:w-148"],
    image: ["h-full", "w-full", "cursor-pointer", "rounded-lg", "object-cover"],
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
      "group-hover:rotate-0",
    ],
  },
  variants: {
    isFallback: {
      true: { image: ["bg-violet-200"] },
    },
  },
});

type ImageBannerVariants = VariantProps<typeof ImageBannerStyles>;

interface ImageBannerProps extends ImageBannerVariants {
  /** Avatar image URL */
  src: string;

  /**
   * Alternative text for the image, used for accessibility.
   */
  alt: string;

  /** Click handler for the whole ImageBanner component */
  onClick: () => void;

  /**
   * Optional custom image component (e.g., Next.js Image).
   * If not provided, uses standard HTML img element.
   */
  ImageComponent?: React.ComponentType<{
    src: string;
    alt: string;
    className?: string;
    onError?: () => void;
  }>;
}

/**
 * ImageBanner component
 *
 * Displays a banner image with a fixed aspect ratio (17:8) and an optional overlay icon.
 * If the image fails to load, a fallback element is displayed instead.
 */
export const ImageBanner: React.FC<ImageBannerProps> = ({
  ImageComponent,
  ...props
}: ImageBannerProps) => {
  const { base, image, overlay, icon } = ImageBannerStyles(props);
  const [src, setSrc] = useState<string>(props.src);
  const ImageElement = ImageComponent || "img";

  return (
    <div className={base()}>
      {src ? (
        <AspectRatio.Root ratio={37 / 20}>
          <ImageElement
            className={image()}
            src={src}
            alt={props.alt}
            onError={() => setSrc("")}
            loading="lazy"
          />
          {/* Overlay*/}
          <button className={cn(image(), overlay())} onClick={props.onClick}>
            <Fullscreen className={icon()} />
          </button>
        </AspectRatio.Root>
      ) : (
        <div className={image({ isFallback: true })} />
      )}
    </div>
  );
};
