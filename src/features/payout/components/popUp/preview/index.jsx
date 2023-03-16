import { Button, Card, Divider } from "components";
import React from "react";

import { XMarkIconMini } from "lib/@heroicons";
import { HomeIconMini } from "lib/@heroicons";

export const Preview = () => {
  return (
    <Card className="w-[73%] ">
      <div className="pr-[32px] pl-[32px]">
        <div className="flex justify-end mb-[4px] mt-[15px]">
          <span className="h-5 w-5 ">
            <XMarkIconMini className="cursor-pointer	" />
          </span>
        </div>
        <h3 className="flex justify-center mt-[-11px] font-bold	">
          Transfer Preview
        </h3>
        <div className="flex flex-col mb-[30px] mt-[8px] justify-center items-center">
          <p className="	text-[#8C8C8C] text-[12px] mb-[-7px]">Amount:</p>
          <p className="text-[#4375FF] text-[25px] font-[600]	">300.00 USD</p>
        </div>

        <div className="mt-[-20px] pl-[4px] pr-[4px] ">
          <p className="text-[#8C8C8C] text-[12px]">Transferred to:</p>
          <div className=" flex border-[1px] border-[#BEC2C6] pl-[38px] pr-[38px] pb-[15px] pt-[15px] text-[#151617] text-[14px] rounded-[9px] mt-[4px]	flex-row	">
            <span className="h-5 w-5 basis-[26px] flex justify-center items-center pt-[26px] ml-[-6px] mr-[25px] mt-[-3px]">
              <HomeIconMini className="text-[#8D2094] w-[30px]" />
            </span>
            <div className="flex flex-col	items-start">
              <p className="mb-[3px] text-[#8D2094]">
                Bank of Palestine - Safa Mousa
              </p>
              <p>0452-1064559-001-3100-000</p>
            </div>
          </div>
          <div className="border-[1px] border-[#BEC2C6]  text-[#151617] text-[14px] rounded-[9px] pt-[12px] pb-[12px] pr-[30px] pl-[30px]	mt-[7px]">
            <div className="flex justify-between mb-[6px]">
              <p>Transfer amount</p>
              <p>$300</p>
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
              <p className="font-[600]">$300</p>
            </div>
          </div>
        </div>

        <div className="text-[#151617] pl-[31px] pr-[31px] pt-[14px] pb-[14px] text-[13px]">
          <p className="mb-[8px]">- Estimated arrival: 2 business days.</p>
          <p className="mb-[8px]">
            - Transfers made after 9:00 PM or on weekends takes longer.
          </p>
          <p className="mb-[8px]">
            - All transfers are subject to review and could be delayed or
            stopped if we identify an issue.
          </p>
        </div>

        <Button className=" cursor-pointer w-[100%] mt-[20px] mb-[35px] text[16px] pl-[23px] pr-[23px] ">
          Confirm
        </Button>
      </div>
    </Card>
  );
};
