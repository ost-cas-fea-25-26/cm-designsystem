import { Form } from "@radix-ui/react-form";
import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Button, FileUpload, Heading, Modal, Textarea } from "../../components";
import {
  Cancel,
  Checkmark,
  Send,
  Upload,
} from "../../components/icons/generated";
import { PostBase, type PostBaseProps } from "../post-base/PostBase";

const PostCreatorStyles = tv({
  slots: {
    content: ["flex", "flex-col", "gap-4", "w-full"],
    title: ["text-slate-900"],
    input: ["w-full", "h-40"],
    action: ["flex", "gap-4"],
  },
});

type PostCreatorVariants = VariantProps<typeof PostCreatorStyles>;

interface PostCreatorProps
  extends PostCreatorVariants, Omit<PostBaseProps, "children"> {
  /**
   * Callback fired when the "Send" button is clicked.
   *   Receives the textarea text and the optionally uploaded file.
   */
  onSendClick: (text: string, file: File | null) => void;
}

/**
 * PostCreator component
 *
 * Renders a post creation component.
 */
export const PostCreator: React.FC<PostCreatorProps> = (
  props: PostCreatorProps
) => {
  const { content, title, input, action } = PostCreatorStyles(props);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");

  return (
    <>
      <PostBase src={props.src} onAvatarClick={props.onAvatarClick}>
        <Form className="w-full">
          <div className={content()}>
            <Heading size="4" as="h4" className={title()}>
              Hey, what's up?
            </Heading>
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
      </PostBase>

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
