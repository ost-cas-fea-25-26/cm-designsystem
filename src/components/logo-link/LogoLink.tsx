import { tv } from "tailwind-variants";
import { Mumble } from "../icons/generated";

const logoStyles = tv({
  slots: {
    base: ["flex", "items-center", "focus-ring-neutral", "gap-3", "group"],
    icon: [
      "text-white",
      "w-10",
      "h-10",
      "group-hover:scale-125",
      "transition-transform",
    ],
    text: [
      "text-white",
      "text-[40px]/[100%]",
      "font-bold",
      "tracking-[-0.1rem]",
      "font-bold",
    ],
  },
});

/**
 * Props for LogoLink component *
 */
type LogoLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  /**
   * The URL to navigate to when the logo is clicked.  Defaults to "/".
   */
  href?: string;
};

export const LogoLink = ({ href = "/", ...props }: LogoLinkProps) => {
  const styles = logoStyles();
  return (
    <a href={href} className={styles.base()} {...props}>
      <Mumble className={styles.icon()} />
      <span className={styles.text()}>Mumble</span>
    </a>
  );
};
