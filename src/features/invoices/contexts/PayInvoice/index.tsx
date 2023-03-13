import { createContext, useContext, useMemo } from "react";
import { useRouter } from "next/router";
import { useInvoiceDetails, usePayInvoiceSteps } from "../../hooks";
import type { PayInvoiceContextType, PayInvoiceStateType } from "../../types";

const PayInvoiceContext = createContext<PayInvoiceContextType>({
  invoiceId: undefined,
  stepsData: {
    steps: [],
    updateStepsHandler: () => {},
    activeStepIndex: 0,
    isLastStep: false,
  },
  invoiceDetails: {
    data: undefined,
    isLoading: true,
    error: "",
  },
});

export const usePayInvoice = () => useContext(PayInvoiceContext);

const PayInvoiceState: PayInvoiceStateType = ({ children }) => {
  const { query } = useRouter();
  const invoiceId = (query.invoiceId as string) || undefined;
  const { steps, updateStepsHandler, activeStepIndex, isLastStep } =
    usePayInvoiceSteps(invoiceId);

  // maybe move this hook into the details component and we can reuse it if needed anywhere
  const {
    invoiceDetails,
    isLoading: invoiceLoading,
    error: invoiceError,
  } = useInvoiceDetails(invoiceId);

  const value: PayInvoiceContextType = useMemo(
    () => ({
      invoiceId,
      stepsData: {
        steps,
        updateStepsHandler,
        activeStepIndex,
        isLastStep,
      },
      invoiceDetails: {
        data: invoiceDetails,
        isLoading: invoiceLoading,
        error: invoiceError?.response?.data?.message || undefined,
      },
    }),
    [
      invoiceId,
      steps,
      updateStepsHandler,
      activeStepIndex,
      isLastStep,
      invoiceDetails,
      invoiceLoading,
      invoiceError,
    ]
  );

  return (
    <PayInvoiceContext.Provider value={value}>
      {children}
    </PayInvoiceContext.Provider>
  );
};

export default PayInvoiceState;
