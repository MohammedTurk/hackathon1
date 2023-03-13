import { Button, Card, Input } from "components";
import { XMarkIconMini } from "lib/@heroicons";

export const AddReciepient = () => {
  return (
    <Card className="w-[70%]">
      <div>
        <div className="flex justify-between items-center mb-[40px] mt-[15px]">
          <h3 className="font-semibold">Add Recipient</h3>
          <span className="h-5 w-5">
            <XMarkIconMini />
          </span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <p className="mb-[5px] text-[#707070]">
              Recipients Full Name (Arabic)
            </p>
            <Input placeholder="الاسم ثلاثي بالعربي" />
          </div>

          <div>
            <p className="mb-[5px] text-[#707070]">Recipients Phone Number</p>
            <Input placeholder="Enter phone number" />
          </div>

          <div>
            <p className="mb-[5px] text-[#707070]">
              Recipients ID Number (National ID or Passport)
            </p>
            <Input placeholder="Enter ID number" />
          </div>
        </form>

        <Button className="w-[100%] mt-[21px] mb-[35px] text[16px] pl-[23px] pr-[23px]">
          Confirm
        </Button>
      </div>
    </Card>
  );
};
export default AddReciepient;
