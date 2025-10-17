/// <reference types="vite/client" />

// SVG imports as React components
declare module "*.svg?react" {
  import { FunctionComponent, SVGProps } from "react";
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
