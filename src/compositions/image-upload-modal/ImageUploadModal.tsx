import { useState } from "react";
import { Button, FileUpload, Modal } from "../../components";
import { Cancel, Checkmark } from "../../components/icons/generated";
import { forwardRef, useImperativeHandle } from "react";

interface ImageUploadModalProps {
  onFileChange: (file: File | null) => void;
}

export type ImageUploadModalRef = {
  openModal: (open: boolean) => void;
};

/**
 * ImageUploadModal component
 *
 * Renders a post creation component.
 */
export const ImageUploadModal = forwardRef<
  ImageUploadModalRef,
  ImageUploadModalProps
>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  // Pass the ref to the useImperativeHandle hook
  useImperativeHandle(ref, () => ({
    openModal: setOpen,
  }));

  return (
    <Modal open={open} onOpenChange={setOpen} title="Image upload">
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
          onClick={() => {
            setOpen(false);
            props.onFileChange(file);
          }}
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
});
