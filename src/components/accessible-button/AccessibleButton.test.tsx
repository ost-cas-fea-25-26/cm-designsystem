import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { AccessibleButton } from "./AccessibleButton";

describe("Button", () => {
  test("should render button", async () => {
    // Arrange
    render(<AccessibleButton onClick={vi.fn()}>button</AccessibleButton>);

    // Assert
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("button");
  });

  test("should render button with ariaLabel", async () => {
    // Arrange
    render(
      <AccessibleButton ariaLabel="This is a button" onClick={vi.fn()}>
        button
      </AccessibleButton>
    );

    // Assert
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("button");
    expect(screen.queryByLabelText("This is a button")).toBeInTheDocument();
  });

  test("should call onClick when clicked", () => {
    // Arrange
    const onClick = vi.fn();
    render(<AccessibleButton onClick={onClick}>button</AccessibleButton>);

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
