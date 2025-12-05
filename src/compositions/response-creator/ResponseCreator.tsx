import { Form } from "@radix-ui/react-form";
import { useRef, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Button, FileUpload, Modal, Textarea } from "../../components";
import {
  Cancel,
  Checkmark,
  Send,
  Upload,
} from "../../components/icons/generated";
import { PostBase } from "../post-base/PostBase";
import { UserInfo } from "../user-info/UserInfo";
import {
  type ImageUploadModalRef,
  ImageUploadModal,
} from "../image-upload-modal/ImageUploadModal";

const ResponseCreatorStyles = tv({
  slots: {
    content: ["flex", "flex-col", "gap-4", "w-full"],
    input: ["w-full", "h-40"],
    action: ["flex", "gap-4"],
  },
});

type ResponseCreatorVariants = VariantProps<typeof ResponseCreatorStyles>;

interface ResponseCreatorProps extends ResponseCreatorVariants {
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
 * ResponseCreator component
 *
 * Renders a Response creation component.
 */
export const ResponseCreator: React.FC<ResponseCreatorProps> = (
  props: ResponseCreatorProps
) => {
  const { content, input, action } = ResponseCreatorStyles(props);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const imageUploadModalRef = useRef<ImageUploadModalRef>(null);

  return (
    <>
      <PostBase>
        <Form className={content()}>
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
              onClick={() => imageUploadModalRef.current?.openModal(true)}
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
        </Form>
      </PostBase>

      <ImageUploadModal ref={imageUploadModalRef} onFileChange={setFile} />
    </>
  );
};
