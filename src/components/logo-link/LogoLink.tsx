// LogoLink.tsx

import { tv } from "tailwind-variants";
import hoverLogoDefault from "../branding/hover-logo-default.svg";
import hoverLogoHovered from "../branding/hover-logo-hovered.svg";

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

type LogoLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

export const LogoLink = ({ href = "/", ...props }: LogoLinkProps) => {
  const styles = logoStyles();
  return (
    <a href={href} className={styles.link()} {...props}>
      {/* Logo Container */}
      <div className={styles.container()}>
        <img
          src={hoverLogoDefault}
          alt="Logo Default"
          className={styles.default()}
          draggable={false}
        />
        <img
          src={hoverLogoHovered}
          alt="Logo Hovered"
          className={styles.hover()}
          draggable={false}
        />
      </div>
    </a>
  );
};
