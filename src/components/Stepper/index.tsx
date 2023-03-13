import { createContext, useContext, useMemo, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Content from "./Content";
import Actions from "./Actions";
import type { StepperProps, StepperContextType } from "../types";

const StepperContext = createContext<StepperContextType>({
  activeStep: 0,
  steps: [],
});

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error(
      `Stepper components cannot be rendered outside the StepperProvider`
    );
  }
  return context;
};

export const Stepper = ({
  steps,
  activeStep,
  onChange,
  children,
}: StepperProps) => {
  const value = useMemo(() => ({ steps, activeStep }), [steps, activeStep]);

  useEffect(() => {
    onChange?.(activeStep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};

Stepper.ProgressBar = ProgressBar;
Stepper.Content = Content;
Stepper.Actions = Actions;

export default Stepper;
