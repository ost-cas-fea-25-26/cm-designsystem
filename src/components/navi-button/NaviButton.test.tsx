import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Mumble } from "../icons/generated";
import { NaviButton } from "./NaviButton";

describe("NaviButton", () => {
  test("should render button with icon", async () => {
    // Arrange
    render(
      <NaviButton onClick={vi.fn()} icon={Mumble}>
        button
      </NaviButton>
    );

    // Assert
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("button");
    expect(screen.getByText("Mumble")).toBeVisible();
  });

  test("should call onClick when clicked", () => {
    // Arrange
    const onClick = vi.fn();
    render(
      <NaviButton onClick={onClick} icon={Mumble}>
        button
      </NaviButton>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
