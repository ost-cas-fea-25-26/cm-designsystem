import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Mumble } from "../icons/generated";
import { RoundButton } from "./RoundButton";

describe("RoundButton", () => {
  test("should render button with icon", async () => {
    // Arrange
    render(
      <RoundButton onClick={vi.fn()} ariaLabel="Mumble">
        <Mumble />
      </RoundButton>
    );

    // Assert
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByText("Mumble")).toBeVisible();
  });

  test("should call onChange when second tab clicked", () => {
    // Arrange
    const onClick = vi.fn();
    render(
      <RoundButton onClick={onClick} ariaLabel="Mumble">
        <Mumble />
      </RoundButton>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
