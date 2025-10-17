// Base props interface for all icon components
export interface BaseIconProps {
  /** Size of the icon */
  size?: "sm" | "md" | "lg" | "xl";
  /** Custom class names */
  className?: string;
  /** Color of the icon */
  color?: string;
  /** Custom width (overrides size) */
  width?: number;
  /** Custom height (overrides size) */
  height?: number;
  /** Accessibility label */
  "aria-label"?: string;
  /** Whether icon is decorative only */
  "aria-hidden"?: boolean;
}

// Size mappings
const sizePixels = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10",
};

// Helper function to process icon props consistently
export const getIconProps = (props: BaseIconProps) => {
  const {
    size = "md",
    className = "",
    color,
    width,
    height,
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden = !ariaLabel,
    ...rest
  } = props;

  // Calculate final dimensions
  const pixelSize = sizePixels[size];
  const finalWidth = width || pixelSize;
  const finalHeight = height || pixelSize;

  // Use Tailwind classes for standard sizes, inline styles for custom
  const hasCustomSize = width || height;
  const sizeClass = hasCustomSize ? "" : sizeClasses[size];

  // If no explicit color prop is provided, use currentColor to inherit from CSS color property
  // This allows Tailwind text-* classes to work properly with SVG fill
  const finalColor = color !== undefined ? color : "currentColor";

  return {
    width: finalWidth,
    height: finalHeight,
    className: `${sizeClass} ${className}`.trim(),
    style: hasCustomSize
      ? { width: finalWidth, height: finalHeight }
      : undefined,
    color: finalColor,
    ariaLabel,
    ariaHidden,
    ...rest,
  };
};
