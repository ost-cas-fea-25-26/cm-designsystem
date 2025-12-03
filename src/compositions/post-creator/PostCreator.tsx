import { Form } from "@radix-ui/react-form";
import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Button, FileUpload, Heading, Modal, Textarea } from "../../components";
import { Avatar } from "../../components/avatar/Avatar";
import {
  Cancel,
  Checkmark,
  Send,
  Upload,
} from "../../components/icons/generated";

const PostCreatorStyles = tv({
  slots: {
    base: ["bg-white", "rounded-2xl", "pl-12", "pr-12", "pt-8", "pb-8", "flex"],
    avatar: ["absolute", "-left-5", "top-6"],
    creator: ["flex", "flex-col", "gap-4"],
    title: ["text-black"],
    input: ["w-146", "h-40"],
    action: ["flex", "gap-4"],
  },
});

type PostCreatorVariants = VariantProps<typeof PostCreatorStyles>;

interface PostCreatorProps extends PostCreatorVariants {
  /** Avatar image URL */
  src: string;

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
 * PostCreator component
 *
 * Renders a post creation component.
 */
export const PostCreator: React.FC<PostCreatorProps> = (
  props: PostCreatorProps
) => {
  const { base, avatar, creator, title, input, action } =
    PostCreatorStyles(props);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");

  return (
    <>
      <Form>
        <div className={base()}>
          <div className={avatar()}>
            <Avatar
              alt="Profile"
              size="md"
              src={props.src}
              onAvatarClick={props.onAvatarClick}
            />
          </div>
          <div className={creator()}>
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
