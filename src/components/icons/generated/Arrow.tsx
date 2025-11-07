import * as React from "react";
import { IconBase } from "../IconBase";
import type { IconBaseProps } from "../IconBase";

type Direction = "up" | "down" | "left" | "right";

export interface ArrowProps extends Omit<IconBaseProps, "children"> {
  direction?: Direction;
}

// Base path now oriented 'up', so rotations are recalibrated
const rotation: Record<Direction, number> = {
  up: 0,
  right: 90,
  down: 180,
  left: -90,
};

// Arrow path (base orientation: up) sourced from updated design SVG.
// We rotate this base for other directions around the 8x8 center.
export const Arrow: React.FC<ArrowProps> = ({
  direction = "right",
  label,
  ...props
}) => {
  const angle = rotation[direction];
  return (
    <IconBase aria-hidden label={label ?? `Arrow ${direction}`} {...props}>
      <g transform={`rotate(${angle} 8 8)`}>
        <path
          d="M8.78138 0.375088C8.68413 0.263512 8.56411 0.174068 8.42939 0.112778C8.29467 0.0514881 8.14838 0.0197754 8.00038 0.0197754C7.85237 0.0197754 7.70608 0.0514881 7.57136 0.112778C7.43664 0.174068 7.31662 0.263512 7.21938 0.375088L3.21938 5.37509C3.10161 5.52218 3.02779 5.69956 3.00644 5.88678C2.98509 6.07399 3.01707 6.26344 3.09869 6.43327C3.18032 6.6031 3.30827 6.74642 3.4678 6.8467C3.62733 6.94699 3.81194 7.00016 4.00038 7.00009H7.00038V15.0001C7.00038 15.2653 7.10573 15.5197 7.29327 15.7072C7.48081 15.8947 7.73516 16.0001 8.00038 16.0001C8.26559 16.0001 8.51995 15.8947 8.70748 15.7072C8.89502 15.5197 9.00038 15.2653 9.00038 15.0001V7.00009H12.0004C12.1888 7.00016 12.3734 6.94699 12.533 6.8467C12.6925 6.74642 12.8204 6.6031 12.9021 6.43327C12.9837 6.26344 13.0157 6.07399 12.9943 5.88678C12.973 5.69956 12.8991 5.52218 12.7814 5.37509L8.78138 0.375088Z"
          fill="currentColor"
        />
      </g>
    </IconBase>
  );
};
