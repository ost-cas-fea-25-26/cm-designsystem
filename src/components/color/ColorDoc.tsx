export const ColorDoc = ({
  colorName,
  colorIntensity,
}: {
  colorName: string;
  colorIntensity: number;
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={`flex h-31.25 w-31.25 items-center justify-center rounded-lg bg-${getCssVariableSuffix(colorName, colorIntensity)}`}
      >
        <span className="rounded-lg bg-white p-1">{`${getCssVariableSuffix(colorName, colorIntensity)}`}</span>
      </div>
      <div className="flex flex-col items-center">
        <span>{`--color-${getCssVariableSuffix(colorName, colorIntensity)}`}</span>
        <span>{`.text-${getCssVariableSuffix(colorName, colorIntensity)}`}</span>
        <span>{`.bg-${getCssVariableSuffix(colorName, colorIntensity)}`}</span>
      </div>
    </div>
  );
};

const getCssVariableSuffix = (colorName: string, colorIntensity?: number) => {
  if (colorIntensity == null) {
    return colorName;
  }
  return `${colorName}-${colorIntensity}`;
};
