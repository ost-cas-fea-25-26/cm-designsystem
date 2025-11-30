import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Mumble } from "../icons/generated";
import { Button } from "./Button";

describe("Button", () => {
  test("should render button with icon", async () => {
    // Arrange
    render(
      <Button intent="primary" size="md" icon={Mumble} onClick={vi.fn()}>
        button
      </Button>
    );

    // Assert
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("button");
    expect(screen.getByText("Mumble")).toBeVisible();
  });

  test("should render button without icon", async () => {
    // Arrange
    render(
      <Button intent="primary" size="md" onClick={vi.fn()}>
        button
      </Button>
    );

    // Assert
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("button");
    expect(screen.queryByText("Mumble")).not.toBeInTheDocument();
  });

  test("should call onClick when clicked", () => {
    // Arrange
    const onClick = vi.fn();
    render(
      <Button intent="primary" size="md" icon={Mumble} onClick={onClick}>
        button
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
