import { Button, Card, Divider } from "components";
import React from "react";

import { TrashIconMini } from "lib/@heroicons";
import { PencilIconMini } from "lib/@heroicons";
import { XMarkIconMini } from "lib/@heroicons";

export const Recipients = () => {
  return (
    <Card className="w-[73%] pl-[33px] pr-[33px] pt-[14px] pb-[14px]">
      <div>
        <div className="flex justify-between items-center mb-[35px] mt-[15px]">
          <h3 className="font-[700]">Recipients</h3>
          <span className="h-5 w-5 cursor-pointer font-[700]">
            <XMarkIconMini />
          </span>
        </div>

        <div>
          <div className="hover:border-[#4375FF] pr-[32px] pl-[32px] pt-[11px] pb-[11px] border-[1px] rounded-[7px] border-[#00000029] mt-[10px]">
            <div className="flex flex-row-reverse justify-between">
              <p className="font-[700]">محمد خلف</p>
              <div className="flex ">
                <span className="cursor-pointer mr-[20px]">
                  <TrashIconMini className="w-[17px] h-[17px] text-[#3c3232d1]" />
                </span>
                <span className="h-5 w-5 cursor-pointer">
                  <PencilIconMini className="w-[17px] h-[17px] text-[#3c3232d1]" />
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[#919191] text-[13px]">
              <p>ID: 488345512</p>
              <p>Phone: 0599823345</p>
            </div>
          </div>
          <div className="hover:border-[#4375FF] pr-[32px] pl-[32px] pt-[11px] pb-[11px] border-[1px] rounded-[7px] border-[#00000029] mt-[10px]">
            <div className="flex flex-row-reverse justify-between">
              <p className="font-[700]">محمد أحمد</p>
              <div className="flex ">
                <span className="cursor-pointer mr-[20px]">
                  <TrashIconMini className="w-[17px] h-[17px] text-[#3c3232d1]" />
                </span>
                <span className="h-5 w-5 cursor-pointer">
                  <PencilIconMini className="w-[17px] h-[17px] text-[#3c3232d1]" />
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[#919191] text-[13px]">
              <p>ID: 488345512</p>
              <p>Phone: 0599823345</p>
            </div>
          </div>
          <div className="hover:border-[#4375FF] pr-[32px] pl-[32px] pt-[11px] pb-[11px] border-[1px] rounded-[7px] border-[#00000029] mt-[10px]">
            <div className="flex flex-row-reverse justify-between">
              <p className="font-[700]">محمد عمر</p>
              <div className="flex ">
                <span className="cursor-pointer mr-[20px]">
                  <TrashIconMini className="w-[17px] h-[17px] text-[#3c3232d1]" />
                </span>
                <span className="h-5 w-5 cursor-pointer">
                  <PencilIconMini className="w-[17px] h-[17px] text-[#3c3232d1]" />
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[#919191] text-[13px]">
              <p>ID: 488345512</p>
              <p>Phone: 0599823345</p>
            </div>
          </div>
          <div className="hover:border-[#4375FF] pr-[32px] pl-[32px] pt-[11px] pb-[11px] border-[1px] rounded-[7px] border-[#00000029] mt-[10px]">
            <div className="flex flex-row-reverse justify-between">
              <p className="font-[700]">عمر سامي</p>
              <div className="flex ">
                <span className="cursor-pointer mr-[20px]">
                  <TrashIconMini className="w-[17px] h-[17px] text-[#3c3232d1]" />
                </span>
                <span className="h-5 w-5 cursor-pointer">
                  <PencilIconMini className="w-[17px] h-[17px] text-[#3c3232d1]" />
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[#919191] text-[13px]">
              <p>ID: 488345512</p>
              <p>Phone: 0599823345</p>
            </div>
          </div>
        </div>

        <div className="flex justify-around mb-[15px] mt-[30px]">
          <Button className="w-[47%] font-[600] bg-[#ffffff] text-[#4375FF] hover:text-[#ffffff] border-[1px]  border-[#D4D4D4]">
            Add
          </Button>
          <Button className="w-[47%] font-[600] border-[1px]  border-[#D4D4D4] ">
            Select
          </Button>
        </div>
      </div>
    </Card>
  );
};
