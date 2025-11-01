import { Label, type LabelTone } from "../typography/Label";

/**
 * Tabs (simple 2-tab variant)
 * variant controls how inactive tabs are styled:
 * - 'default': active = accent, inactive = default
 * - 'muted':   active = accent, inactive = muted
 *
 * Deprecated: inactiveTone (use variant instead). If both are provided, inactiveTone wins for now.
 */

export const Tabs = ({
  textTabLeft,
  textTabRight,
  active = "left",
  variant = "default",
}: {
  textTabLeft: string;
  textTabRight: string;
  active?: "left" | "right";
  variant?: "default" | "muted";
}) => {
  const leftIsActive = active === "left";
  const rightIsActive = active === "right";

  // Determine the tone for inactive tabs, considering deprecated prop.
  const computedInactive: Extract<LabelTone, "muted" | "default"> =
    variant === "default" ? "default" : "muted";

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
        <Label
          size="lg"
          as="span"
          tone={leftIsActive ? "accent" : computedInactive}
        >
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
        <Label
          size="lg"
          as="span"
          tone={rightIsActive ? "accent" : computedInactive}
        >
          {textTabRight}
        </Label>
      </div>
    </div>
  );
};
