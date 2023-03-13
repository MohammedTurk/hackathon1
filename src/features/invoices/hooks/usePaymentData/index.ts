import { useState } from "react";
import usePaymentOptions from "../usePaymentOptions";
import { getPaymentOptionFee } from "../../utils";
import type { PaymentMethodValue, ClientFeesValue } from "../../types";

const usePaymentData = (invoiceId: string | undefined) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodValue>();
  const [clientFee, setClientFee] = useState<ClientFeesValue>();
  const { paymentOptions } = usePaymentOptions(invoiceId);
  const paymentOptionFee = getPaymentOptionFee(paymentMethod, paymentOptions);

  return {
    paymentMethod,
    clientFee,
    updateClientFee: setClientFee,
    updatePaymentMethod: setPaymentMethod,
    paymentOptionFee,
    currency: paymentOptions?.currency,
  };
};

export default usePaymentData;
