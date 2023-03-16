import { Card,Input , Button , Select ,Link } from "components"
import { countriesList } from "data"
import {XMarkIcon}  from "lib/@heroicons";
const Addbankaccount  = () => {
  return (
    <Card className="w-[80%] pl-[50px] pr-[50px] pt-[20px] pb-[40px]">
      <div className="flex justify-between mb-6">
        <p className="font-bold">Add Bank Account</p>
        <Link href=""><XMarkIcon className="w-4 h-4 " /></Link> 

      </div>
      <Select label="Bank" selectSize="small" options={countriesList} />
      <Input label="Account Owner Full Name" inputSize="small" className="" />
      <Select
        label="Branch"
        selectSize="small"
        className=""
        options={countriesList}
      />
      <Input labe="Account Number" inputSize="small" className="" />
      <Select label="Currency" selectSize="small" options={countriesList} />
      <Select label="Ledger" selectSize="small" options={countriesList} />
      <Button buttonSize="small" className="w-full">
        Confirm
      </Button>
    </Card>
  );
}

export default Addbankaccount