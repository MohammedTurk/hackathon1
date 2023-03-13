import { Button, Card, Divider } from "components";
import React from "react";

import { XMarkIconMini } from "lib/@heroicons";
import { HomeIconMini } from "lib/@heroicons";

export const TransferPreview = () => {
  return (
    <Card className="w-[73%] ">
      <div className="pr-[32px] pl-[32px]">
        <div className="flex justify-end mb-[4px] mt-[15px]">
          <span className="h-5 w-5 ">
            <XMarkIconMini className="cursor-pointer	" />
          </span>
        </div>
        <h3 className="flex justify-center mt-[-11px] font-bold	">
          Withdraw Preview
        </h3>
        <div className="flex flex-col mb-[30px] mt-[8px] justify-center items-center">
          <p className="	text-[#8C8C8C] text-[12px] mb-[-7px]">Amount:</p>
          <p className="text-[#4375FF] text-[25px] font-[600]	">240.00 USD</p>
        </div>

        <div className="mt-[-20px] pl-[4px] pr-[4px] ">
          <p className="text-[#8C8C8C] text-[12px]">Transferred to:</p>
          <div className=" flex border-[1px] border-[#BEC2C6] pl-[37px] pr-[37px] pb-[10px] pt-[10px] text-[#151617] text-[14px] rounded-[9px] mt-[4px]	flex-row-reverse	">
            <span className="h-5 w-5 basis-[26px] flex justify-center items-center pt-[20px] ml-[19px] mr-[-9px] pt-[23px]">
              <HomeIconMini />
            </span>
            <div className="flex flex-col	items-end">
              <p className="mb-[6px]">غزة - مكتب الدانا</p>
              <p>الرمال - مفترق شارع فلسطين مع الشهدا</p>
            </div>
          </div>
          <div className="border-[1px] border-[#BEC2C6]  text-[#151617] text-[14px] rounded-[9px] pt-[12px] pb-[12px] pr-[30px] pl-[30px]	mt-[7px]">
            <div className="flex justify-between mb-[6px]">
              <p>Recipient name</p>
              <p className="font-[600]">سامي عمر</p>
            </div>
            <div className="flex justify-between mb-[6px]">
              <p>Transfer amount</p>
              <p>$240</p>
            </div>
            <div className="flex justify-between mb-[6px]">
              <p>Fee</p>
              <p>Free</p>
            </div>

            <Divider className="mb-[10px]" />

            <div
              className="flex justify-between mb-[2px]
            "
            >
              <p>You&apos;ll get</p>
              <p className="font-[600]">$240</p>
            </div>
          </div>
        </div>

        <div className="text-[#151617] pl-[31px] pr-[31px] pt-[14px] pb-[14px] text-[13px]">
          <p className="mb-[8px]">- Estimated arrival: 2 business days.</p>
          <p className="mb-[8px]">
            - Don&apos;t go to office till the payment ready.
          </p>
          <p className="mb-[8px]">
            - All transfers are subject to review and could be delayed or
            stopped if we identify an issue.
          </p>
        </div>

        <Button className=" cursor-pointer	 w-[100%] mt-[32px] mb-[35px] text[16px] pl-[23px] pr-[23px] mt-[9px]">
          Confirm
        </Button>
      </div>
    </Card>
  );
};
export default TransferPreview;
