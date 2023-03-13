import { useState } from "react";
import { Divider, Image, ToggleButtons } from "components";
import { PAYMENT_METHODS, CLIENT_FEES } from "../../data";
import { usePayInvoice } from "../../contexts/PayInvoice";
import { usePaymentOptions } from "../../hooks";
import { calcFeeValue, getPaymentOption } from "../../utils";
import type { PaymentMethodValue, ClientFeesValue } from "../../types";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodValue>();
  const [clientFee, setClientFee] = useState<ClientFeesValue>();
  const { invoiceId } = usePayInvoice();
  const { paymentOptions } = usePaymentOptions(invoiceId);
  const selectedPaymentOption = getPaymentOption(paymentMethod, paymentOptions);

  return (
    <>
      <h2 className="text-lg font-medium">Choose Payment Method</h2>
      <Divider />
      <div className="my-6 flex p-1 gap-3">
        <ToggleButtons
          value={paymentMethod}
          onChange={(value) => setPaymentMethod(value as PaymentMethodValue)}
        >
          {PAYMENT_METHODS.map((method) => (
            <ToggleButtons.Button key={method.id} value={method.value}>
              <span className="flex items-center">
                <Image
                  alt={method.label}
                  src={method.icon}
                  width={33}
                  height={33}
                  className={
                    method.value === "bankTransfer" ? "opacity-50" : ""
                  }
                />
                <span className="flex-1 text-left pl-5 text-sm">
                  {method.label}
                  <span className="block text-xs">{method.caption}</span>
                </span>
              </span>
            </ToggleButtons.Button>
          ))}
        </ToggleButtons>
      </div>
      <div
        className={`${
          !paymentMethod
            ? "max-h-0"
            : "max-h-[500px] transition-all duration-[1500ms]"
        } overflow-hidden`}
      >
        <h2 className="text-lg font-medium">
          Empower a Freelancer by Helping with Fees
        </h2>
        <Divider />
        <div className="my-6 flex p-1 gap-3">
          <ToggleButtons
            value={clientFee}
            onChange={(value) => setClientFee(value as ClientFeesValue)}
          >
            {CLIENT_FEES.map((fee) => (
              <ToggleButtons.Button key={fee.id} value={`${fee.value}`}>
                <span className="flex items-center">
                  <span className="flex-1 text-left pl-5 text-sm">
                    {fee.label}
                    <span className="block text-xs">
                      {paymentOptions?.currency}{" "}
                      {calcFeeValue(fee.value, selectedPaymentOption)}
                    </span>
                  </span>
                  <Image
                    alt={fee.label}
                    src={fee.icon}
                    width={33}
                    height={33}
                  />
                </span>
              </ToggleButtons.Button>
            ))}
          </ToggleButtons>
        </div>
        <span className="text-sm">Freelancer Gets $500</span>
      </div>
    </>
  );
};

export default Payment;
