import { useState } from "react";

export const useToggle = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return { isOpen, closeModal, openModal };
};
export default useToggle;
