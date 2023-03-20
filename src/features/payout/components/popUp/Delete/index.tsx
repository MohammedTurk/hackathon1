import { Button, Card } from "components";
import { XMarkIconMini } from "lib/@heroicons";

export const Delete = ({ processDescription ,closeModal ,handleDelete,titleButton = "Delete"}:{processDescription :string,closeModal: () => void,handleDelete: () => void,titleButton :string}) => {
  return (
    <Card className="w-full pt-[1px] pb-[1px] pl-[6px] pr-[6px]">
      <div className="pt-[10px] pb-[10px] pl-[12px] pr-[23px]">
        <div className="flex flex-row-reverse">
          <span className="h-5 w-5 cursor-pointer font-[700]" onClick={closeModal}>
            <XMarkIconMini />
          </span>
        </div>
        <p className="   text-xl">
          Are you sure you want to {processDescription}?
        </p>

        <div className="flex gap-5  mt-10">
          <Button className="justify-center w-[50%] hover:bg-gray-light  text-[#000000] bg-[#FFFFFF] font-[600] border-[1px]  border-gray" onClick={closeModal}>
            Cancel
          </Button>
          <Button className="justify-center w-[50%]  hover:bg-red-700  text-[#FFFFFF] bg-red-600 font-[600] border-[1px]  border-gray" onClick={handleDelete}>
            {titleButton}
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default Delete