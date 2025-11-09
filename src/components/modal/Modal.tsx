import * as RadixDialog from "@radix-ui/react-dialog";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Heading } from "../typography/Heading";
import { Cancel, Checkmark } from "../icons/generated";
import { Button } from "../button/Button";

const modalStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-1"],
  },
  variants: {},
});

type ModalVariants = VariantProps<typeof modalStyles>;

interface ModalProps extends ModalVariants {
  title: string;
  children?: React.ReactNode;
}

ModalTrigger.displayName = "ModalTrigger";
export function ModalTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

ModalContent.displayName = "ModalContent";
export function ModalContent({ children }: { children: React.ReactNode }) {
  return children;
}

export const Modal: React.FC<ModalProps> & {
  Trigger: typeof ModalTrigger;
  Content: typeof ModalContent;
} = (props) => {
  let trigger: React.ReactElement | null = null;
  let content: React.ReactElement | null = null;

  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;

    switch (child.type) {
      case ModalTrigger:
        trigger = child;
        break;
      case ModalContent:
        content = child;
        break;
    }
  });

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger>Test</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 bg-black/20" />
        <RadixDialog.Content className="fixed top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white">
          <RadixDialog.Title className="flex justify-between rounded-t-2xl bg-violet-600 pt-6 pr-8 pb-6 pl-8 text-white">
            <Heading as="span" size="3">
              {props.title}
            </Heading>
            <RadixDialog.Close>
              <Cancel />
            </RadixDialog.Close>
          </RadixDialog.Title>

          {/* Content */}
          <div className="flex flex-col items-center gap-12 p-8">
            {/* Body */}
            <div>This is a Test Modal!!!</div>
            {/* Footer */}
            <div className="flex items-center gap-4">
              <RadixDialog.Close asChild>
                <Button
                  intent="primary"
                  size="md"
                  label="Abbrechen"
                  onClick={() => {}}
                >
                  <Cancel />
                </Button>
              </RadixDialog.Close>
              <RadixDialog.Close asChild>
                <Button
                  intent="secondary"
                  size="md"
                  label="Speichern"
                  onClick={() => {}}
                >
                  <Checkmark />
                </Button>
              </RadixDialog.Close>
            </div>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
