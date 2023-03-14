import {
  Button,
  IconButton,
  Input,
  Modal,
  OfficeOption,
  SelectListBox,
} from "components";
import { API_SERVICES_URLS, FORM_VALIDATION } from "data";
import { useSWRHook } from "features/payout/hooks";
import { WithdrawAmountType } from "features/payout/types";
import React from "react";
import useForm from "lib/react-hook-form";
import { getFieldHelperText } from "utils";
import RecipientOption from "components/RecipientOption";
import { PlusIconMini } from "lib/@heroicons";
import { useModal } from "hooks";
import { spawn } from "child_process";

// import AddReciepient from "../popUp/addReciepient";

export const Cash = () => {
  const {
    isOpen: isOpenAddRecipient,
    closeModal: closeModalAddRecipient,
    openModal: openModalAddRecipient,
  } = useModal();
  const {
    isOpen: isOpenEditRecipient,
    closeModal: closeModalEditRecipient,
    openModal: openModalEditRecipient,
  } = useModal();
  const { responseData: OfficeData } = useSWRHook(
    API_SERVICES_URLS.WITHDRAW.OFFICE_LIST,
    "get"
  );
  const { responseData: RecipientData } = useSWRHook(
    API_SERVICES_URLS.WITHDRAW.RECIPIENT_LIST,
    "get"
  );
  console.log(RecipientData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrorOnChange,
  } = useForm<WithdrawAmountType>();
  const handleAmount = (value: number | string) => {
    const beforeDecimal = Math.trunc(+value);
    setValue("amount", beforeDecimal);
  };
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="w-[200px] mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-dark font-medium ">Amount</span>
          <span className="  flex items-center">
            <span className=" text-gray-dark text-xs">Available</span>
            <span
              className="text-blue-light text-base ml-2 cursor-pointer"
              onClick={() => handleAmount(240.99)}
            >
              240.99
            </span>
          </span>
        </div>

        <Input
          inputClassName=" bg-[#FDFDFD] text-black text-center font-semibold text-2xl"
          id="balance-input"
          inputSize="large"
          type="number"
          {...register("amount", FORM_VALIDATION.withdrawCashAmount)}
          error={!!errors.amount}
          helperText={getFieldHelperText("error", errors.amount?.message)}
        />
      </div>

      <SelectListBox
        data={OfficeData}
        label={"Office"}
        error={!!errors.office}
        helperText={getFieldHelperText("error", errors.office?.message)}
        OptionType={OfficeOption}
      />

      <Modal isOpen={isOpenEditRecipient} closeModal={closeModalEditRecipient}>
        edit
        {/* <AddPost closeModal={closeModal} /> */}
      </Modal>

      <SelectListBox
        data={RecipientData?.recipients}
        label={
          <span className="flex items-center gap-2">
            <span>Recipient</span>
            <Button
              className="!bg-transparent !text-[#4375FF] hover:!bg-[#F3F6FF] flex w-fit items-center gap-1 !p-1 "
              onClick={openModalEditRecipient}
            >
               <span className="text-xs sm:text-sm">Edit</span>
            </Button>
          </span>
        }
        error={!!errors.recipient}
        helperText={getFieldHelperText("error", errors.recipient?.message)}
        OptionType={RecipientOption}
      />

      <Button
        className="!bg-transparent !text-[#4375FF] hover:!bg-[#F3F6FF] flex items-center gap-1 !p-1 ml-auto mt-[-25px]"
        onClick={openModalAddRecipient}
      >
        <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs sm:text-sm">Add recipient</span>
      </Button>
      <Modal isOpen={isOpenAddRecipient} closeModal={closeModalAddRecipient}>
        add
        {/* <AddPost closeModal={closeModal} /> */}
      </Modal>

      {/* <SelectList Box   label="Office"/> */}

      <Button type="submit" buttonSize="medium" fullWidth className="mt-10">
        Withdraw Cash
      </Button>
    </form>
  );
};
export default Cash;
