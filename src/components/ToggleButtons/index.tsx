import { createContext, useContext, useMemo } from "react";
import ToggleButton from "./ToggleButton";
import type { ToggleButtonsProps, ToggleButtonsContextType } from "../types";

const ToggleButtonsContext = createContext<ToggleButtonsContextType>({
  value: undefined,
  onChange: () => {},
});

export const useToggleButtonsContext = () => {
  const context = useContext(ToggleButtonsContext);
  if (!context) {
    throw new Error(
      `Toggle Buttons components cannot be rendered outside the ToggleButtons Provider`
    );
  }
  return context;
};

export const ToggleButtons = ({
  value,
  onChange,
  children,
}: ToggleButtonsProps) => {
  const contextValue = useMemo(() => ({ value, onChange }), [value, onChange]);

  return (
    <ToggleButtonsContext.Provider value={contextValue}>
      {children}
    </ToggleButtonsContext.Provider>
  );
};

ToggleButtons.Button = ToggleButton;

export default ToggleButtons;
