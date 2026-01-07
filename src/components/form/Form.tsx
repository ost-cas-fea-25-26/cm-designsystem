import * as RadixForm from "@radix-ui/react-form";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const formStyles = tv({
  slots: {
    base: ["gap-16", "flex", "flex-col", "w-full"],
    fields: ["gap-4", "flex", "flex-col"],
  },
});

type FormVariants = VariantProps<typeof formStyles>;

interface FormProps extends FormVariants {
  /**
   * Form fields
   */
  fields: React.ReactNode;
  /**
   * Submit button
   */
  action: React.ReactElement;
  /**
   * Submit handler
   */
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({
  fields,
  action,
  onSubmit,
  ...variantProps
}) => {
  const { base, fields: fieldsClass } = formStyles(variantProps);

  return (
    <RadixForm.Root className={base()} onSubmit={onSubmit}>
      <div className={fieldsClass()}>{fields}</div>
      <RadixForm.Submit asChild>{action}</RadixForm.Submit>
    </RadixForm.Root>
  );
};
