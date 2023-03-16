import {
  Button,
  
  Input,
  ItemSkeleton,
  Modal,
  OfficeOption,
  SelectListBox,
} from "components";
import { API_SERVICES_URLS, FORM_VALIDATION } from "data";
import { useSWRHook, useSWRMutationHook } from "features/payout/hooks";
import { WithdrawAmountType } from "features/payout/types";
import React, { useEffect, useState } from "react";
import useForm from "lib/react-hook-form";
import { getFieldHelperText } from "utils";
import RecipientOption from "components/RecipientOption";
import { PlusIconMini } from "lib/@heroicons";
import { useToggle } from "hooks";
 
import {  CashWithdrawPreview, ControlRecipient,EditRecipient  } from "../popUp";
 

// import AddReciepient from "../popUp/addReciepient";

export const Cash = () => {
  const [recipientDataState ,setRecipientDataState] =useState([])
  const[selectedRecipientFromEdit ,setSelectedRecipientFromEdit] = useState()
  const[RecipientDetails ,setRecipientDetails] = useState()
  const[OfficeDetails ,setOfficeDetails] = useState()

  const {
    isOpen: isOpenAddRecipient,
    closeModal: closeModalAddRecipient,
    openModal: openModalAddRecipient,
  } = useToggle();
  const {
    isOpen: isOpenEditRecipient,
    closeModal: closeModalEditRecipient,
    openModal: openModalEditRecipient,
  } = useToggle();
  const {
    isOpen: isOpenWithdrawCash,
    closeModal: closeModalWithdrawCash,
    openModal: openModalWithdrawCash,
  } = useToggle();
  const { responseData: OfficeData ,isLoading : isLoadingOffice} = useSWRHook(
    API_SERVICES_URLS.WITHDRAW.OFFICE_LIST,
    "get"
  );

  const { responseData: RecipientData ,isLoading : isLoadingRecipient} = useSWRHook(
    API_SERVICES_URLS.WITHDRAW.RECIPIENT_LIST,
    "get"
  );

 
  useEffect(()=>{    
    setRecipientDataState(RecipientData)
  },[RecipientData])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrorOnChange,
    control,
    getValues
  } = useForm<WithdrawAmountType>();
  const handleAmount = (value: number | string) => {
    const beforeDecimal = Math.trunc(+value);
    setValue("amount", beforeDecimal);
  };
  const onSubmit = handleSubmit((data) => {
    openModalWithdrawCash()
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
            id="amount"
            inputSize="large"
            type="number"
            {...register("amount",   {...FORM_VALIDATION.withdrawCashAmount ,max:240}   )}
            error={!!errors.amount}
            helperText={getFieldHelperText("error", errors.amount?.message)}
          />
        </div>
{isLoadingOffice ? <ItemSkeleton/>: <SelectListBox
          data={OfficeData}
          label="Office"
    
           
          OptionType={OfficeOption}
          setValue ={setValue}
          fieldName ="officeId"
          setSelectDetails={setOfficeDetails}
        />}
        

       
{isLoadingRecipient ? <ItemSkeleton/> :<>
<SelectListBox
          data={recipientDataState?.recipients}
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
          selectedFromEdit={selectedRecipientFromEdit}
          setValue ={setValue}
          fieldName ="recipientId"
          setSelectDetails={setRecipientDetails}

        />

        <Button
          className="!bg-transparent !text-[#4375FF] hover:!bg-[#F3F6FF] flex items-center gap-1 !p-1 ml-auto"
          onClick={openModalAddRecipient}
        >
          <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-xs sm:text-sm">Add recipient</span>
        </Button></>}
        
        

        {/* <SelectList Box   label="Office"/> */}

        <Button type="submit" buttonSize="medium" fullWidth className="mt-10">
          Withdraw Cash
        </Button>
      </form>
      <Modal isOpen={isOpenAddRecipient} closeModal={closeModalAddRecipient}>
          <ControlRecipient closeModal={closeModalAddRecipient} setRecipientData={ setRecipientDataState } precess="AddRecipient"/>
         </Modal>
        <Modal
          isOpen={isOpenEditRecipient}
          closeModal={closeModalEditRecipient}
        >
          <EditRecipient RecipientsData={recipientDataState} setSelectedRecipient={setSelectedRecipientFromEdit} closeModal={closeModalEditRecipient} setRecipientDataState={setRecipientDataState}/>
        </Modal>
        <Modal
          isOpen={isOpenWithdrawCash}
          closeModal={closeModalWithdrawCash}
        >
          <CashWithdrawPreview amount={getValues("amount")} RecipientDetails={RecipientDetails}  OfficeDetails={OfficeDetails} closeModal={closeModalWithdrawCash}  />
        </Modal>
    </div>
  );
};
export default Cash;
