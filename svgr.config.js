export default {
  typescript: true,
  prettier: false,
  jsxRuntime: "automatic",
  jsx: {
    babelConfig: {
      plugins: [
        [
          "@svgr/babel-plugin-remove-jsx-attribute",
          {
            elements: ["svg"],
            attributes: ["width", "height"],
          },
        ],
      ],
    },
  },
  dimensions: false,
  svgProps: {
    width: "16",
    height: "16",
    className: "size-4 text-slate-600",
  },
  replaceAttrValues: {
    "#475569": "currentColor",
  },
  template: (variables, { tpl }) => {
    // Remove "Svg" prefix from component name
    const componentName = variables.componentName.replace(/^Svg/, "");

    return tpl`
${variables.imports};

${variables.interfaces};

const ${componentName} = (${variables.props}) => (
  ${variables.jsx}
);

export default ${componentName};
`;
  },
};
