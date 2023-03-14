import { Button, Card, Input } from "components";
import { XMarkIconMini } from "lib/@heroicons";

export const Delete = () => {
  return (
    <Card className="w-[46%] pt-[1px] pb-[1px] pl-[6px] pr-[6px]">
      <div className="pt-[10px] pb-[10px] pl-[12px] pr-[23px]">
        <div className="flex flex-row-reverse">
          <span className="h-5 w-5 cursor-pointer font-[700]">
            <XMarkIconMini />
          </span>
        </div>
        <p className="text-[#151617] pl-[21px] pr-[20px] text-[14px]">
          Are you sure you want to delete this bank account?
        </p>

        <div className="flex justify-between pl-[15px] pr-[15px] pt-[17px] pb-[17px] mt-[6px]">
          <Button className="justify-center w-[48%] pt-[10px] pb-[10px] pr-[19px] pl-[19px] h-[1%] text-[#000000] bg-[#FFFFFF] font-[600] border-[1px]  border-[#D4D4D4]">
            Cancel
          </Button>
          <Button className="justify-center w-[48%] pt-[10px] pb-[10px] pr-[19px] pl-[19px] h-[1%] text-[#FFFFFF] bg-[#D84242] font-[600] border-[1px]  border-[#D4D4D4]">
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
};
