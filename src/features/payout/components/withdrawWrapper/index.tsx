import { RadioGroup } from "@headlessui/react";
import { Card, Divider } from "components";
import RadioButton from "components/RadioButton";
import { BankIcon, CashIcon } from "components/svg";
import { XMarkIconMini } from "lib/@heroicons";
import React, { useState } from "react";
import Bank from "../Bank";
import Cash from "../Cash";
 
export const WithdrawWrapper = () => {
  const [payMethod, setPayMethod] = useState("Cash");
  const handlePaymentMethod = (value: string) => {
    setPayMethod(() => value);
  };
  return (
    <Card className="px-20 py-10">
      <div className="flex justify-between">
        <span className=" font-semibold ">Choose Payment Method</span>
        <span className="h-5 w-5">
          <XMarkIconMini />
        </span>
      </div>
      <Divider className="mt-1" />
      <RadioGroup className="flex justify-center items-center gap-5 my-8">
        <RadioButton
          selected={payMethod}
          handleChange={() => handlePaymentMethod("Cash")}
          label="Cash"
          className="w-48"
        >
          <CashIcon className=" w-8 h-8  " />
        </RadioButton>
        <RadioButton
          selected={payMethod}
          handleChange={() => handlePaymentMethod("Bank")}
          label="Bank"
          className="w-48"
        >
          <BankIcon className="w-8 h-8 " />
        </RadioButton>
      </RadioGroup>
      {payMethod === "Cash" ? <Cash /> : <Bank />}
    </Card>
   );
};
export default WithdrawWrapper;
