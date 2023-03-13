import type { HelperTextType } from "components/types";

export const HelperText: HelperTextType = ({
  children,
  text,
  className,
  startIcon,
  endIcon,
  showContent = true,
}) => {
  const textClassName = `inline-flex items-center ${className ?? ""}`;

  return (
    <span className={textClassName}>
      {showContent ? (
        <>
          {startIcon && <span className="mr-1">{startIcon}</span>}
          {children || text}
          {endIcon && <span className="ml-1">{endIcon}</span>}
        </>
      ) : null}
    </span>
  );
};

export default HelperText;
