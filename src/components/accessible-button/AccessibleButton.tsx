import { cnBase, tv } from "tailwind-variants";

const accessibleButtonStyles = tv({
  variants: {
    isClickable: {
      true: ["cursor-pointer", "[&_*]:cursor-pointer"],
    },
  },
});

/**
 * Props for the AccessibleButton component.
 */
export interface BaseAccessibleButtonProps {
  /**
   * Accessible label for the button, used by screen readers.
   */
  ariaLabel?: string;

  /**
   * Additional class names to apply to the button element.
   */
  className?: string;

  /**
   * Click handler for the button.
   */
  onClick: () => void;
}

interface AccessibleButtonProps extends BaseAccessibleButtonProps {
  /**
   * The content displayed inside the button.
   */
  children?: React.ReactNode;
}

/**
 * A fully accessible button component.
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  className,
  ariaLabel,
  onClick,
  ...props
}: AccessibleButtonProps) => {
  return (
    <button
      type="button"
      className={cnBase(
        className,
        accessibleButtonStyles({ isClickable: !!onClick })
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};
