import * as RadixForm from "@radix-ui/react-form";
import React, { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Label } from "../typography/Label";
import { labelStyles, placeholderStyles } from "../typography/styles";
import { ValidationMessage } from "../typography/ValidationMessage";
import type { IconBaseProps } from "../icons/IconBase";
import { Cancel, Upload } from "../icons/generated";
import { Paragraph } from "../typography/Paragraph";
import { Button } from "../button/Button";
import { IconButton } from "../icon-button/IconButton";

const fileUploadStyles = tv({
  slots: {
    base: ["flex", "flex-col", "gap-1"],
    controlContainer: ["relative", "inline-block"],
    control: [
      "ring",
      "focus:ring-2",
      "ring-slate-200",
      "hover:ring-violet-600",
      "focus-visible:ring-violet-600",
      "focus-within:ring-violet-600",
      "focus-visible:outline-none",
      "bg-slate-50",
      "rounded-lg",
      "p-4",
      "text-slate-700",
      "transition",
      "duration-300",
      "ease-in-out",
    ],
    icon: ["absolute", "w-4", "h-4", "right-4", "top-4.5"],
    message: ["text-error"],
  },
  variants: {
    hasIcon: {
      true: { control: ["pr-10"] },
      false: { control: ["pr-4"] },
    },
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
    <div className="flex flex-col items-center gap-4">
      {/* Dropzone */}
      <div
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 pt-12 pr-4 pb-12 pl-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <Upload className="h-8 w-8 text-slate-500" />
        <Label size="xl" className="text-slate-500">
          {title}
        </Label>
        <Paragraph size="md" className="text-slate-400">
          {subtitle}
        </Paragraph>
      </div>

      <Button
        className="flex w-full items-center justify-center bg-slate-300 text-slate-500"
        intent="primary"
        size="md"
        label={actionLabel}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <Upload />
      </Button>

      {/* Hidden File Input */}
      <input
        id="fileInput"
        aria-label={title}
        type="file"
        accept=".jpg,.png"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Selected File Preview */}
      {file && (
        <div className="flex items-center gap-2">
          <Label size="md" className="truncate">
            {file.name}
          </Label>
          <Cancel onClick={() => setFile(null)} />
        </div>
      )}
    </div>
  );
};
