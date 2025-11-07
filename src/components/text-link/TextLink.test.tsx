import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextLink } from "./TextLink";

describe("Text Link", () => {
  test("should render three tabs", async () => {
    // Arrange
    render(<TextLink href="https://example.com">Example Link</TextLink>);

    // Assert
    const link = screen.getByRole("link");
    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "https://example.com");
  });
});
