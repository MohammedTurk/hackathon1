import { useMemo } from "react";
import type { IconButtonType } from "components/types";

export const IconButton: IconButtonType = ({
  children,
  className,
  type = "button",
  buttonSize = "medium",
  ...rest
}) => {
  const classNames = useMemo(() => {
    const classes = {
      button: `inline-flex items-center rounded-full text-black hover:bg-gray-light ${
        className ?? ""
      }`,
      icon: "w-5 h-5",
    };

    if (buttonSize === "large") {
      classes.button += " p-3";
      classes.icon = "w-6 h-6";
    } else if (buttonSize === "small") {
      classes.button += " p-1";
    } else {
      classes.button += " p-2";
    }

    return classes;
  }, [className, buttonSize]);

  return (
    <button type={type} className={classNames.button} {...rest}>
      <span aria-hidden="true" className={classNames.icon}>
        {children}
      </span>
    </button>
  );
};

export default IconButton;
