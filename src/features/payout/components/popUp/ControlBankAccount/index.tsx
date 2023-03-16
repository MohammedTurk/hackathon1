import { useEffect } from "react";
import { Card, Input, Button, Select, Modal } from "components";
import { API_SERVICES_URLS, banksList, currencyList, FORM_VALIDATION } from "data";
import { AddBankType } from "features/payout/types";
import { useModal } from "hooks";
import { XMarkIconMini } from "lib/@heroicons";
import useForm from "lib/react-hook-form";
import { getFieldHelperText } from "utils";
import VerifyPhoneOtp from "../VerifyPhoneOtp";

export const ControlBankAccount = ({
  closeModal: closePrevModal,
  setBankList,
  bankForEdit,
  precess = "AddBank",
  closeCurrentModal,
}: {
  closeModal: () => void;
  setBankList: React.Dispatch<React.SetStateAction<never[]>>;
  precess: string;
  closeCurrentModal: () => void;
}) => {
  const {
    isOpen: isOpenModalOtp,
    closeModal: closeModalOtp,
    openModal: openModalOtp,
  } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
    clearErrorOnChange,
    setValue,
  } = useForm<AddBankType>();
  useEffect(() => {
    if (bankForEdit) {
      setValue("accountName", bankForEdit.accountName);
      setValue("accountNumber", bankForEdit.accountNumber);
      setValue("bankBranch", bankForEdit.bankBranch);
      setValue("ledger", bankForEdit.ledger);
    }
  }, [bankForEdit]);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    openModalOtp();
  });
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <Card className="w-full px-16 py-10">
          <div className="flex justify-between mt-1 mb-4">
            <span className="font-semibold text-xl">
              {bankForEdit ? "Edit Bank Account" : "Add Bank Account"}
            </span>
            <XMarkIconMini className="h-5 w-5 cursor-pointer " onClick={closeCurrentModal}/>
          </div>
          <Select
            label="Bank"
            labelClassName=" text-gray-dark text-md font-medium"
            selectSize="small"
            options={banksList}
            disabled
          />
          <Input
            label="Account Owner Full Name"
            labelClassName=" text-gray-dark text-md font-medium"
            inputSize="small"
            type="text"
            id="accountName"
            {...register("accountName", FORM_VALIDATION.firstName)}
            error={!!errors.accountName}
            helperText={getFieldHelperText(
              "error",
              errors.accountName?.message
            )}
          />
          <Select
            label="Branch"
            selectSize="small"
            labelClassName=" text-gray-dark text-md font-medium"
            id="bankBranch"
            {...register("bankBranch", FORM_VALIDATION.branch)}
            error={!!errors.bankBranch}
            helperText={getFieldHelperText("error", errors.bankBranch?.message)}
            options={[
              {
                value: "0454 - Rimal",
                label: "0454 - Rimal",
              },
              {
                value: "0448 - nussirat",
                label: "0448 - nussirat",
              },
              {
                value: "0448 - tal-elhawa",
                label: "0448 - tal-elhawa",
              },
              {
                value: "0446 - Naser",
                label: "0446 - Naser",
              },
              {
                value: "0416 - jabalia",
                label: "0416 - jabalia",
              },
            ]}
          />
          <Input
            label="Account Number"
            inputSize="small"
            labelClassName=" text-gray-dark text-md font-medium"
            type="number"
            id="accountNumber"
            {...register("accountNumber", FORM_VALIDATION.accountNumber)}
            error={!!errors.accountNumber}
            helperText={getFieldHelperText(
              "error",
              errors.accountNumber?.message
            )}
          />
          <Select
            label="Currency"
            selectSize="small"
            options={currencyList}
            labelClassName=" text-gray-dark text-md font-medium"
            disabled
          />
          <Select
            label="Ledger"
            selectSize="small"
            options={[
              { value: "3000 - current", label: "3000 - current" },
              { value: "3100 - saving", label: "3100 - saving" },
              {
                value: "3102 - saving for every citizen",
                label: "3102 - saving for every citizen",
              },
            ]}
            labelClassName=" text-gray-dark text-md font-medium"
            type="number"
            id="ledger"
            {...register("ledger", FORM_VALIDATION.accountNumber)}
            error={!!errors.ledger}
            helperText={getFieldHelperText("error", errors.ledger?.message)}
          />
          <Button type="submit" buttonSize="medium" className="w-full">
            Confirm
          </Button>
        </Card>
      </form>
      <Modal isOpen={isOpenModalOtp} closeModal={closeModalOtp}>
        <VerifyPhoneOtp
          precess={precess}
          closeModal={closeModalOtp}
          closePrevModal={closePrevModal}
          setBankList={setBankList}
          id={precess && bankForEdit?._id}
          sendCodePath={API_SERVICES_URLS.WITHDRAW.VERIFICATION.SEND_MOBILE_CODE_BANK}
          processRequestPath={precess === "EditBank"? API_SERVICES_URLS.WITHDRAW.EDIT_BANK(bankForEdit?._id) : API_SERVICES_URLS.WITHDRAW.ADD_BANK }
          ProcessRequestMethod={precess === "EditBank" ? "PUT" :"POST"}
          requestData={precess === "EditBank" ? {accountName :getValues("accountName"),accountNumber:getValues("accountNumber") ,bankBranch:getValues("bankBranch"),ledger:getValues("ledger"),code:"123456" }:{accountName :getValues("accountName"),accountNumber:getValues("accountNumber") ,bankBranch:getValues("bankBranch"),ledger:getValues("ledger"),code:"123456",bankName:"BANK OF PALESTINE"}}
          sendCodeData={process === "EditBank" ? {accountName :getValues("accountName"),accountNumber:getValues("accountNumber") ,bankBranch:getValues("bankBranch"),ledger:getValues("ledger") ,bankId:bankForEdit?._id} : {accountName :getValues("accountName"),accountNumber:getValues("accountNumber") ,bankBranch:getValues("bankBranch"),ledger:getValues("ledger")}}
          urlReferch={ API_SERVICES_URLS.WITHDRAW.BANK_LIST }
       />
      </Modal>
    </div>
  );
};

export default ControlBankAccount;
