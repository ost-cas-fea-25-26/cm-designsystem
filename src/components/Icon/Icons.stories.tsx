import type { Meta, StoryObj } from "@storybook/react";
import {
  UploadIcon,
  CalendarIcon,
  CancelIcon,
  CheckmarkIcon,
  EditIcon,
  LocationIcon,
  SendIcon,
} from "./Icons";

const meta: Meta<typeof UploadIcon> = {
  title: "Components/Individual Icons",
  component: UploadIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Individual Icon Components**

Clean component API for Nucleo icons. Import only what you need.

### Usage:
\`\`\`tsx
import { UploadIcon, CalendarIcon } from './components/Icon';

<UploadIcon size="md" />
<CalendarIcon size="lg" color="#3B82F6" />
\`\`\`

### Benefits:
- 🎯 **Cleaner API**: No string names, just components
- 🚀 **Better TypeScript**: Full type checking
- 📦 **Tree shaking**: Only bundle icons you use
- 🔧 **IDE support**: Better autocomplete

### Available Nucleo Icons:
All icons are derived from your purchased Nucleo icon set and optimized for web use.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      control: "color",
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
    },
    className: {
      control: "text",
    },
    "aria-label": {
      control: "text",
    },
    "aria-hidden": {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Upload: Story = {
  args: {
    size: "md",
  },
};

export const AllNucleoIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          ✨ Your Nucleo Icon Components
        </h3>
        <div className="text-sm text-green-700 space-y-2">
          <p>
            <strong>Clean API:</strong>{" "}
            <code className="bg-green-100 px-1 rounded">
              &lt;UploadIcon /&gt;
            </code>{" "}
            instead of{" "}
            <code className="bg-green-100 px-1 rounded">
              &lt;Icon name="upload" /&gt;
            </code>
          </p>
          <p>
            <strong>TypeScript-first:</strong> Full type checking and IDE
            support
          </p>
          <p>
            <strong>Optimized:</strong> Tree shaking only bundles what you use
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 p-4">
        <div className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <UploadIcon size="xl" className="text-violet-600" />
          <div className="text-center">
            <div className="text-sm font-medium">UploadIcon</div>
            <div className="text-xs text-gray-500 font-mono">
              &lt;UploadIcon /&gt;
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <CalendarIcon size="xl" className="text-slate-600" />
          <div className="text-center">
            <div className="text-sm font-medium">CalendarIcon</div>
            <div className="text-xs text-gray-500 font-mono">
              &lt;CalendarIcon /&gt;
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <CancelIcon size="xl" className="text-pink-600" />
          <div className="text-center">
            <div className="text-sm font-medium">CancelIcon</div>
            <div className="text-xs text-gray-500 font-mono">
              &lt;CancelIcon /&gt;
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <CheckmarkIcon size="xl" className="text-violet-500" />
          <div className="text-center">
            <div className="text-sm font-medium">CheckmarkIcon</div>
            <div className="text-xs text-gray-500 font-mono">
              &lt;CheckmarkIcon /&gt;
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <EditIcon size="xl" className="text-slate-700" />
          <div className="text-center">
            <div className="text-sm font-medium">EditIcon</div>
            <div className="text-xs text-gray-500 font-mono">
              &lt;EditIcon /&gt;
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <LocationIcon size="xl" className="text-pink-500" />
          <div className="text-center">
            <div className="text-sm font-medium">LocationIcon</div>
            <div className="text-xs text-gray-500 font-mono">
              &lt;LocationIcon /&gt;
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <SendIcon size="xl" className="text-violet-700" />
          <div className="text-center">
            <div className="text-sm font-medium">SendIcon</div>
            <div className="text-xs text-gray-500 font-mono">
              &lt;SendIcon /&gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <UploadIcon size={size} className="text-violet-600" />
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

export const DesignSystemColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
        <h3 className="text-lg font-semibold text-violet-800 mb-2">
          🎨 Design System Colors
        </h3>
        <div className="text-sm text-violet-700 space-y-2">
          <p>
            <strong>Recommended:</strong> Use Tailwind classes for consistent
            theming
          </p>
          <p>
            <strong>Example:</strong>{" "}
            <code className="bg-violet-100 px-1 rounded">
              className="text-violet-600"
            </code>{" "}
            instead of{" "}
            <code className="bg-violet-100 px-1 rounded">color="#8B5CF6"</code>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-slate-800">Violet (Primary)</h4>
        <div className="flex items-center gap-4">
          {[
            { shade: "violet-400", label: "Light" },
            { shade: "violet-500", label: "Medium" },
            { shade: "violet-600", label: "Default" },
            { shade: "violet-700", label: "Dark" },
          ].map(({ shade, label }) => (
            <div key={shade} className="flex flex-col items-center gap-2">
              <CheckmarkIcon size="xl" className={`text-${shade}`} />
              <span className="text-xs text-gray-600">{label}</span>
              <span className="text-xs text-gray-400 font-mono">{shade}</span>
            </div>
          ))}
        </div>

        <h4 className="font-medium text-slate-800 mt-6">Pink (Accent)</h4>
        <div className="flex items-center gap-4">
          {[
            { shade: "pink-400", label: "Light" },
            { shade: "pink-500", label: "Medium" },
            { shade: "pink-600", label: "Default" },
            { shade: "pink-700", label: "Dark" },
          ].map(({ shade, label }) => (
            <div key={shade} className="flex flex-col items-center gap-2">
              <LocationIcon size="xl" className={`text-${shade}`} />
              <span className="text-xs text-gray-600">{label}</span>
              <span className="text-xs text-gray-400 font-mono">{shade}</span>
            </div>
          ))}
        </div>

        <h4 className="font-medium text-slate-800 mt-6">Slate (Neutral)</h4>
        <div className="flex items-center gap-4">
          {[
            { shade: "slate-500", label: "Light" },
            { shade: "slate-600", label: "Medium" },
            { shade: "slate-700", label: "Default" },
            { shade: "slate-800", label: "Dark" },
          ].map(({ shade, label }) => (
            <div key={shade} className="flex flex-col items-center gap-2">
              <EditIcon size="xl" className={`text-${shade}`} />
              <span className="text-xs text-gray-600">{label}</span>
              <span className="text-xs text-gray-400 font-mono">{shade}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
