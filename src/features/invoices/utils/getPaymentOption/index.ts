import type {
  PaymentOptionFee,
  PaymentMethodValue,
  PaymentOptionsData,
} from "../../types";

export const getPaymentOptionFee = (
  paymentMethod: PaymentMethodValue | undefined,
  paymentOptions: PaymentOptionsData | undefined | null
) => {
  let fee: PaymentOptionFee | undefined;

  if (paymentMethod === "creditCard") {
    fee = paymentOptions?.stripeOptionFee;
  } else if (paymentMethod === "paypal") {
    fee = paymentOptions?.paypalOptionFee;
  }

  return fee;
};
