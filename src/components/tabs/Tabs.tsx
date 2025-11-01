import { Label } from "../typography/Label";

export const Tabs = () => {
  return (
    <div className="bg-slate-200 rounded-lg flex flex-direction-col flex-basis-auto p-1 ">
      <div className="bg-white rounded-md p-3 ">
        <Label size={"lg"} as={"label"} tone="accent">
          Deine Mumbles
        </Label>
      </div>
      <div className=" rounded-xs p-3 ">
        <Label size={"lg"} as={"label"} tone={"muted"}>
          Deine Links
        </Label>
      </div>
    </div>
  );
};
