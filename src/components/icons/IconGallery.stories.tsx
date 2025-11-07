import * as React from "react";
import * as Icons from "./generated";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Build a list of icon entries (component functions)
type IconComponent = React.ComponentType<React.ComponentProps<"svg">>;
const iconEntries: [string, IconComponent][] = Object.entries(Icons).filter(
  ([, val]) => typeof val === "function"
) as [string, IconComponent][];

// A simple gallery component
const Gallery: React.FC = () => (
  <div style={{ padding: 16 }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 16,
      }}
    >
      {iconEntries.map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <Icon aria-hidden />
          <div style={{ marginTop: 8 }}>{name}</div>
        </div>
      ))}
    </div>
  </div>
);

// Single icon preview component with controls
interface IconPreviewProps {
  icon: string;
  className?: string;
}
const IconPreview: React.FC<IconPreviewProps> = ({ icon, className }) => {
  const IconComponent = (Icons as Record<string, IconComponent>)[icon];
  if (!IconComponent) return <div>Unknown icon: {icon}</div>;
  return (
    <div
      style={{ padding: 32, display: "flex", gap: 24, alignItems: "center" }}
    >
      <IconComponent className={className} aria-hidden />
      <code style={{ fontSize: 12 }}>{`<${icon} />`}</code>
    </div>
  );
};

const iconNames = iconEntries.map(([name]) => name);

const meta: Meta = {
  title: "Icons/Gallery",
  parameters: { layout: "fullscreen" },
};
export default meta;

export const All: StoryObj<typeof meta> = { render: () => <Gallery /> };

export const Preview: StoryObj<typeof meta> = {
  render: (args) => <IconPreview {...(args as IconPreviewProps)} />,
  args: { icon: iconNames[0], className: "" },
  argTypes: {
    icon: {
      options: iconNames,
      control: { type: "select" },
    },
    className: { control: "text" },
  },
};
