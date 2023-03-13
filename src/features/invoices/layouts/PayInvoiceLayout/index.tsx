import { useMemo } from "react";
import { useRouter } from "next/router";
import { Stepper } from "components";
import { usePayInvoice } from "../../contexts/PayInvoice";
import type { PayInvoiceLayoutType } from "../../types";

export const PayInvoiceLayout: PayInvoiceLayoutType = ({
  className,
  cardClassName,
  children,
  nextProps,
  backProps,
}) => {
  const { back } = useRouter();
  const {
    stepsData: { steps, updateStepsHandler, activeStepIndex, isLastStep },
  } = usePayInvoice();

  const classNames = useMemo(() => {
    const classes = {
      mainContent: `flex-1 ${className ?? ""}`,
      card: `w-full max-w-[800px] mx-auto relative py-8 px-12 ${
        cardClassName || ""
      }`,
    };

    return classes;
  }, [className, cardClassName]);

  const onBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    updateStepsHandler("back");
    back();
    backProps?.onClick?.(event);
  };

  return (
    <div className={classNames.mainContent}>
      <Stepper steps={steps} activeStep={activeStepIndex}>
        <Stepper.ProgressBar className="mt-6 mb-20" />
        <Stepper.Content className={classNames.card}>
          {children}
          {!isLastStep && (
            <Stepper.Actions
              nextProps={nextProps}
              backProps={{ ...backProps, onClick: onBackClick }}
            />
          )}
        </Stepper.Content>
      </Stepper>
    </div>
  );
};

export default PayInvoiceLayout;
