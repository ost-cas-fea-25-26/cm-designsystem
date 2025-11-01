import { Label } from "../typography/Label";

export const Tabs = ({
  textTabLeft,
  textTabRight,
  active = "left",
}: {
  textTabLeft: string;
  textTabRight: string;
  active?: "left" | "right";
}) => {
  const leftIsActive = active === "left";
  const rightIsActive = active === "right";

  return (
    <div
      className="bg-slate-200 rounded-lg flex flex-direction-col flex-basis-auto p-1"
      role="tablist"
      aria-label="Tabs"
    >
      <div
        className={leftIsActive ? "bg-white rounded-md p-3" : "rounded-xs p-3"}
        role="tab"
        aria-selected={leftIsActive}
        aria-controls="tab-panel-left"
        id="tab-left"
      >
        <Label size="lg" as="span" tone={leftIsActive ? "accent" : "muted"}>
          {textTabLeft}
        </Label>
      </div>
      <div
        className={rightIsActive ? "bg-white rounded-md p-3" : "rounded-xs p-3"}
        role="tab"
        aria-selected={rightIsActive}
        aria-controls="tab-panel-right"
        id="tab-right"
      >
        <Label size="lg" as="span" tone={rightIsActive ? "accent" : "muted"}>
          {textTabRight}
        </Label>
      </div>
    </div>
  );
};
