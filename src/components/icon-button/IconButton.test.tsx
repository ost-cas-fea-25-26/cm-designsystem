import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Profile } from "../icons/generated";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  test("should render icon-button with icon", async () => {
    // Arrange
    render(
      <IconButton intent="primary" icon={Profile} onClick={vi.fn()}>
        button
      </IconButton>
    );

    // Assert
    expect(screen.getByRole("button")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("button");
    expect(screen.getByText("Profile")).toBeVisible();
  });

  test("should call onClick when clicked", () => {
    // Arrange
    const onClick = vi.fn();
    render(
      <IconButton intent="primary" icon={Profile} onClick={onClick}>
        button
      </IconButton>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
