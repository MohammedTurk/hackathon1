import type { DividerType } from "components/types";

export const Divider: DividerType = ({ className, ...rest }) => {
  const dividerClassName = `h-px my-3 bg-gray ${className ?? ""}`;

  return <div className={dividerClassName} {...rest} />;
};

export default Divider;
