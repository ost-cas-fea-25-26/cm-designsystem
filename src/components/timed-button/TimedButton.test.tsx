import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Share } from "../icons/generated";
import { TimedButton } from "./TimedButton";

describe("TimedButton", () => {
  test("should render icon and label", async () => {
    // Arrange
    render(
      <TimedButton
        onClick={function (): void {}}
        icon={Share}
        label="Copy Link"
        labelActive="Link Copied"
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeVisible();
    expect(button).toHaveTextContent("Copy Link");

    // Icon prüfen
    expect(screen.getByText("Share")).toBeInTheDocument();
  });

  test("renders initial state and toggles correctly", async () => {
    // Arrange
    const onClick = vi.fn();
    render(
      <TimedButton
        onClick={onClick}
        icon={Share}
        label="Copy Link"
        labelActive="Link Copied"
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeVisible();

    // Initial state with Likes
    expect(button).toHaveTextContent("Copy Link");
    expect(screen.getByText("Share")).toBeInTheDocument();

    // Simulate click
    fireEvent.click(button);

    // Immediate state after click: "Liked" label + HeartFilled
    expect(button).toHaveTextContent("Link Copied");
    expect(screen.getByText("Share")).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();

    // Wait for animation + likes count update (1s delay + 350ms animation)
    await waitFor(
      () => {
        expect(button).toHaveTextContent("Copy Link");
      },
      { timeout: 1500 }
    );
  });
});
