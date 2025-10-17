import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Icon Component**

String-based API for displaying Nucleo icons. You can also import individual icon components directly for a cleaner API.

### Usage:
\`\`\`tsx
// String-based API
<Icon name="upload" size="md" />

// Or import individual icons (recommended)
import { UploadIcon } from './components/Icon';
<UploadIcon size="md" />
\`\`\`

### Adding New Icons:
1. Export SVG from Nucleo
2. Add to \`Icons.tsx\` following the existing pattern
3. Update the \`IconProps\` type and iconComponents map
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: [
        "upload",
        "calendar",
        "cancel",
        "checkmark",
        "edit",
        "location",
        "send",
      ],
      description: "Icon name",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the icon",
    },
    color: {
      control: "color",
      description: "Color of the icon",
    },
    width: {
      control: "number",
      description: "Custom width in pixels (overrides size)",
    },
    height: {
      control: "number",
      description: "Custom height in pixels (overrides size)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    "aria-label": {
      control: "text",
      description: "Accessibility label for screen readers",
    },
    "aria-hidden": {
      control: "boolean",
      description: "Whether the icon is decorative only",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "upload",
    size: "md",
  },
};

export const Upload: Story = {
  args: {
    name: "upload",
    size: "lg",
    color: "#3B82F6",
    "aria-label": "Upload file",
  },
};

export const CustomSize: Story = {
  args: {
    name: "calendar",
    width: 48,
    height: 48,
    color: "#EF4444",
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          📝 How to Add Your Nucleo Icons
        </h3>
        <div className="text-sm text-blue-700 space-y-1">
          <p>
            <strong>1.</strong> Export SVG code from your purchased Nucleo icons
          </p>
          <p>
            <strong>2.</strong> Add to{" "}
            <code className="bg-blue-100 px-1 rounded">Icons.tsx</code>{" "}
            following the existing pattern
          </p>
          <p>
            <strong>3.</strong> Update the icon name types in{" "}
            <code className="bg-blue-100 px-1 rounded">Icon.tsx</code>
          </p>
          <p>
            <strong>4.</strong> Replace{" "}
            <code className="bg-blue-100 px-1 rounded">stroke="#000"</code> with{" "}
            <code className="bg-blue-100 px-1 rounded">
              stroke={"{"}color{"}"}
            </code>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4">
        {(
          [
            "upload",
            "calendar",
            "cancel",
            "checkmark",
            "edit",
            "location",
            "send",
          ] as const
        ).map((iconName) => (
          <div
            key={iconName}
            className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-50"
          >
            <Icon name={iconName} size="xl" />
            <span className="text-sm text-gray-600">{iconName}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon name="checkmark" size={size} color="#F59E0B" />
          <span className="text-sm text-gray-600">{size}</span>
          <span className="text-xs text-gray-400">
            {size === "sm" && "16px"}
            {size === "md" && "24px"}
            {size === "lg" && "32px"}
            {size === "xl" && "40px"}
          </span>
        </div>
      ))}
    </div>
  ),
};
