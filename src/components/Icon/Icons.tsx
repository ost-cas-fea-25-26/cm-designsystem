import { getIconProps } from "./iconUtils";
import type { BaseIconProps } from "./iconUtils";

// Individual Nucleo icon components
// Replace the SVG content with your actual Nucleo exports

export const UploadIcon = (props: BaseIconProps) => {
  const {
    width,
    height,
    className,
    color,
    ariaLabel,
    ariaHidden,
    style,
    ...rest
  } = getIconProps(props);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest}
    >
      <path
        d="M14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4805 13 10.7348 13 11V13H3V11C3 10.7348 2.89464 10.4805 2.70711 10.2929C2.51957 10.1054 2.26522 10 2 10C1.73478 10 1.48043 10.1054 1.29289 10.2929C1.10536 10.4805 1 10.7348 1 11V13C1 13.5305 1.21071 14.0392 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15H13C13.5304 15 14.0391 14.7893 14.4142 14.4142C14.7893 14.0392 15 13.5305 15 13V11C15 10.7348 14.8946 10.4805 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10Z"
        fill={color}
      />
      <path
        d="M4.707 6.70703L7 4.41403V10C7 10.2652 7.10536 10.5196 7.29289 10.7071C7.48043 10.8947 7.73478 11 8 11C8.26522 11 8.51957 10.8947 8.70711 10.7071C8.89464 10.5196 9 10.2652 9 10V4.41403L11.293 6.70703C11.4816 6.88919 11.7342 6.98998 11.9964 6.9877C12.2586 6.98543 12.5094 6.88026 12.6948 6.69485C12.8802 6.50944 12.9854 6.25863 12.9877 5.99643C12.99 5.73423 12.8892 5.48163 12.707 5.29303L8.707 1.29303C8.51947 1.10556 8.26516 1.00024 8 1.00024C7.73484 1.00024 7.48053 1.10556 7.293 1.29303L3.293 5.29303C3.11084 5.48163 3.01005 5.73423 3.01233 5.99643C3.0146 6.25863 3.11977 6.50944 3.30518 6.69485C3.49059 6.88026 3.7414 6.98543 4.0036 6.9877C4.2658 6.98998 4.5184 6.88919 4.707 6.70703Z"
        fill={color}
      />
    </svg>
  );
};

export const CalendarIcon = (props: BaseIconProps) => {
  const {
    width,
    height,
    className,
    color,
    ariaLabel,
    ariaHidden,
    style,
    ...rest
  } = getIconProps(props);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest}
    >
      <g clipPath="url(#clip0_478_1455)">
        <path
          d="M14 3H13V1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0C11.7348 0 11.4804 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V3H5V1C5 0.734784 4.89464 0.48043 4.70711 0.292893C4.51957 0.105357 4.26522 0 4 0C3.73478 0 3.48043 0.105357 3.29289 0.292893C3.10536 0.48043 3 0.734784 3 1V3H2C1.46957 3 0.960859 3.21071 0.585786 3.58579C0.210714 3.96086 0 4.46957 0 5L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3ZM2 14V7H14V14H2Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_478_1455">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CancelIcon = (props: BaseIconProps) => {
  const {
    width,
    height,
    className,
    color,
    ariaLabel,
    ariaHidden,
    style,
    ...rest
  } = getIconProps(props);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest}
    >
      <path
        d="M12.5578 1.25777C12.3609 1.06089 12.0411 1.06277 11.8465 1.26196L8.00004 5.20004L4.15354 1.26196C3.95898 1.06277 3.63919 1.06089 3.4423 1.25777L1.25777 3.4423C1.06089 3.63919 1.06277 3.95898 1.26196 4.15354L5.20004 8.00004L1.26196 11.8465C1.06277 12.0411 1.06089 12.3609 1.25777 12.5578L3.4423 14.7423C3.63919 14.9392 3.95898 14.9373 4.15354 14.7381L8.00004 10.8L11.8465 14.7381C12.0411 14.9373 12.3609 14.9392 12.5578 14.7423L14.7423 12.5578C14.9392 12.3609 14.9373 12.0411 14.7381 11.8465L10.8 8.00004L14.7381 4.15354C14.9373 3.95898 14.9392 3.63919 14.7423 3.4423L12.5578 1.25777Z"
        fill={color}
      />
    </svg>
  );
};

export const CheckmarkIcon = (props: BaseIconProps) => {
  const {
    width,
    height,
    className,
    color,
    ariaLabel,
    ariaHidden,
    style,
    ...rest
  } = getIconProps(props);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest}
    >
      <path
        d="M5.59992 9.60002L2.75348 6.75358C2.55822 6.55831 2.24163 6.55831 2.04637 6.75358L0.353478 8.44647C0.158216 8.64173 0.158216 8.95831 0.353478 9.15358L5.24637 14.0465C5.44163 14.2417 5.75822 14.2417 5.95348 14.0465L15.6464 4.35358C15.8416 4.15831 15.8416 3.84173 15.6464 3.64647L13.9535 1.95358C13.7582 1.75831 13.4416 1.75831 13.2464 1.95358L5.59992 9.60002Z"
        fill={color}
      />
    </svg>
  );
};

export const EditIcon = (props: BaseIconProps) => {
  const {
    width,
    height,
    className,
    color,
    ariaLabel,
    ariaHidden,
    style,
    ...rest
  } = getIconProps(props);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest}
    >
      <g clipPath="url(#clip0_478_1401)">
        <path
          d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z"
          fill={color}
        />
        <path
          d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_478_1401">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LocationIcon = (props: BaseIconProps) => {
  const {
    width,
    height,
    className,
    color,
    ariaLabel,
    ariaHidden,
    style,
    ...rest
  } = getIconProps(props);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest}
    >
      <g clipPath="url(#clip0_478_1451)">
        <path
          d="M8 0C4.1 0 1 3.1 1 7C1 8.9 1.7 10.7 3.1 12C3.2 12.1 7.2 15.7 7.3 15.8C7.7 16.1 8.3 16.1 8.6 15.8C8.7 15.7 12.8 12.1 12.8 12C14.2 10.7 14.9 8.9 14.9 7C15 3.1 11.9 0 8 0ZM8 9C6.9 9 6 8.1 6 7C6 5.9 6.9 5 8 5C9.1 5 10 5.9 10 7C10 8.1 9.1 9 8 9Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_478_1451">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SendIcon = (props: BaseIconProps) => {
  const {
    width,
    height,
    className,
    color,
    ariaLabel,
    ariaHidden,
    style,
    ...rest
  } = getIconProps(props);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest}
    >
      <polygon
        points=".321 9.172 7.485 14.29 14 10 9.71 16.515 14.828 23.679 22.081 1.919 .321 9.172"
        strokeWidth="0"
        fill={color}
      />
    </svg>
  );
};

// Template for adding new Nucleo icons:
//
// 1. Export SVG from Nucleo with your icon
// 2. Copy the template below and replace YourIconName and the SVG content
// 3. Update the viewBox to match your Nucleo icon's viewBox
// 4. Make sure to replace fill="#color" with fill={color} for dynamic colors
//
// export const YourIconName = (props: BaseIconProps) => {
//   const { width, height, className, color, ariaLabel, ariaHidden, style, ...rest } = getIconProps(props);
//
//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox="0 0 16 16" // Use your Nucleo icon's viewBox
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       style={style}
//       aria-label={ariaLabel}
//       aria-hidden={ariaHidden}
//       {...rest}
//     >
//       {/* Paste your Nucleo SVG content here */}
//       {/* Remember to replace fill="#000" with fill={color} */}
//     </svg>
//   );
// };
