"use client";

import { Form } from "@radix-ui/react-form";
import { useRef, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Avatar, Button, Heading, Textarea } from "../../components";
import { Send, Upload } from "../../components/icons/generated";
import {
  ImageUploadModal,
  type ImageUploadModalRef,
} from "../image-upload-modal/ImageUploadModal";
import { PostBase } from "../post-base/PostBase";

const PostCreatorStyles = tv({
  slots: {
    content: ["flex", "flex-col", "gap-4", "w-full"],
    header: ["flex", "items-center", "gap-3"],
    title: ["text-slate-900"],
    input: ["w-full", "h-40"],
    action: ["flex", "flex-col", "sm:flex-row", "gap-4"],
    button: [
      "flex",
      "items-center",
      "justify-center",
      "gap-2",
      "whitespace-nowrap",
      "flex-1",
      "text-sm",
      "sm:text-base",
    ],
  },
});

type PostCreatorVariants = VariantProps<typeof PostCreatorStyles>;

interface PostCreatorProps extends PostCreatorVariants {
  /** Avatar image URL */
  src?: string | null;

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
  const { content, header, title, input, action, button } =
    PostCreatorStyles(props);
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const imageUploadModalRef = useRef<ImageUploadModalRef>(null);

  return (
    <>
      <PostBase>
        <Form className={content()}>
          <div className={header()}>
            <Avatar
              alt="Profile"
              size="sm"
              src={props.src}
              onAvatarClick={props.onAvatarClick}
            />
            <Heading size="4" as="h4" className={title()}>
              Hey, what's up?
            </Heading>
          </div>
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
              className={button()}
            >
              Picture upload
            </Button>
            <Button
              intent="secondary"
              size="md"
              icon={Send}
              onClick={() => props.onSendClick(text, file)}
              className={button()}
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
