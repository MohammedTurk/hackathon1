import { useState, useCallback } from "react";
import { FORM_VALIDATION } from "data";
import type { OnOtpChange } from "../types";

const getInitialOtpFieldsState = () => {
  return {
    value: Array(6).fill("") as string[],
    activeIndex: 0,
  };
};

const useOtpInput = (onOtpChange: OnOtpChange) => {
  const [otpFields, setOtpFields] = useState(getInitialOtpFieldsState());

  const onChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target;
      const value = target.value;
      if (value !== "" && !FORM_VALIDATION.otp.pattern.test(value)) return;

      const newValue = otpFields.value.map((fieldValue, fieldValueIndex) =>
        fieldValueIndex === index ? value : fieldValue
      );
      setOtpFields({ value: newValue, activeIndex: value ? index + 1 : index });
      onOtpChange(newValue.join(""));
    };

  const onKeyDown =
    (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      const key = event.key;
      target.select();

      let activeIndex = index;
      if (key === "ArrowRight" || key === "ArrowDown") {
        activeIndex = index + 1;
      } else if (key === "ArrowLeft" || key === "ArrowUp") {
        activeIndex = index - 1;
      }

      setOtpFields((prevOtpFields) => ({
        ...prevOtpFields,
        activeIndex,
      }));

      if (key !== "Backspace") return;

      setOtpFields((prevOtpFields) => ({
        ...prevOtpFields,
        activeIndex: target.value ? prevOtpFields.activeIndex : index - 1,
      }));
    };

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

  const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const data = event.clipboardData.getData("text");
    if (
      data.length !== otpFields.value.length ||
      !FORM_VALIDATION.otp.pattern.test(data)
    )
      return;

    setOtpFields((prevOtpFields) => ({
      value: data.split(""),
      activeIndex: prevOtpFields.activeIndex,
    }));

    onOtpChange(data);
    event.currentTarget.blur();
  };

  const activeInputRef = useCallback((node: HTMLInputElement) => {
    if (node !== null) {
      node.focus();
    }
  }, []);

  return { otpFields, activeInputRef, onChange, onKeyDown, onFocus, onPaste };
};

export default useOtpInput;
