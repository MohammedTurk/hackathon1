import { useMemo, forwardRef } from "react";
import Input from "../Input";
import InputLabel from "./InputLabel";
import useFileInput from "./useFileInput";
import type { FileInputProps } from "components/types";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      label = "Upload a File",
      inputSize = "medium",
      children,
      className,
      error = false,
      onChange,
      ...rest
    },
    ref
  ) => {
    const { fileList, fileInputKey, changeHandler, resetFileInput } =
      useFileInput(onChange);
    const classNames = useMemo(() => {
      let labelClassName = `!mb-0 border border-gray text-black text-center outline-none focus:border-blue hover:bg-gray-light transition-colors rounded-md ${
        className ?? ""
      }`;

      if (inputSize === "large") {
        labelClassName += " py-4 px-5 text-lg";
      } else if (inputSize === "small") {
        labelClassName += " py-2 px-3 text-sm";
      } else {
        labelClassName += " py-3 px-4 text-base";
      }

      if (error) {
        labelClassName += " border-red focus:border-red";
      }

      if (fileList?.length) {
        labelClassName += " bg-gray-200 hover:bg-gray-300";
      }

      return { labelClassName };
    }, [className, inputSize, error, fileList]);

    return (
      <Input
        type="file"
        label={
          <InputLabel
            label={label}
            fileList={fileList}
            resetFileInput={resetFileInput}
          />
        }
        labelClassName={classNames.labelClassName}
        focusableLabel
        inputClassName="hidden"
        ref={ref}
        {...rest}
        key={fileInputKey}
        onChange={changeHandler}
      />
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;
