import IconButton from "../IconButton";
import filesize from "lib/filesize";
import { ArrowUpTrayIconMini, XMarkIconMini } from "lib/@heroicons";
import type { FileInputLabelType } from "components/types";

export const FileInputLabel: FileInputLabelType = ({
  label,
  fileList,
  resetFileInput,
}) => {
  return fileList?.length ? (
    <span className="flex justify-between items-center">
      <span className="flex items-center">
        <span className="mr-2">
          <ArrowUpTrayIconMini className="w-5 h-5" />
        </span>
        <span>
          {fileList[0].name}{" "}
          <span className="text-xs">
            ({filesize(fileList?.[0].size) as string} size)
          </span>
        </span>
      </span>
      <IconButton onClick={resetFileInput} className="!p-0 hover:!bg-gray">
        <XMarkIconMini />
      </IconButton>
    </span>
  ) : (
    <span className="flex justify-center items-center">
      <ArrowUpTrayIconMini className="w-5 h-5 mr-2" />
      {label}
    </span>
  );
};

export default FileInputLabel;
