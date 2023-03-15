import React, { useState } from "react";
import { Button } from "components";

import { ChevronLeftIconOutline, HomeIconMini } from "lib/@heroicons";

import { Card } from "components";

export const Withdrawal = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Button onClick={() => setToggle(!toggle)} className="">
        Toggle Withdrawal
      </Button>
      {toggle && (
        <Card className="bg-[#F2F4F7] h-fit absolute right-0 top-[-60px] w-[33.59%]  z-10 px-5 border-solid border  ">
          <div className="flex justify-start items-center py-9 transition duration-150 ease-out hover:ease-in delay-1000		">
            <span className="w-5 h-5 cursor-pointer	font-bold">
              <ChevronLeftIconOutline />
            </span>

            <h1 className="pl-40 font-bold ml-[-39px] text-[16px] transition duration-150 ease-out hover:ease-in delay-1000		">
              Withdrawal
            </h1>
          </div>
          <Card className="mb-5">
            <div className="flex justify-between items-center">
              <p className="text-base font-bold text-[17px]">$300</p>
              <p className="bg-[#FFF9F0] text-[#DAA545] text-[13px] font-[600] text-center	pl-[7px] pr-[7px] rounded-[17px] border-[1px] border-solid border-[#DAA545]">
                Pending
              </p>
            </div>
            <hr className="text-[#707070] mt-3 mb-3" />
            <div className="flex justify-between items-center">
              <p className="text-[15px]">مكتب الدانا- غزة</p>
              <HomeIconMini className="w-5 h-5 mr-[21px]" />
            </div>
          </Card>
          <Card className="mb-5">
            <p className="pb-4 text-base font-bold">Timeline</p>
            <div className="flex flex-start items-center">
              <p className="text-[#656565] text-xs">7:30am</p>
              <li className="text-[#4375FF] text-[17px]  ml-[27px] mr-[-24px]"></li>
              <p className="pl-10">Requested</p>
            </div>
            <span className="text-[#8C8C8C] text-[10px]">Today</span>
          </Card>
          <Card className="mb-5">
            <h3 className="mb-4 text-base font-bold">Details</h3>
            <div className="flex justify-between items-center mb-4 text-[15px]">
              <p2 className="text-base text-[#8C8C8C]">Recipient Name</p2>
              <p2>سامي عمر</p2>
            </div>
            <div className="flex justify-between items-center text-[15px]">
              <p2 className="text-base text-[#8C8C8C]">Expected Date</p2>
              <p2>Within 24 Hours (Avg: 2hrs)</p2>
            </div>
          </Card>
          <Card className="mb-5 ">
            <p className="mb-4 text-base font-bold">Instructions</p>
            <ul className="list-disc pl-6">
              <li className="mb-[6px]">
                Address: الرمال - تقاطع شارع فلسطين مع الشهداء
              </li>
              <li className="mb-[6px]">
                Working hours from 9:00 am to 7:00 pm
              </li>
              <li className="mb-[6px]">Bring your ID for identification</li>
              <li className="mb-[6px]">Confirm receiving your payment</li>
              <li className="mb-[6px]">Office fees 0.00</li>
            </ul>
          </Card>
          <Card className="p-[4px] flex justify-center ease-linear	">
            <Button className=" bg-transparent text-black text-xl hover:bg-transparent hover:text-[red] font-[500] text-[17px] text-center	">
              Cancel Withdrawal
            </Button>
          </Card>
        </Card>
      )}
    </>
  );
};
