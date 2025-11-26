// LogoLink.tsx

import { tv } from "tailwind-variants";
import hoverLogoDefault from "../branding/hover-logo-default.svg";
import hoverLogoHovered from "../branding/hover-logo-hovered.svg";
import type { ElementType } from "react";

const logoStyles = tv({
  slots: {
    link: [
      "focus-ring-neutral",
      "inline-flex",
      "items-center",
      "gap-2",
      "align-middle",
    ],
    container: ["group", "relative", "w-auto"],
    default: [
      "transition-all",
      "duration-200",
      "select-none",
      "block",
      "h-10",
      "w-auto",
      "group-hover:hidden",
    ],
    hover: [
      "transition-all",
      "duration-200",
      "select-none",
      "hidden",
      "h-[44px]",
      "w-auto",
      "group-hover:block",
    ],
  },
});

interface LogoLinkProps {
  href?: string;
  asLink?: ElementType;
  asImage?: ElementType;
}

export const LogoLink = ({
  href = "/",
  asLink: LinkTag = "a",
  asImage: ImageTag = "img",

  ...props
}: LogoLinkProps) => {
  const styles = logoStyles();
  return (
    <LinkTag href={href} className={styles.link()} {...props}>
      {/* Logo Container */}
      <div className={styles.container()}>
        <ImageTag
          src={hoverLogoDefault}
          alt="Logo Default"
          className={styles.default()}
          draggable={false}
        />
        <ImageTag
          src={hoverLogoHovered}
          alt="Logo Hovered"
          className={styles.hover()}
          draggable={false}
        />
      </div>
    </LinkTag>
  );
};
