import { Form } from "@radix-ui/react-form";
import { useRef, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import {
  Avatar,
  Button,
  FileUpload,
  Heading,
  Modal,
  Textarea,
} from "../../components";
import {
  Cancel,
  Checkmark,
  Send,
  Upload,
} from "../../components/icons/generated";
import { PostBase } from "../post-base/PostBase";
import {
  ImageUploadModal,
  type ImageUploadModalRef,
} from "../image-upload-modal/ImageUploadModal";

const PostCreatorStyles = tv({
  slots: {
    content: ["flex", "flex-col", "gap-4", "w-full"],
    avatar: ["absolute", "-left-8", "top-6"],
    title: ["text-slate-900"],
    input: ["w-full", "h-40"],
    action: ["flex", "gap-4"],
  },
});

type PostCreatorVariants = VariantProps<typeof PostCreatorStyles>;

interface PostCreatorProps extends PostCreatorVariants {
  /** Avatar image URL */
  src: string;

  /** Triggered when the avatar is clicked. */
  onAvatarClick: () => void;

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
  const { content, avatar, title, input, action } = PostCreatorStyles(props);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const imageUploadModalRef = useRef<ImageUploadModalRef>(null);

  return (
    <>
      <PostBase>
        <div className={avatar()}>
          <Avatar
            alt="Profile"
            size="md"
            src={props.src}
            onAvatarClick={props.onAvatarClick}
          />
        </div>

        <Form className={content()}>
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
