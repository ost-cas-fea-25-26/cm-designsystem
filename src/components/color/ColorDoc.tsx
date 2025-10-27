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
        className={`w-[125px] h-[125px] bg-${colorName}-${colorIntensity} flex justify-center items-center`}
      >
        <span>{`${colorName}-${colorIntensity}`}</span>
      </div>
      <div className="flex flex-col">
        <span>{`--color-${colorName}-${colorIntensity}`}</span>
        <span>{`.text-${colorName}-${colorIntensity}`}</span>
        <span>{`.bg-${colorName}-${colorIntensity}`}</span>
      </div>
    </div>
  );
};
