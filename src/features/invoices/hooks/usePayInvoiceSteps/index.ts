import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PAY_INVOICE_STEPS } from "../../data";
import type { PayInvoiceStepsType, UpdateInvoiceHandler } from "../../types";

const getUpdatedStepsState = (steps: PayInvoiceStepsType, pathName: string) => {
  return steps.map((step) =>
    step.id === pathName ? { ...step, active: true, completed: false } : step
  );
};

export const usePayInvoiceSteps = (invoiceId: string | undefined) => {
  const { pathname, replace } = useRouter();
  const [steps, setSteps] = useState(() =>
    getUpdatedStepsState(PAY_INVOICE_STEPS, pathname)
  );
  const activeStepIndex = steps.findIndex((step) => step.id === pathname);
  const activeStep = steps[activeStepIndex];
  const previousStep = steps[activeStepIndex - 1];
  const isLastStep = steps[steps.length - 1].id === activeStep.id;

  const updateStepsHandler: UpdateInvoiceHandler = (intent) => {
    let stepsClone = [...steps];

    if (intent === "next") {
      stepsClone = stepsClone.map((step, index) => {
        if (activeStepIndex === index) {
          return { ...step, completed: true, active: false };
        } else if (activeStepIndex + 1 === index) {
          return { ...step, active: true };
        }
        return step;
      });
    } else {
      stepsClone = stepsClone.map((step, index) => {
        if (activeStepIndex === index) {
          return { ...step, active: false };
        } else if (activeStepIndex - 1 === index) {
          return { ...step, completed: false, active: true };
        }
        return step;
      });
    }

    setSteps(stepsClone);
  };

  useEffect(() => {
    // replace the current step pathname with the previous step pathname
    // if (previousStep && !previousStep.completed) {
    //   replace({
    //     pathname: previousStep.id,
    //     query: {
    //       invoiceId,
    //     },
    //   });
    // }
  }, [previousStep, invoiceId, replace]);

  useEffect(() => {
    setSteps((prevSteps) => {
      const activeStepIndex = prevSteps.findIndex(
        (step) => step.id === pathname
      );
      const updatedSteps = prevSteps.map((step, index) => {
        if (activeStepIndex === index) {
          return { ...step, active: true, completed: false };
        } else if (activeStepIndex > index) {
          return { ...step, active: false, completed: true };
        } else if (activeStepIndex < index) {
          return { ...step, active: false, completed: false };
        } else {
          return step;
        }
      });
      return updatedSteps;
    });
  }, [pathname, activeStepIndex]);

  return {
    steps,
    updateStepsHandler,
    activeStepIndex,
    isLastStep,
  };
};

export default usePayInvoiceSteps;
