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

export const LogOutIcon = (props: BaseIconProps) => {
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
      <g clipPath="url(#clip0_447_767)">
        <path
          d="M6.293 11.955C6.35799 11.9846 6.42858 12 6.5 12C6.62106 11.9999 6.73796 11.9558 6.829 11.876L10.829 8.376C10.8825 8.32907 10.9254 8.27125 10.9548 8.20641C10.9842 8.14157 10.9994 8.07119 10.9994 8C10.9994 7.92881 10.9842 7.85844 10.9548 7.79359C10.9254 7.72875 10.8825 7.67093 10.829 7.624L6.829 4.124C6.75672 4.06084 6.66779 4.01982 6.57283 4.00584C6.47787 3.99186 6.38089 4.00551 6.29347 4.04516C6.20606 4.0848 6.1319 4.14878 6.07986 4.22943C6.02782 4.31008 6.0001 4.40401 6 4.5V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H6V11.5C6.00003 11.596 6.02767 11.6899 6.07962 11.7706C6.13158 11.8512 6.20565 11.9153 6.293 11.955Z"
          fill={color}
        />
        <path
          d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V4C0 4.26522 0.105357 4.51957 0.292893 4.70711C0.48043 4.89464 0.734784 5 1 5C1.26522 5 1.51957 4.89464 1.70711 4.70711C1.89464 4.51957 2 4.26522 2 4V2H14V14H2V12C2 11.7348 1.89464 11.4804 1.70711 11.2929C1.51957 11.1054 1.26522 11 1 11C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_447_767_logout">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SettingsIcon = (props: BaseIconProps) => {
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
      <g clipPath="url(#clip0_447_761_settings)">
        <path
          d="M15.135 6.784C13.832 6.458 13.214 4.966 13.905 3.815C14.227 3.279 14.13 2.817 13.811 2.499L13.501 2.189C13.183 1.871 12.721 1.774 12.185 2.095C11.033 2.786 9.541 2.168 9.216 0.865C9.065 0.258 8.669 0 8.219 0H7.781C7.331 0 6.936 0.258 6.784 0.865C6.458 2.168 4.966 2.786 3.815 2.095C3.279 1.773 2.816 1.87 2.498 2.188L2.188 2.498C1.87 2.816 1.773 3.279 2.095 3.815C2.786 4.967 2.168 6.459 0.865 6.784C0.26 6.935 0 7.33 0 7.781V8.219C0 8.669 0.258 9.064 0.865 9.216C2.168 9.542 2.786 11.034 2.095 12.185C1.773 12.721 1.87 13.183 2.189 13.501L2.499 13.811C2.818 14.13 3.281 14.226 3.815 13.905C4.967 13.214 6.459 13.832 6.784 15.135C6.935 15.742 7.331 16 7.781 16H8.219C8.669 16 9.064 15.742 9.216 15.135C9.542 13.832 11.034 13.214 12.185 13.905C12.72 14.226 13.182 14.13 13.501 13.811L13.811 13.501C14.129 13.183 14.226 12.721 13.905 12.185C13.214 11.033 13.832 9.541 15.135 9.216C15.742 9.065 16 8.669 16 8.219V7.781C16 7.33 15.74 6.935 15.135 6.784ZM8 11C6.343 11 5 9.657 5 8C5 6.343 6.343 5 8 5C9.657 5 11 6.343 11 8C11 9.657 9.657 11 8 11Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_447_761_settings">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FullscreenIcon = (props: BaseIconProps) => {
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
      <g clipPath="url(#clip0_447_528_fullscreen)">
        <path
          d="M15.0006 0H10.0006C9.73535 0 9.481 0.105357 9.29346 0.292893C9.10593 0.48043 9.00057 0.734784 9.00057 1C9.00057 1.26522 9.10593 1.51957 9.29346 1.70711C9.481 1.89464 9.73535 2 10.0006 2H12.5866L9.29357 5.293C9.19806 5.38525 9.12188 5.49559 9.06947 5.6176C9.01706 5.7396 8.98947 5.87082 8.98832 6.0036C8.98717 6.13638 9.01247 6.26806 9.06275 6.39095C9.11303 6.51385 9.18728 6.6255 9.28118 6.7194C9.37507 6.81329 9.48672 6.88754 9.60962 6.93782C9.73251 6.9881 9.86419 7.0134 9.99697 7.01225C10.1298 7.0111 10.261 6.98351 10.383 6.9311C10.505 6.87869 10.6153 6.80251 10.7076 6.707L14.0006 3.414V6C14.0006 6.26522 14.1059 6.51957 14.2935 6.70711C14.481 6.89464 14.7354 7 15.0006 7C15.2658 7 15.5201 6.89464 15.7077 6.70711C15.8952 6.51957 16.0006 6.26522 16.0006 6V1C16.0006 0.734784 15.8952 0.48043 15.7077 0.292893C15.5201 0.105357 15.2658 0 15.0006 0V0Z"
          fill={color}
        />
        <path
          d="M6.707 9.293C6.51947 9.10553 6.26516 9.00021 6 9.00021C5.73484 9.00021 5.48053 9.10553 5.293 9.293L2 12.586V10C2 9.73478 1.89464 9.48043 1.70711 9.29289C1.51957 9.10536 1.26522 9 1 9C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10L0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16H6C6.26522 16 6.51957 15.8946 6.70711 15.7071C6.89464 15.5196 7 15.2652 7 15C7 14.7348 6.89464 14.4804 6.70711 14.2929C6.51957 14.1054 6.26522 14 6 14H3.414L6.707 10.707C6.89447 10.5195 6.99979 10.2652 6.99979 10C6.99979 9.73484 6.89447 9.48053 6.707 9.293Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_447_528_fullscreen">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EyeIcon = (props: BaseIconProps) => {
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
        d="M8.00013 14C12.7071 14 15.7441 8.716 15.8711 8.492C16.0421 8.188 16.0431 7.816 15.8721 7.512C15.7461 7.287 12.7311 2 8.00013 2C3.24513 2 0.251127 7.289 0.126127 7.514C-0.0428725 7.817 -0.0418725 8.186 0.128127 8.489C0.254128 8.713 3.26913 14 8.00013 14ZM8.00013 4C10.8391 4 13.0361 6.835 13.8181 8C13.0341 9.166 10.8371 12 8.00013 12C5.15913 12 2.96213 9.162 2.18113 7.999C2.95813 6.835 5.14613 4 8.00013 4Z"
        fill={color}
      />
      <path
        d="M8.00013 10C9.1047 10 10.0001 9.10457 10.0001 8C10.0001 6.89543 9.1047 6 8.00013 6C6.89556 6 6.00013 6.89543 6.00013 8C6.00013 9.10457 6.89556 10 8.00013 10Z"
        fill={color}
      />
    </svg>
  );
};

export const MumbleIcon = (props: BaseIconProps) => {
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
      <g clipPath="url(#clip0_420_58_mumble)">
        <path
          d="M9.79291 10H6.20709C5.76166 10 5.53857 10.5386 5.85357 10.8535L7.64642 12.6464C7.84173 12.8417 8.15826 12.8417 8.35357 12.6464L10.1464 10.8535C10.4614 10.5386 10.2383 10 9.79291 10Z"
          fill={color}
        />
        <path
          d="M14.8074 5.37115C15.5281 4.82697 16 3.97394 16 3C16 1.34314 14.6569 4.79794e-06 13 4.79794e-06C12.2129 4.79794e-06 11.504 0.309085 10.9712 0.806405C9.10669 -0.270475 6.89553 -0.271705 5.02875 0.806465C4.49603 0.309145 3.78705 4.79794e-06 3 4.79794e-06C1.34314 4.79794e-06 0 1.34314 0 3C0 3.97394 0.47186 4.82697 1.19263 5.37115C0.0154001 7.86726 -0.6396 11.0175 0.93457 13.2979C2.17285 15.0908 4.5498 16 8 16C11.4502 16 13.8271 15.0908 15.0654 13.2979C16.6397 11.0174 15.9845 7.86707 14.8074 5.37115ZM13.4199 12.1611C12.5772 13.3809 10.7539 14 8 14C5.24609 14 3.42285 13.3809 2.58008 12.1611C1.5293 10.6387 2.16309 8.3252 2.63477 7.08203C3.08594 5.88965 4.80762 2 8 2C11.1924 2 12.9141 5.88965 13.3652 7.08203C13.8369 8.3252 14.4707 10.6387 13.4199 12.1611Z"
          fill={color}
        />
        <path
          d="M6.66949 6.61743C6.55627 6.17469 6.28967 5.56726 5.5061 5.56726C4.42505 5.56726 3.51904 7.16309 3.50872 7.87347C3.49841 8.58392 3.98235 9.35607 4.57946 9.35607C5.17663 9.35607 5.70171 8.82067 6.23711 8.05884C6.77246 7.29695 6.78278 7.06012 6.66949 6.61743Z"
          fill={color}
        />
        <path
          d="M10.4939 5.56726C9.71033 5.56726 9.44373 6.17469 9.33051 6.61743C9.21723 7.06012 9.22754 7.29693 9.76288 8.05884C10.2983 8.82068 10.8234 9.35608 11.4205 9.35608C12.0176 9.35608 12.5016 8.58392 12.4913 7.87348C12.481 7.16309 11.575 5.56726 10.4939 5.56726Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_420_58_mumble">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ProfileIcon = (props: BaseIconProps) => {
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
        d="M8 7C9.933 7 11.5 5.433 11.5 3.5C11.5 1.567 9.933 0 8 0C6.067 0 4.5 1.567 4.5 3.5C4.5 5.433 6.067 7 8 7Z"
        fill={color}
      />
      <path
        d="M8 8.5C6.14413 8.50212 4.36489 9.2403 3.05259 10.5526C1.7403 11.8649 1.00212 13.6441 1 15.5C1 15.6326 1.05268 15.7598 1.14645 15.8536C1.24021 15.9473 1.36739 16 1.5 16H14.5C14.6326 16 14.7598 15.9473 14.8536 15.8536C14.9473 15.7598 15 15.6326 15 15.5C14.9979 13.6441 14.2597 11.8649 12.9474 10.5526C11.6351 9.2403 9.85587 8.50212 8 8.5Z"
        fill={color}
      />
    </svg>
  );
};

export const TimeIcon = (props: BaseIconProps) => {
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
      <g clipPath="url(#clip0_418_80_time)">
        <path
          d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346625 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9937 5.88022 15.1488 3.84906 13.6499 2.35014C12.1509 0.851219 10.1198 0.00633091 8 0ZM8 14C6.81332 14 5.65328 13.6481 4.66658 12.9888C3.67989 12.3295 2.91085 11.3925 2.45673 10.2961C2.0026 9.19974 1.88378 7.99334 2.11529 6.82946C2.3468 5.66557 2.91825 4.59647 3.75736 3.75736C4.59648 2.91824 5.66558 2.3468 6.82946 2.11529C7.99335 1.88378 9.19975 2.0026 10.2961 2.45672C11.3925 2.91085 12.3295 3.67988 12.9888 4.66658C13.6481 5.65327 14 6.81331 14 8C13.9953 9.58984 13.3616 11.1132 12.2374 12.2374C11.1132 13.3616 9.58984 13.9953 8 14Z"
          fill={color}
        />
        <path
          d="M11.5 7H9V4.5C9 4.23478 8.89465 3.98043 8.70711 3.79289C8.51957 3.60536 8.26522 3.5 8 3.5C7.73479 3.5 7.48043 3.60536 7.2929 3.79289C7.10536 3.98043 7 4.23478 7 4.5V8C7 8.26522 7.10536 8.51957 7.2929 8.70711C7.48043 8.89464 7.73479 9 8 9H11.5C11.7652 9 12.0196 8.89464 12.2071 8.70711C12.3946 8.51957 12.5 8.26522 12.5 8C12.5 7.73478 12.3946 7.48043 12.2071 7.29289C12.0196 7.10536 11.7652 7 11.5 7Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_418_80_time">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ShareIcon = (props: BaseIconProps) => {
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
        d="M12 6C13.654 6 15 4.654 15 3C15 1.346 13.654 0 12 0C10.346 0 9 1.346 9 3C9 3.224 9.029 3.44 9.075 3.65L5.856 5.661C5.344 5.254 4.704 5 4 5C2.346 5 1 6.346 1 8C1 9.654 2.346 11 4 11C4.704 11 5.344 10.746 5.856 10.339L9.075 12.351C9.029 12.56 9 12.776 9 13C9 14.654 10.346 16 12 16C13.654 16 15 14.654 15 13C15 11.346 13.654 10 12 10C11.296 10 10.657 10.254 10.144 10.661L6.925 8.649C6.971 8.44 7 8.223 7 8C7 7.776 6.971 7.56 6.925 7.351L10.145 5.339C10.657 5.746 11.296 6 12 6ZM12 2C12.551 2 13 2.448 13 3C13 3.552 12.551 4 12 4C11.449 4 11 3.552 11 3C11 2.448 11.449 2 12 2ZM4 9C3.449 9 3 8.552 3 8C3 7.448 3.449 7 4 7C4.551 7 5 7.448 5 8C5 8.552 4.551 9 4 9ZM12 12C12.551 12 13 12.448 13 13C13 13.552 12.551 14 12 14C11.449 14 11 13.552 11 13C11 12.448 11.449 12 12 12Z"
        fill={color}
      />
    </svg>
  );
};

export const RepostIcon = (props: BaseIconProps) => {
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
      <g clipPath="url(#clip0_413_274_repost)">
        <path
          d="M14.4133 0.388957C14.3933 0.300829 14.3498 0.219763 14.2874 0.154379C14.2251 0.0889949 14.1461 0.0417372 14.059 0.017631C13.972 -0.00647525 13.88 -0.00652887 13.7928 0.0174758C13.7057 0.0414805 13.6267 0.0886461 13.5643 0.153957L12.0763 1.71296C10.7615 0.862644 9.21332 0.445536 7.64928 0.520217C6.08524 0.594897 4.58388 1.15761 3.35605 2.12933C2.12823 3.10105 1.23562 4.43297 0.80359 5.93801C0.371562 7.44305 0.421817 9.04561 0.947296 10.5206C1.47278 11.9956 2.44708 13.269 3.73338 14.1619C5.01967 15.0548 6.55334 15.5223 8.11899 15.4988C9.68463 15.4754 11.2036 14.9621 12.4626 14.0311C13.7215 13.1 14.6572 11.7981 15.1383 10.308C15.2047 10.0604 15.1735 9.79676 15.0512 9.57151C14.9289 9.34626 14.7247 9.17659 14.4809 9.09754C14.237 9.01849 13.9721 9.03609 13.7409 9.1467C13.5097 9.25732 13.3298 9.4525 13.2383 9.69196C12.8917 10.7746 12.2189 11.7236 11.3121 12.409C10.4053 13.0945 9.30879 13.4829 8.17269 13.521C7.0366 13.5591 5.9165 13.2451 4.96576 12.622C4.01503 11.9989 3.28016 11.0971 2.86177 10.0402C2.44339 8.98327 2.36195 7.82284 2.62861 6.71783C2.89527 5.61282 3.49699 4.61725 4.35138 3.86745C5.20576 3.11766 6.27103 2.6503 7.40131 2.52938C8.53159 2.40845 9.67162 2.63988 10.6653 3.19196L9.06529 4.87196C9.00304 4.93703 8.95953 5.01771 8.93934 5.10547C8.91916 5.19323 8.92305 5.28481 8.9506 5.37054C8.97815 5.45627 9.02835 5.53297 9.09588 5.59254C9.16342 5.65211 9.24578 5.69233 9.33429 5.70896L15.1583 6.79996C15.1886 6.80592 15.2194 6.80894 15.2503 6.80896C15.3254 6.80891 15.3996 6.79193 15.4673 6.75926C15.535 6.7266 15.5944 6.6791 15.6412 6.62029C15.688 6.56148 15.721 6.49288 15.7376 6.41959C15.7542 6.3463 15.7541 6.2702 15.7373 6.19696L14.4133 0.388957Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_413_274_repost">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
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
