import Button from "../Button";
import { useToggleButtonsContext } from "./index";
import type { ToggleButtonType } from "../types";

export const ToggleButton: ToggleButtonType = ({
  children,
  value,
  className,
}) => {
  const { value: toggleValue, onChange } = useToggleButtonsContext();
  const toggleButtonClassName = `flex-1 bg-transparent text-black hover:bg-gray-100 border ${
    toggleValue === value ? "opacity-100 border-blue" : "opacity-50"
  } ${className ?? ""}`;

  return (
    <Button onClick={() => onChange(value)} className={toggleButtonClassName}>
      {children}
    </Button>
  );
};
export default ToggleButton;
