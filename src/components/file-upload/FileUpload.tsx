import React, { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Button } from "../button/Button";
import { Cancel, Upload } from "../icons/generated";
import { Label } from "../typography/Label";
import { Paragraph } from "../typography/Paragraph";

const fileUploadStyles = tv({
  slots: {
    base: ["flex", "flex-col", "items-center", "gap-4", "w-full"],
    dropzone: [
      "flex",
      "w-full",
      "cursor-pointer",
      "flex-col",
      "items-center",
      "justify-center",
      "gap-2",
      "rounded-xl",
      "border-2",
      "border-dashed",
      "border-slate-200",
      "pt-12",
      "pr-4",
      "pb-12",
      "pl-4",
    ],
    uploadIcon: ["h-8", "w-8", "text-slate-500"],
    titleText: ["text-slate-500"],
    subtitleText: ["text-slate-500"],
    action: [
      "flex",
      "w-full",
      "items-center",
      "justify-center",
      "bg-slate-300",
      "text-slate-600",
      "hover:bg-slate-300",
    ],
    input: ["hidden"],
    preview: ["flex", "items-center", "gap-2"],
    previewLabel: ["truncate"],
  },
});

type FileUploadVariants = VariantProps<typeof fileUploadStyles>;

interface FileUploadProps extends FileUploadVariants {
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  onFileSelect: (file: File | null) => void;
}

export const FileUpload = ({
  title = "Drag & Drop your File",
  subtitle = "JPEG or PNG, max. 50 MB",
  actionLabel = ".. or select your File",
  ...props
}: FileUploadProps) => {
  const {
    base,
    dropzone,
    titleText,
    subtitleText,
    uploadIcon,
    action,
    input,
    preview,
    previewLabel,
  } = fileUploadStyles(props);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    if (selected) {
      setFile(selected);
      props.onFileSelect(selected);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={base(props)}>
      {/* Dropzone */}
      <div
        role="region"
        aria-label="File upload dropzone"
        className={dropzone(props)}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("fileInput")?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            document.getElementById("fileInput")?.click();
          }
        }}
      >
        <Upload className={uploadIcon(props)} />
        <Label size="xl" className={titleText(props)}>
          {title}
        </Label>
        <Paragraph size="md" className={subtitleText(props)}>
          {subtitle}
        </Paragraph>
      </div>

      <Button
        className={action(props)}
        intent="primary"
        size="md"
        icon={Upload}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {actionLabel}
      </Button>

      {/* Hidden File Input */}
      <input
        id="fileInput"
        aria-label={title}
        type="file"
        accept=".jpg,.png"
        className={input(props)}
        onChange={handleFileChange}
      />

      {/* Selected File Preview */}
      {file && (
        <div className={preview(props)}>
          <Label size="md" className={previewLabel(props)}>
            {file.name}
          </Label>
          <Cancel onClick={() => setFile(null)} />
        </div>
      )}
    </div>
  );
};
