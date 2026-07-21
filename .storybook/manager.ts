import { addons } from "storybook/internal/manager-api";
import { create } from "storybook/internal/theming";

// Set favicon
const link = (document.querySelector("link[rel*='icon']") ||
  document.createElement("link")) as HTMLLinkElement;
link.type = "image/svg+xml";
link.rel = "icon";
link.href = "./favicon.svg";
document.getElementsByTagName("head")[0].appendChild(link);

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Mumble Design System",
    brandUrl: "https://github.com/ost-cas-fea-25-26/cm-designsystem",
    brandImage: "./logo-inline-gradient.svg",
    brandTarget: "_self",
  }),
});
