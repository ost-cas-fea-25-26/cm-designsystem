import * as RadixForm from "@radix-ui/react-form";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const formStyles = tv({
  slots: {
    base: ["gap-16", "flex", "flex-col"],
    fields: ["gap-4", "flex", "flex-col"],
  },
});

type FormVariants = VariantProps<typeof formStyles>;

interface FormProps extends FormVariants {
  label: string;
  children?: React.ReactNode;
}

export const Form: React.FC<FormProps> & {
  Fields: typeof FormFields;
  Action: typeof FormAction;
} = (props) => {
  const { base, fields } = formStyles(props);
  let fieldElements: React.ReactElement | null = null;
  let actionElement: React.ReactElement | null = null;

  React.Children.forEach(props.children, (child) => {
    if (!React.isValidElement(child)) return;

    switch (child.type) {
      case FormFields:
        fieldElements = child;
        break;
      case FormAction:
        actionElement = child;
        break;
    }
  });

  return (
    <RadixForm.Root className={base()}>
      <div className={fields()}>{fieldElements}</div>

      <RadixForm.Submit asChild>{actionElement}</RadixForm.Submit>
    </RadixForm.Root>
  );
};

FormFields.displayName = "FormField";
export function FormFields({ children }: { children: React.ReactNode }) {
  return children;
}

FormAction.displayName = "ModalActions";
export function FormAction({ children }: { children: React.ReactElement }) {
  return children;
}

Form.Fields = FormFields;
Form.Action = FormAction;
