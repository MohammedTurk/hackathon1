import { useMemo, forwardRef } from "react";
import usePasswordInput from "./usePasswordInput";
import type { InputProps } from "components/types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      helperText,
      className,
      inputClassName,
      startIcon,
      endIcon,
      inputSize = "medium",
      type = "text",
      error = false,
      withoutHelperText = false,
      labelClassName,
      focusableLabel = false,
      ...rest
    },
    ref
  ) => {
    const { passwordInputType, passwordInputIcon } =
      usePasswordInput(inputSize);
    const classNames = useMemo(() => {
      const classes = {
        inputContainer: `mb-1 relative text-gray-dark ${className ?? ""}`,
        label: `block mb-1 ${labelClassName ?? ""}`,
        icon: "absolute text-gray-400 select-none top-1/2 -translate-y-2/4",
        startIcon: "left-4",
        endIcon: "right-4",
        input: `block w-full border-gray focus:ring-0 focus:border-blue rounded-md ${
          inputClassName || ""
        }`,
        helperText: "inline-flex min-h-[20px] text-xs mt-1",
      };

      if (inputSize === "large") {
        classes.input += " py-4 px-5";
        classes.inputContainer += " text-lg";
      } else if (inputSize === "small") {
        classes.input += " py-2 px-3 text-sm";
        classes.inputContainer += " text-sm";
      } else {
        classes.input += " py-3 px-4";
        classes.inputContainer += " text-base";
      }

      if (error) {
        classes.input += " border-red focus:border-red";
      }

      return classes;
    }, [className, inputClassName, inputSize, error, labelClassName]);

    const inputType = type === "password" ? passwordInputType : type;
    const inputEndIcon = type === "password" ? passwordInputIcon : endIcon;

    return (
      <div className={classNames.inputContainer}>
        {label && (
          <label
            htmlFor={id}
            tabIndex={focusableLabel ? 0 : undefined}
            className={classNames.label}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <span className={`${classNames.icon} ${classNames.startIcon}`}>
              {startIcon}
            </span>
          )}
          <input
            id={id}
            type={inputType}
            className={classNames.input}
            ref={ref}
            {...rest}
          />
          {inputEndIcon && (
            <span className={`${classNames.icon} ${classNames.endIcon}`}>
              {inputEndIcon}
            </span>
          )}
        </div>
        {!withoutHelperText && (
          <p className={classNames.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
