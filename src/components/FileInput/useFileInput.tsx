import { useState } from "react";

const useFileInput = (
  onChange?: React.ChangeEventHandler<HTMLInputElement>
) => {
  const [fileList, setFileList] = useState<FileList | null>(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const resetFileInput = () => {
    setFileInputKey(Date.now());
    setFileList(null);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    setFileList(fileList);
    onChange && onChange(event);
  };

  return { fileList, fileInputKey, changeHandler, resetFileInput };
};

export default useFileInput;
