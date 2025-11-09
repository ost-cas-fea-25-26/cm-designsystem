import { tv, type VariantProps } from "tailwind-variants";
import * as RadixForm from "@radix-ui/react-form";
import type { IconBaseProps } from "../icons/IconBase";
import { Mumble } from "../icons/generated";
import { Label } from "../typography/Label";
import { Placeholder } from "../typography/Placeholder";

const inputStyles = tv({
  slots: {
    base: [],
    label: [],
    controlContainer: [],
    control: ["border", "border-slate-200", "bg-slate-50", "rounded-lg"],
    message: [],
  },
  variants: {},
});

type InputVariants = VariantProps<typeof inputStyles>;

interface InputProps extends InputVariants {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  isRequired?: boolean;
  children: React.ReactElement<IconBaseProps>;
  onChange: (value: string) => void;
}

export const Input = ({
  type = "text",
  isRequired = false,
  ...props
}: InputProps) => {
  const { base, label, controlContainer, control, message } =
    inputStyles(props);
  return (
    <RadixForm.Field name={props.name} className={base(props)}>
      {/* Label */}
      <RadixForm.Label className={label(props)}>
        <Label size="md">{props.label}</Label>
      </RadixForm.Label>

      {/* Control */}
      <RadixForm.Control asChild>
        <div className={controlContainer(props)}>
          <input
            className={control(props)}
            type={type}
            required={isRequired}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(e.target.value)}
          ></input>
          {props.children}
        </div>
      </RadixForm.Control>

      {/* Validation Messages */}
      <div className={message(props)}>
        {isRequired && (
          <RadixForm.Message match="valueMissing">
            {`${props.name} is required`}
          </RadixForm.Message>
        )}
        <RadixForm.Message match="typeMismatch">
          {`${props.name} is invalid`}
        </RadixForm.Message>
      </div>
    </RadixForm.Field>
  );
};

export const Form = () => {
  return (
    <RadixForm.Root>
      <Input
        label="Enter Email"
        name="email"
        isRequired={true}
        placeholder="hans.muster@email.com"
        onChange={() => {}}
      >
        <Mumble />
      </Input>
    </RadixForm.Root>
  );
};
