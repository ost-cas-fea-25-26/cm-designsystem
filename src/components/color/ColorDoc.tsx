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
        className={`w-[125px] h-[125px] rounded-lg flex justify-center items-center bg-${getCssVariableSuffix(colorName, colorIntensity)}`}
      >
        <span className="bg-white rounded-lg p-1">{`${getCssVariableSuffix(colorName, colorIntensity)}`}</span>
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
