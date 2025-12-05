import { Form } from "@radix-ui/react-form";
import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Button, FileUpload, Modal, Textarea } from "../../components";
import {
  Cancel,
  Checkmark,
  Send,
  Upload,
} from "../../components/icons/generated";
import { UserInfo } from "../user-info/UserInfo";

const CommentCreatorStyles = tv({
  slots: {
    base: [
      "flex",
      "flex-col",
      "gap-4",
      "bg-white",
      "rounded-2xl",
      "pl-12",
      "pr-12",
      "pt-8",
      "pb-8",
    ],
    input: ["w-146", "h-40"],
    action: ["flex", "gap-4"],
  },
});

type CommentCreatorVariants = VariantProps<typeof CommentCreatorStyles>;

interface CommentCreatorProps extends CommentCreatorVariants {
  /** Avatar image URL */
  src: string;

  /** Display name of the user */
  displayName: string;

  /** Username of the user */
  userName: string;

  /**
   * Callback fired when the "Send" button is clicked.
   *   Receives the textarea text and the optionally uploaded file.
   */
  onSendClick: (text: string, file: File | null) => void;

  /**
   *  Triggered when the avatar is clicked.
   */
  onAvatarClick: () => void;
}

/**
 * CommentCreator component
 *
 * Renders a comment creation component.
 */
export const CommentCreator: React.FC<CommentCreatorProps> = (
  props: CommentCreatorProps
) => {
  const { base, input, action } = CommentCreatorStyles(props);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");

  return (
    <>
      <Form>
        <div className={base()}>
          <UserInfo
            displayName={props.displayName}
            onClick={props.onAvatarClick}
            size="sm"
            src={props.src}
            userName={props.userName}
          />
          <div className={input()}>
            <Textarea
              name="post"
              placeholder="Your opinion matters!"
              onChange={setText}
            />
          </div>
          <div className={action()}>
            <Button
              intent="primary"
              size="md"
              icon={Upload}
              onClick={() => setOpen(true)}
            >
              Picture upload
            </Button>
            <Button
              intent="secondary"
              size="md"
              icon={Send}
              onClick={() => props.onSendClick(text, file)}
            >
              Send
            </Button>
          </div>
        </div>
      </Form>

      <Modal open={open} onOpenChange={setOpen} title="Picture upload">
        <Modal.Body>
          <FileUpload onFileSelect={setFile} />
        </Modal.Body>
        <Modal.Actions>
          <Button
            intent="primary"
            size="md"
            icon={Cancel}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            intent="secondary"
            size="md"
            icon={Checkmark}
            onClick={() => setOpen(false)}
          >
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};
