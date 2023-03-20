import { Card , Button, Link } from "components";
import {TrashIcon , PencilIcon , XMarkIcon} from "lib/@heroicons";
import { table } from "data"; //مؤقت json

export const BankAccount = () => {
    console.log(table)
  return (
    <Card className="w-[600px] pl-[60px] pr-[60px] pt-[30px] ">
      <div className="flex justify-between">
        <p className="font-bold mb-4">Bank Accounts</p>
        <XMarkIcon className="w-4 h-4" />
      </div>
      {table.map((item) => {
        return (
          <>
            <div
              key={item.id}
              className=" p-[10px] border border-gray-300 grid grid-cols-2 border-solid rounded-md w-full mt-7 mb-8"
            >
              <p className="">
                {item.username}
                <br></br>
                <p>0452-1064559-001-3100-000</p>
              </p>
              <div className="flex ml-[160px]">
                <Link href="" className=" mr-3">
                  <TrashIcon className="w-5 h-5" />
                </Link>
                <Link href="">
                  <PencilIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </>
        );
      })}
      <div className="grid grid-cols-2 gap-6 pb-8">
        <Button className="bg-white text-blue-500 border border-gray-300">
          Add
        </Button>
        <Button>Select</Button>
      </div>
    </Card>
  );
}
export default BankAccount;
