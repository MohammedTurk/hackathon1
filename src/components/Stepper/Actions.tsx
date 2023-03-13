import Button from "../Button";
import { useStepperContext } from "./index";
import type { StepperActionsType } from "../types";

export const Actions: StepperActionsType = ({ nextProps, backProps }) => {
  const { steps, activeStep } = useStepperContext();
  const isLastStep = steps.length - 1 === activeStep;

  const onBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    backProps?.onClick?.(event);
  };

  const onNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    nextProps?.onClick?.(event);
  };

  return (
    <div className="flex justify-end gap-4">
      {activeStep > 0 && (
        <Button
          buttonSize="small"
          className="max-w-[150px] bg-white text-black border hover:bg-gray-light"
          fullWidth
          {...backProps}
          onClick={onBackClick}
        >
          {backProps?.children || "Back"}
        </Button>
      )}
      {!isLastStep && (
        <Button
          buttonSize="small"
          className="max-w-[150px] border"
          fullWidth
          {...nextProps}
          onClick={onNextClick}
        >
          {nextProps?.children || "Next"}
        </Button>
      )}
    </div>
  );
};

export default Actions;
