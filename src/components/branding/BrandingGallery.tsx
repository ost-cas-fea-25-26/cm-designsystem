import appIconGradient from "./app-icon-gradient.svg";
import appIconWhite from "./app-icon-white.svg";
import hoverLogoDefault from "./hover-logo-default.svg";
import hoverLogoHovered from "./hover-logo-hovered.svg";
import logoInlineGradient from "./logo-inline-gradient.svg";
import logoInlineViolet from "./logo-inline-violet.svg";
import logoInlineWhite from "./logo-inline-white.svg";
import logoStackedGradient from "./logo-stacked-gradient.svg";
import logoStackedViolet from "./logo-stacked-violet.svg";
import logoStackedWhite from "./logo-stacked-white.svg";
import superzeichen from "./superzeichen.svg";

const brandingAssets = {
  "App Icons": [
    {
      name: "App Icon Gradient",
      src: appIconGradient,
      width: 64,
      height: 64,
      filename: "app-icon-gradient.svg",
    },
    {
      name: "App Icon White",
      src: appIconWhite,
      width: 64,
      height: 64,
      filename: "app-icon-white.svg",
    },
  ],

  Logos: [
    {
      name: "Logo Inline Gradient",
      src: logoInlineGradient,
      width: 335,
      height: 64,
      filename: "logo-inline-gradient.svg",
    },
    {
      name: "Logo Inline Violet",
      src: logoInlineViolet,
      width: 335,
      height: 64,
      filename: "logo-inline-violet.svg",
    },
    {
      name: "Logo Inline White",
      src: logoInlineWhite,
      width: 335,
      height: 64,
      filename: "logo-inline-white.svg",
    },
    {
      name: "Logo Stacked Gradient",
      src: logoStackedGradient,
      width: 210,
      height: 80,
      filename: "logo-stacked-gradient.svg",
    },
    {
      name: "Logo Stacked Violet",
      src: logoStackedViolet,
      width: 210,
      height: 80,
      filename: "logo-stacked-violet.svg",
    },
    {
      name: "Logo Stacked White",
      src: logoStackedWhite,
      width: 210,
      height: 80,
      filename: "logo-stacked-white.svg",
    },
  ],
  "Hover Logo": [
    {
      name: "Hover Logo Default",
      src: hoverLogoDefault,
      width: 64,
      height: 64,
      filename: "hover-logo-default.svg",
    },
    {
      name: "Hover Logo Hovered",
      src: hoverLogoHovered,
      width: 64,
      height: 64,
      filename: "hover-logo-hovered.svg",
    },
  ],

  Superzeichen: [
    {
      name: "Superzeichen",
      src: superzeichen,
      width: 64,
      height: 64,
      filename: "superzeichen.svg",
    },
  ],
};

export const BrandingGallery: React.FC = () => (
  <div>
    {Object.entries(brandingAssets).map(([category, assets]) => (
      <div key={category} style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 24,
            marginTop: 0,
          }}
        >
          {category}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 32,
            padding: 4,
          }}
        >
          {assets.map(({ name, src, width, height, filename }) => {
            const isWhiteVariant =
              filename.includes("white") || filename.includes("hover");
            return (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid #eee",
                  padding: 24,
                  borderRadius: 8,
                  backgroundColor: "#fafafa",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 120,
                    width: "100%",
                    backgroundColor: isWhiteVariant ? "#7c3aed" : "transparent",
                    borderRadius: 4,
                    padding: isWhiteVariant ? 16 : 0,
                  }}
                >
                  <img
                    src={src}
                    alt={name}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>{name}</div>
                  <code
                    style={{
                      fontSize: 11,
                      color: "#666",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {filename}
                  </code>
                  <code
                    style={{
                      fontSize: 11,
                      color: "#666",
                      display: "block",
                    }}
                  >
                    {width} × {height}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);
