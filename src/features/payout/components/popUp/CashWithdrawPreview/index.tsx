import { Button, Card, Divider } from "components";
import React from "react";

import { XMarkIconMini } from "lib/@heroicons";
import { HomeIconMini } from "lib/@heroicons";
import { useSWRMutationHook } from "features/payout/hooks";
import { API_SERVICES_URLS, URL_PATHS } from "data";
import { useRouter } from "next/router";

export const CashWithdrawPreview = ({
  RecipientDetails,
  OfficeDetails,
  closeModal,
  amount,
}) => {
  const router = useRouter();

  const { trigger: confirmWithdraw, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.WITHDRAW.REQUEST_CASH_WITHDRAW,
    "POST",
    { data: {amount, officeId: OfficeDetails?._id , recipientId:RecipientDetails?._id} }
  );
 const handleRequest =()=>{
  confirmWithdraw()
  closeModal()
  router.push('/balance')
 }

  return (
    <Card className=" ">
      <div className="pr-[32px] pl-[32px]">
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

        <div className="mt-[-20px] pl-[4px] pr-[4px] ">
          <p className="text-[#8C8C8C] text-[12px]">Transferred to:</p>
          <div className=" flex border-[1px] border-[#BEC2C6] pl-[37px] pr-[37px] pb-[10px] pt-[10px] text-[#151617] text-[14px] rounded-[9px] mt-[4px]	flex-row-reverse	">
            <span className="h-5 w-5 basis-[26px] flex justify-center items-center pt-[26px] ml-[19px] mr-[-9px] ">
              <HomeIconMini />
            </span>
            <div className="flex flex-col	items-end">
              <span className="mb-2 text-md font-semibold ">
                {OfficeDetails.name}
              </span>
              <span className="mb-2 text-md font-semibold">
                {" "}
                {OfficeDetails.address}{" "}
              </span>
            </div>
          </div>
          <div className="border  border-gray  text-black   border-gray    text-md rounded-md p-4 mt-2">
            <div className="flex justify-between mb-[6px]">
              <span className="font-semibold">Recipient name</span>
              <span className="font-semibold"> {RecipientDetails.name} </span>
            </div>
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

        <div className="text-black pl-[31px] pr-[31px] pt-[14px] pb-[14px] text-[13px]">
          <ul>
            <li className="font-semibold mb-2 text-md">- Estimated arrival: 2 business days.</li>
            <li className="font-semibold mb-2 text-md">
              - Don&apos;t go to office till the payment ready.
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
export default CashWithdrawPreview;
