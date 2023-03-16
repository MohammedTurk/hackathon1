import { Card, Input, Button, Select } from "components";
import { countriesList } from "data";
import { XMarkIconMini } from "lib/@heroicons";
const AddBankAccount = () => {
  return (
    <Card className="w-full">
      <p>Add Bank Account</p>
      <XMarkIconMini className="w-4 h-4" />
      <Select label="Bank" selectSize="small" options={countriesList} />
      <Input label="Account Owner Full Name" inputSize="small" className="" />
      <Select
        label="Branch"
        selectSize="small"
        className=""
        options={countriesList}
      />
      <Input label="Account Number" inputSize="small" className="" />
      <Select label="Currency" selectSize="small" options={countriesList} />
      <Select label="Ledger" selectSize="small" options={countriesList} />
      <Button buttonSize="small" className="">
        Confirm
      </Button>
    </Card>
  );
};

export default AddBankAccount;
