import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Cancel, Checkmark } from "../icons/generated";
import { Button } from "../button/Button";
import { Modal } from "./Modal";

describe("Modal", () => {
  test("should open modal", async () => {
    // Arrange
    render(
      <div>
        <Modal open={true} onOpenChange={() => {}} title="Modal">
          <Modal.Body>Body</Modal.Body>
          <Modal.Actions>
            <Button intent="primary" size="md" label="Exit" onClick={() => {}}>
              <Cancel />
            </Button>
            <Button
              intent="secondary"
              size="md"
              label="Save"
              onClick={() => {}}
            >
              <Checkmark />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );

    // Assert
    expect(screen.getByRole("dialog")).toBeVisible();
    expect(screen.getByText(/body/i)).toBeVisible();
    expect(screen.getByText(/modal/i)).toBeVisible();
    expect(screen.getByLabelText(/exit/i)).toBeVisible();
    expect(screen.getByLabelText(/save/i)).toBeVisible();
  });

  test("should open modal", async () => {
    // Arrange
    render(
      <div>
        <Modal open={false} onOpenChange={() => {}} title="Modal">
          <Modal.Body>Body</Modal.Body>
          <Modal.Actions>
            <Button intent="primary" size="md" label="Exit" onClick={() => {}}>
              <Cancel />
            </Button>
            <Button
              intent="secondary"
              size="md"
              label="Save"
              onClick={() => {}}
            >
              <Checkmark />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );

    // Assert
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
