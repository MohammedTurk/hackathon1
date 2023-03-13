import { Button, Input } from "components";

import { XMarkIconMini } from "lib/@heroicons";

export const AddReciepient = () => {
  return (
    <div>
      <div>
        <h3>Add Recipient</h3>
        {XMarkIconMini}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <p>Recipients Full Name (Arabic)</p>
          <Input placeholder="الاسم ثلاثي بالعربي" />
        </div>

        <div>
          <p>Recipients Phone Number</p>
          <Input placeholder="Enter phone number" />
        </div>

        <div>
          <p>Recipients ID Number (National ID or Passport)</p>
          <Input placeholder="Enter ID number" />
        </div>
      </form>

      <Button>Confirm</Button>
    </div>
  );
};
export default AddReciepient;
