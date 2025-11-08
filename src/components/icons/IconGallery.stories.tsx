import * as React from "react";
import * as Icons from "./generated";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Build a list of icon entries (component functions)
type IconComponent = React.ComponentType<React.ComponentProps<"svg">>;
let iconEntries: [string, IconComponent][] = Object.entries(Icons).filter(
  ([, val]) => typeof val === "function"
) as [string, IconComponent][];
// Sort alphabetically by component name for stable gallery ordering
iconEntries = iconEntries.sort(([a], [b]) => a.localeCompare(b));

// A simple gallery component
const Gallery: React.FC = () => (
  <div style={{ padding: 16 }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", // Etwas breiter für den Code
        gap: 16,
        padding: 4,
        // *** HINZUFÜGEN: Um 100% Höhe für die Kinder zu ermöglichen ***
        alignItems: "stretch",
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
            border: "1px solid #eee", // Optionale visuelle Trennung
            padding: 8,
            borderRadius: 4,
            backgroundColor: "#fafafa",
            // *** GEÄNDERT: Maximale Höhe nutzen und Inhalt verteilen ***
            height: "100%", // Wichtig, damit Flexbox den Platz verteilen kann
            justifyContent: "space-between", // Icon oben, Code unten
          }}
        >
          {/* Wrapper für das Icon zur vertikalen Zentrierung */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1, // Nimmt den gesamten verfügbaren vertikalen Raum ein
              width: "100%", // Zentrierung auch horizontal in diesem Bereich
            }}
          >
            <Icon aria-hidden style={{ width: 24, height: 24 }} />
          </div>

          {/* Hinzugefügter kopierbarer Code-Block (unten fixiert) */}
          <div
            style={{
              marginBlock: 8,
              gap: 4,
              width: "100%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // marginBlock: 8 bleibt hier, um einen Abstand zum Icon zu schaffen
            }}
          >
            <code>{`<${name} />`}</code>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Single icon preview component with controls (unverändert gelassen)
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
