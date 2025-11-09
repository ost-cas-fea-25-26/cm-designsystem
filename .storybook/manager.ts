import { addons } from "storybook/internal/manager-api";
import { create } from "storybook/internal/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Mumble Design System",
    brandUrl: "https://github.com/ost-cas-fea-25-26/cm-designsystem",
    brandImage: "/logo-inline-gradient.svg",
    brandTarget: "_self",
  }),
});
