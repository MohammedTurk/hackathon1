import { useMemo, forwardRef } from "react";
import type { SelectProps } from "components/types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      id,
      helperText,
      className,
      selectClassName,
      selectSize = "medium",
      options,
      placeholder,
      error = false,
      withoutHelperText = false,
      defaultValue = "",
      ...rest
    },
    ref
  ) => {
    const classNames = useMemo(() => {
      const classes = {
        selectContainer: `mb-1 relative text-gray-dark ${className ?? ""}`,
        label: "block mb-1",
        select: `block w-full px-4 border-gray focus:ring-0 focus:border-blue rounded-md ${
          selectClassName || ""
        }`,
        helperText: "inline-flex min-h-[20px] text-xs mt-1",
        placeholder: "text-gray-400",
      };

      if (selectSize === "large") {
        classes.select += " py-4";
        classes.selectContainer += " text-lg";
      } else if (selectSize === "small") {
        classes.select += " py-2 text-sm";
        classes.selectContainer += " text-sm";
      } else {
        classes.select += " py-3";
        classes.selectContainer += " text-base";
      }

      if (error) {
        classes.select += " border-red focus:border-red";
      }

      return classes;
    }, [className, selectClassName, selectSize, error]);

    return (
      <div className={classNames.selectContainer}>
        {label && (
          <label htmlFor={id} className={classNames.label}>
            {label}
          </label>
        )}
        <select
          id={id}
          className={classNames.select}
          ref={ref}
          defaultValue={defaultValue}
          {...rest}
        >
          {placeholder && (
            <option className={classNames.placeholder} value="">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {!withoutHelperText && (
          <p className={classNames.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
