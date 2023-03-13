import type { ClientFeesValue, PaymentOptionFee } from "../../types";

export const calcFeeValue = (
  fee: ClientFeesValue,
  paymentOptionFee: PaymentOptionFee | undefined
) => {
  return paymentOptionFee?.[fee];
};
