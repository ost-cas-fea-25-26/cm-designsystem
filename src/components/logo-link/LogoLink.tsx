// LogoLink.tsx
import type { ElementType } from "react";
import hoverLogoDefault from "../branding/hover-logo-default.svg";
import hoverLogoHovered from "../branding/hover-logo-hovered.svg";

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
      <div className="group relative h-10 w-auto">
        <ImageTag
          src={hoverLogoDefault}
          alt="Logo Default"
          className="block h-10 w-auto object-contain transition-all duration-200 group-hover:hidden"
          draggable={false}
        />
        <ImageTag
          src={hoverLogoHovered}
          alt="Logo Hovered"
          className="hidden h-11 w-auto object-contain transition-all duration-200 group-hover:block"
          draggable={false}
        />
      </div>

      {/* Text rechts vom Logo */}
      {text && <span className="text-white select-none">{text}</span>}
    </LinkTag>
  );
};
