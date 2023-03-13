import type { SkeletonType } from "components/types";

export const Skeleton: SkeletonType = ({
  width,
  height = 16,
  variant = "rounded",
  className,
  style,
  ...rest
}) => {
  let SkeletonClassName = `block bg-gray-200 animate-pulse ${className ?? ""}`;

  if (variant === "rounded") {
    SkeletonClassName += " rounded";
  } else if (variant === "circular") {
    SkeletonClassName += " rounded-full";
  }

  return (
    <span
      className={SkeletonClassName}
      style={{
        width: width ? width + "px" : undefined,
        height: height + "px",
        ...style,
      }}
      {...rest}
    />
  );
};

export default Skeleton;
