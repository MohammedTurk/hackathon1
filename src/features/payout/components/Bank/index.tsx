import { Button, Input, ItemSkeleton, Modal, SelectListBox } from "components";
import BankOption from "components/BankOption";
import { API_SERVICES_URLS, FORM_VALIDATION } from "data";
import { useSWRHook } from "features/payout/hooks";
import { WithdrawAmountType } from "features/payout/types";
import { useToggle } from "hooks";
import { PlusIconMini } from "lib/@heroicons";
import React, { useEffect, useState } from "react";
import useForm from "lib/react-hook-form";
import { getFieldHelperText } from "utils";
import { AddRecipient, BankWithdrawPreview, ControlBankAccount } from "../popUp";
import EditBanks from "../popUp/EditBanks";

export const Bank = () => {
  const [bankList, setBankList] = useState([]);
  const [selectedBankFromEdit, setSelectedBankFromEdit] = useState();
  const [BankSelectDetails, setBankSelectDetails] = useState();
   
 
  const { responseData: bankListData ,isLoading } = useSWRHook(
    API_SERVICES_URLS.WITHDRAW.BANK_LIST,
    "get"
  );
 

  useEffect(() => {
    setBankList(bankListData);
  }, [bankListData]);
  const {
    isOpen: isOpenModalAddBank,
    closeModal: closeModalAddBank,
    openModal: openModalAddBank,
  } = useToggle();
  const {
    isOpen: isOpenWithdrawBank,
    closeModal: closeModalWithdrawBank,
    openModal: openModalWithdrawBank,
  } = useToggle();
  const {
    isOpen: isOpenModalEditBank,
    closeModal: closeModalEditBank,
    openModal: openModalEditBank,
  } = useToggle();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues
  } = useForm<WithdrawAmountType>();
  const handleAmount = (value: number | string) => {
    setValue("amount", +value);
  };
  const onSubmit = handleSubmit((data) => {
    openModalWithdrawBank()
  });
  return (
    <div className="">
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
            step={"any"}
            {...register("amount", FORM_VALIDATION.withdrawBankAmount)}
            error={!!errors.amount}
            helperText={getFieldHelperText("error", errors.amount?.message)}
          />
        </div>
        {/* <SelectListBox data={bankList?.banks} label="Bank"/> */}
        {isLoading ? (
          <ItemSkeleton/>
 

        ) : (
          <>
            <SelectListBox
              data={bankList?.banks}
              label={
                <span className="flex items-center gap-2">
                  <span>Bank</span>
                  <Button
                    className="!bg-transparent !text-[#4375FF] hover:!bg-[#F3F6FF] flex w-fit items-center gap-1 !p-1 "
                    onClick={openModalEditBank}
                  >
                    <span className="text-xs sm:text-sm">Edit</span>
                  </Button>
                </span>
              }
              
              setValue ={setValue}
              OptionType={BankOption}
              fieldName ="bankId"              
              selectedFromEdit={selectedBankFromEdit}
              setSelectDetails={setBankSelectDetails}

            />
            <Button
              className="!bg-transparent !text-[#4375FF] hover:!bg-[#F3F6FF] flex items-center gap-1 !p-1 ml-auto"
              onClick={openModalAddBank}
            >
              <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">Add bank</span>
            </Button>
          </>
        )}
          

        {/* <SelectList Box   label="Office"/> */}

        <Button type="submit" buttonSize="medium" fullWidth className="mt-10">
          Withdraw Bank
        </Button>
      </form>
      <Modal isOpen={isOpenModalAddBank} closeModal={closeModalAddBank}>
        <ControlBankAccount
          closeModal={closeModalAddBank}
         
          setBankList={setBankList}
          precess="AddBank"
        />
      </Modal>

      <Modal isOpen={isOpenModalEditBank} closeModal={closeModalEditBank}>
        <EditBanks
          BankData={bankList}
          setSelectedBank={setSelectedBankFromEdit}
          closeModal={closeModalEditBank}
          setBankList={setBankList}
        />
      </Modal>
      <Modal
          isOpen={isOpenWithdrawBank}
          closeModal={closeModalWithdrawBank}
        >
          <BankWithdrawPreview amount={getValues("amount")} BankSelectDetails={BankSelectDetails}    closeModal={closeModalWithdrawBank}  />
        </Modal>
    </div>
  );
};
export default Bank;
