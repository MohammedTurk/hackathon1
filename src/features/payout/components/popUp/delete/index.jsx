import { Button, Card, Input } from "components";
import { XMarkIconMini } from "lib/@heroicons";

export const Delete = () => {
  return (
    <Card className="w-[46%] pt-[1px] pb-[1px] pl-[6px] pr-[6px]">
      <div className="pt-[10px] pb-[10px] pl-[12px] pr-[23px]">
        <div className="flex flex-row-reverse">
          <span className="h-5 w-5">
            <XMarkIconMini />
          </span>
        </div>
        <p className="text-[#151617] pl-[21px] pr-[20px] text-[14px]">
          Are you sure you want to delete this bank account?
        </p>

        <div className="flex justify-between pl-[15px] pr-[15px] pt-[17px] pb-[17px] mt-[6px]">
          <button className="rounded-[7px] p-[5px] justify-center w-[49%] flex border-[1px] border-[#BEC2C6] bg-[#FFFFFF] text-[#000000]">
            Cancel
          </button>
          <button className=" rounded-[7px] p-[5px] justify-center w-[49%] flex border-[1px] border-[#BEC2C6] bg-[#D84242] text-[#FFFFFF]">
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};
