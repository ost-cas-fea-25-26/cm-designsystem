import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { LikeToggle } from "./LikeToggle";

describe("LikeToggle", () => {
  test("should render icon and label", async () => {
    // Arrange
    render(
      <LikeToggle ariaLabel="Like this" likes={3} onLikeChange={() => {}} />
    );

    const button = screen.getByRole("button");
    expect(button).toBeVisible();
    expect(button).toHaveTextContent("3 Likes");

    // Icon prüfen
    expect(screen.getByLabelText("HeartOutline")).toBeInTheDocument();
  });

  test("renders initial state and toggles correctly", async () => {
    // Arrange
    const onLikeChange = vi.fn();
    render(
      <LikeToggle ariaLabel="Like this" likes={3} onLikeChange={onLikeChange} />
    );

    const button = screen.getByRole("button");
    expect(button).toBeVisible();

    // Initial state with Likes
    expect(button).toHaveTextContent("3 Likes");
    expect(screen.getByLabelText("HeartOutline")).toBeInTheDocument();

    // Simulate click
    fireEvent.click(button);

    // Immediate state after click: "Liked" label + HeartFilled
    expect(button).toHaveTextContent("Liked");
    expect(screen.getByLabelText("HeartFilled")).toBeInTheDocument();
    expect(onLikeChange).toHaveBeenCalledWith(true);

    // Wait for animation + likes count update (2s delay + 300ms animation)
    await waitFor(
      () => {
        expect(button).toHaveTextContent("4 Likes");
      },
      { timeout: 2500 }
    );
  });
});
