// LogoLink.tsx
import { tv } from "tailwind-variants";
import type { ElementType } from "react";
import hoverLogoDefault from "../branding/hover-logo-default.svg";
import hoverLogoHovered from "../branding/hover-logo-hovered.svg";

// Tailwind Variants für das Logo
const logoStyles = tv({
  base: "transition-all duration-200 select-none",
  variants: {
    state: {
      default: "block h-10 w-auto group-hover:hidden",
      hover: "hidden h-[44px] w-auto group-hover:block",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

interface LogoLinkProps {
  href?: string;
  asLink?: ElementType;
  asImage?: ElementType;
  text?: string;
}

export const LogoLink = ({
  href = "/",
  asLink: LinkTag = "a",
  asImage: ImageTag = "img",
  text,
  ...props
}: LogoLinkProps) => {
  return (
    <LinkTag
      href={href}
      className="focus-ring-neutral inline-flex items-center gap-2 align-middle"
      {...props}
    >
      {/* Logo Container */}
      <div className="group relative w-auto">
        <ImageTag
          src={hoverLogoDefault}
          alt="Logo Default"
          className={logoStyles({ state: "default" })}
          draggable={false}
        />
        <ImageTag
          src={hoverLogoHovered}
          alt="Logo Hovered"
          className={logoStyles({ state: "hover" })}
          draggable={false}
        />
      </div>

      {/* Text rechts vom Logo */}
      {text && <span className="text-white select-none">{text}</span>}
    </LinkTag>
  );
};
