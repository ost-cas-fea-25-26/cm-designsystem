# Nucleo Icons Setup Guide

## 🚀 Quick Start

### Two ways to use icons:

#### 1. String-based API (Icon component)

```tsx
import { Icon } from './components/Icon';

<Icon name="upload" size="md" />
<Icon name="home" size="lg" color="#3B82F6" />
```

#### 2. Individual components (Recommended)

```tsx
import { UploadIcon, HomeIcon } from './components/Icon';

<UploadIcon size="md" />
<HomeIcon size="lg" color="#3B82F6" />
```

## 📝 Adding Your Nucleo Icons

### 1. Export SVG from Nucleo

- Get your SVG code from purchased Nucleo icons

### 2. Add to Icons.tsx

```tsx
export const YourIconName = (props: BaseIconProps) => {
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
      viewBox="0 0 24 24" // Use your Nucleo icon's viewBox
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...rest}
    >
      {/* Paste your Nucleo SVG content here */}
      {/* IMPORTANT: Replace stroke="#000" with stroke={color} */}
    </svg>
  );
};
```

### 3. Update Icon.tsx (for string-based API)

```tsx
// Add to IconProps type
export interface IconProps extends BaseIconProps {
  name:
    | "upload"
    | "download"
    | "home"
    | "user"
    | "search"
    | "heart"
    | "star"
    | "your-icon-name";
}

// Add to iconComponents map
const iconComponents = {
  // ... existing icons
  "your-icon-name": YourIconName,
};
```

### 4. Export from index.ts

```tsx
export {
  // ... existing exports
  YourIconName,
} from "./Icons";
```

## ✅ Features

All icons support:

- **Sizes**: `sm` (16px), `md` (24px), `lg` (32px), `xl` (40px)
- **Custom dimensions**: `width={48} height={48}`
- **Colors**: Any CSS color value
- **Styling**: `className="hover:scale-110"`
- **Accessibility**: `aria-label`, `aria-hidden`

## 🎯 Examples

```tsx
// Sizes
<UploadIcon size="sm" />
<UploadIcon size="md" />
<UploadIcon size="lg" />
<UploadIcon size="xl" />

// Colors
<UploadIcon color="#3B82F6" />
<UploadIcon color="red" />

// Custom size
<UploadIcon width={64} height={64} />

// With styling
<UploadIcon className="hover:scale-110 transition-transform" />

// Accessibility
<UploadIcon aria-label="Upload file" />
<UploadIcon aria-hidden={true} />
```

## 🔧 Important Tips

1. **Replace colors**: Change `stroke="#000000"` to `stroke={color}` in your SVG
2. **Keep viewBox**: Use the original viewBox from your Nucleo SVG
3. **Naming**: Use PascalCase ending with "Icon" (e.g., `UploadIcon`)
4. **Testing**: Check your icons in Storybook after adding them

Ready to add your Nucleo icons! 🎉
