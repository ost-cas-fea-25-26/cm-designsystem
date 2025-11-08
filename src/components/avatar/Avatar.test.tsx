import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Profile } from "../icons/generated";
import { Avatar } from "./Avatar";

describe("IconButton", () => {
  test("should render icon-button with icon", async () => {
    // Arrange
    render(
      <Avatar intent="primary" label="button" onClick={vi.fn()}>
        <Profile />
      </Avatar>
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
      <Avatar intent="primary" label="button" onClick={onClick}>
        <Profile />
      </Avatar>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
