import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Button } from "../button/Button";
import { Cancel, Checkmark } from "../icons/generated";
import { Modal } from "./Modal";

describe("Modal", () => {
  test("should open modal", async () => {
    // Arrange
    render(
      <div>
        <Modal open onOpenChange={() => {}} title="Modal">
          <Modal.Body>Body</Modal.Body>
          <Modal.Actions>
            <Button intent="primary" size="md" onClick={() => {}} icon={Cancel}>
              Exit
            </Button>
            <Button
              intent="secondary"
              size="md"
              onClick={() => {}}
              icon={Checkmark}
            >
              Save
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );

    // Assert
    expect(screen.getByRole("dialog")).toBeVisible();
    expect(screen.getByText(/body/i)).toBeVisible();
    expect(screen.getByText(/modal/i)).toBeVisible();
    expect(screen.getByRole("button", { name: /exit/i })).toBeVisible();
    expect(screen.getByRole("button", { name: /save/i })).toBeVisible();
  });

  test("should open modal", async () => {
    // Arrange
    render(
      <div>
        <Modal open={false} onOpenChange={() => {}} title="Modal">
          <Modal.Body>Body</Modal.Body>
          <Modal.Actions>
            <Button intent="primary" size="md" onClick={() => {}} icon={Cancel}>
              Exit
            </Button>
            <Button
              intent="secondary"
              size="md"
              onClick={() => {}}
              icon={Checkmark}
            >
              Save
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );

    // Assert
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
