import { Button, Card, Divider } from "components";
import React from "react";

import { XMarkIconMini } from "lib/@heroicons";
import { HomeIconMini } from "lib/@heroicons";
import { BankIcon } from "components/svg";
import { API_SERVICES_URLS } from "data";
import { useRouter } from "next/router";
import { useSWRMutationHook } from "features/payout/hooks";

export const BankWithdrawPreview = ({
  BankSelectDetails,
  closeModal,
  amount,
}) => {
  console.log("amount", amount);
  console.log("BankSelectDetails", BankSelectDetails);
  const router = useRouter();

  const { trigger: confirmWithdraw   } = useSWRMutationHook(
    API_SERVICES_URLS.WITHDRAW.REQUEST_BANK_WITHDRAW,
    "POST",
    { data: {amount, bankId: BankSelectDetails?._id  } }
  );
  const handleRequest=()=>{
    confirmWithdraw()
    closeModal()
    router.push('/balance')
  }
  return (
    <Card  >
      <div className="p-5">
      <div className="flex justify-end mb-[4px] mt-[15px]">
          <span className="h-5 w-5 ">
            <XMarkIconMini className="cursor-pointer	" />
          </span>
        </div>
        <h3 className="flex justify-center mt-4 font-semibold text-xl	">
          Withdraw Preview
        </h3>
        <div className="flex flex-col mb-[30px] mt-[8px] justify-center items-center">
          <span className="	text-gray-dark text-md mb-1">Amount:</span>
          <span className="text-blue-light text-3xl font-semibold	">
            {amount} USD
          </span>
        </div>

        <div >
          <span className="text-gray-dark block text-md mb-1">Transferred to:</span>
          <div className=" flex border-[1px] border-gray  gap-4  p-4 text-black text-md rounded-md 	flex-row	">
            <span className=" block text-gray-dark bg-gray-light p-4  rounded-full">
              <BankIcon className="h-7 w-7" />
            </span>
            <div className="flex flex-col	items-start">
              <span className="mb-[3px] font-semibold text-md">
               {BankSelectDetails.accountName}   <span className="text-sm text-gray-dark">
               [{BankSelectDetails.bankName}  ]
               </span>
              </span>
              <span className="  font-semibold text-sm text-gray-dark" >{BankSelectDetails.createdAt
}</span>
            </div>
          </div>
          <div className="border  border-gray  text-black   border-gray    text-md rounded-md p-4 mt-2  ">
            
            <div className="flex justify-between mb-[6px]">
              <span className="font-semibold">Transfer amount</span>
              <span className="font-semibold">${amount}</span>
            </div>
            <div className="flex justify-between mb-[6px]">
              <span className="font-semibold">Fee</span>
              <span className="font-semibold">Free</span>
            </div>

            <Divider className="mb-[10px]" />

            <div
              className="flex justify-between mb-[2px]
            "
            >
              <span className="font-semibold">You&apos;ll get</span>
              <span className="font-semibold">${amount}</span>
            </div>
          </div>
        </div>

        <div className="  pl-[31px] pr-[31px] pt-[14px] pb-[14px] text-[13px]">
          <ul>
          <li className="font-semibold mb-2 text-md">- Estimated arrival: 2 business days.</li>
          <li className="font-semibold mb-2 text-md">
            - Transfers made after 9:00 PM or on weekends takes longer.
          </li>
          <li className="font-semibold mb-2 text-md">
            - All transfers are subject to review and could be delayed or
            stopped if we identify an issue.
          </li>
          </ul>
        </div>

        <Button className=" cursor-pointer w-[100%] mt-[20px] mb-[35px] text[16px] pl-[23px] pr-[23px] " onClick={handleRequest}>
          Confirm
        </Button>
      </div>
    </Card>
  );
};
export default BankWithdrawPreview;
