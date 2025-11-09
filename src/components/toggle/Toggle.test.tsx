import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { Toggle } from "./Toggle";

describe("LikeToggle", () => {
  test("should render icon and label", async () => {
    // Arrange
    render(
      <Toggle ariaLabel="Comment" labelText="Comment" onToggle={() => {}} />
    );

    const button = screen.getByRole("button");
    expect(button).toBeVisible();
    expect(button).toHaveTextContent("Comment");

    // Icon prüfen
    expect(screen.getByLabelText("ReplyOutline")).toBeInTheDocument();
  });

  test("when clicked, onToggle should return flag", async () => {
    // Arrange
    const onToggleMock = vi.fn();
    render(
      <Toggle ariaLabel="Comment" labelText="Comment" onToggle={onToggleMock} />
    );
    const button = screen.getByRole("button");

    // Act
    await userEvent.click(button);

    // Assert
    expect(onToggleMock).toHaveBeenCalledWith(true);
  });

  test("when toggled and clicked, onToggle should return false", async () => {
    // Arrange
    const onToggleMock = vi.fn();
    render(
      <Toggle
        ariaLabel="Comment"
        labelText="Comment"
        pressed
        onToggle={onToggleMock}
      />
    );
    const button = screen.getByRole("button");

    // Act
    await userEvent.click(button);

    // Assert
    expect(onToggleMock).toHaveBeenCalledWith(false);
  });

  test("should display ReplyFilled icon when pressed is true", async () => {
    // Arrange
    render(
      <Toggle
        ariaLabel="Comment"
        labelText="Comment"
        pressed
        onToggle={() => {}}
      />
    );

    // Assert
    expect(screen.getByLabelText("ReplyFilled")).toBeInTheDocument();
    expect(screen.queryByLabelText("ReplyOutline")).not.toBeInTheDocument();
  });

  test("should display ReplyOutline icon when pressed is false", async () => {
    // Arrange
    render(
      <Toggle
        ariaLabel="Comment"
        labelText="Comment"
        pressed={false}
        onToggle={() => {}}
      />
    );

    // Assert
    expect(screen.getByLabelText("ReplyOutline")).toBeInTheDocument();
    expect(screen.queryByLabelText("ReplyFilled")).not.toBeInTheDocument();
  });

  test("should use custom ariaLabel", async () => {
    // Arrange
    render(
      <Toggle
        ariaLabel="Custom Comment Label"
        labelText="Comment"
        onToggle={() => {}}
      />
    );

    // Assert
    const button = screen.getByRole("button", {
      name: "Custom Comment Label",
    });
    expect(button).toBeInTheDocument();
  });

  test("should display custom labelText", async () => {
    // Arrange
    render(
      <Toggle
        ariaLabel="Comment"
        labelText="Custom Label Text"
        onToggle={() => {}}
      />
    );

    // Assert
    expect(screen.getByText("Custom Label Text")).toBeInTheDocument();
  });

  test("should be keyboard accessible", async () => {
    // Arrange
    const onToggleMock = vi.fn();
    render(
      <Toggle ariaLabel="Comment" labelText="Comment" onToggle={onToggleMock} />
    );
    const button = screen.getByRole("button");

    // Act
    button.focus();
    expect(button).toHaveFocus();
    await userEvent.keyboard("{Enter}");

    // Assert
    expect(onToggleMock).toHaveBeenCalledWith(true);
  });

  test("should toggle multiple times correctly", async () => {
    // Arrange
    const onToggleMock = vi.fn();
    const { rerender } = render(
      <Toggle ariaLabel="Comment" labelText="Comment" onToggle={onToggleMock} />
    );
    const button = screen.getByRole("button");

    // Act - First click
    await userEvent.click(button);
    expect(onToggleMock).toHaveBeenCalledWith(true);

    // Rerender with pressed state
    rerender(
      <Toggle
        ariaLabel="Comment"
        labelText="Comment"
        pressed
        onToggle={onToggleMock}
      />
    );

    // Act - Second click
    await userEvent.click(button);

    // Assert
    expect(onToggleMock).toHaveBeenCalledWith(false);
    expect(onToggleMock).toHaveBeenCalledTimes(2);
  });
});
