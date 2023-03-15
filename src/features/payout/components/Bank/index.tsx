import { Button, Input, SelectListBox } from "components";
import { API_SERVICES_URLS, FORM_VALIDATION } from "data";
import useSWRHook from "features/payout/hooks/useSWRHook";
import { WithdrawAmountType } from "features/payout/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getFieldHelperText } from "utils";

export const Bank = () => {
//  const {responseData} = useSWRHook(
//   API_SERVICES_URLS.WITHDRAW.OFFICE_LIST,
//     "get"
//  )

  

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<WithdrawAmountType>();
  const handleAmount = (value:number | string)=>{
    setValue( 'amount' , +value )
  }
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="w-[200px] mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-dark font-medium ">Amount</span>
          <span className="  flex items-center">
            <span className=" text-gray-dark text-xs">Available</span>
            <span className="text-blue-light text-base ml-2 cursor-pointer" onClick={()=>handleAmount(240.99)}>
            240.99
            </span>
          </span>
        </div>

        <Input
          inputClassName=" bg-[#FDFDFD] text-black text-center font-semibold text-2xl"
          id="balance-input"
          inputSize="large"
          type='number'
          step={"any"}
          {...register("amount", FORM_VALIDATION.withdrawBankAmount)}
          error={!!errors.amount}
          helperText={getFieldHelperText("error", errors.amount?.message)}
        />



      </div>
      {/* <SelectListBox data={responseData} label="Office"/> */}
      {/* <SelectList Box   label="Office"/> */}

      <Button type="submit" buttonSize="medium" fullWidth className="mt-10">
        Withdraw Bank
      </Button>
    </form>
  );
};
export default Bank;
