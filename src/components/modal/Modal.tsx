import * as RadixDialog from "@radix-ui/react-dialog";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Cancel } from "../icons/generated";
import { Heading } from "../typography/Heading";

const modalStyles = tv({
  slots: {
    overlay: ["fixed", "inset-0", "bg-black/20"],
    content: [
      "fixed",
      "top-1/2",
      "left-1/2",
      "w-123",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "rounded-2xl",
      "bg-white",
    ],
    title: [
      "flex",
      "justify-between",
      "rounded-t-2xl",
      "bg-violet-600",
      "pt-6",
      "pr-8",
      "pb-6",
      "pl-8",
      "text-white",
    ],
    container: ["flex", "flex-col", "items-center", "gap-12", "p-8"],
    actions: ["flex", "items-center", "gap-4", "w-full"],
  },
});

type ModalVariants = VariantProps<typeof modalStyles>;

interface ModalProps extends ModalVariants {
  title: string;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> & {
  Body: typeof ModalBody;
  Actions: typeof ModalActions;
} = (props) => {
  let modalBody: React.ReactElement | null = null;
  let modalActions: React.ReactElement | null = null;

  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;

    switch (child.type) {
      case ModalBody:
        modalBody = child;
        break;
      case ModalActions:
        modalActions = child;
        break;
    }
  });

  const { overlay, content, title, container, actions } = modalStyles(props);

  return (
    <RadixDialog.Root open={props.open} onOpenChange={props.onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={overlay()} />
        <RadixDialog.Content className={content()}>
          <RadixDialog.Title className={title()}>
            <Heading as="span" size="3">
              {props.title}
            </Heading>
            <RadixDialog.Close>
              <Cancel />
            </RadixDialog.Close>
          </RadixDialog.Title>

          {/* Content */}
          <div className={container()}>
            {/* Body */}
            {modalBody}
            {/* Footer */}
            <div className={actions()}>{modalActions}</div>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

ModalBody.displayName = "ModalBody";
export function ModalBody({ children }: { children: React.ReactNode }) {
  return children;
}

ModalActions.displayName = "ModalActions";
export function ModalActions({ children }: { children: React.ReactNode }) {
  return children;
}

Modal.Body = ModalBody;
Modal.Actions = ModalActions;
