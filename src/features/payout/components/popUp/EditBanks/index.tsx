import { useState } from "react";
import { Button, Modal } from "components";
import {
  TrashIconOutline,
  XMarkIconMini,
  PencilIconOutline,
} from "lib/@heroicons";
import   { ControlRecipient } from "../ControlRecipient";
import { useToggle } from "hooks";
import { Delete } from "../Delete";
import { useSWRMutationHook } from "features/payout/hooks";
import { API_SERVICES_URLS } from "data";
import ControlBankAccount from "../ControlBankAccount";

export const EditBanks = ({
  BankData,
  setSelectedBank,
  closeModal,
  setBankList
}: {
    BankData: never[];
  setSelectedBank: React.Dispatch<React.SetStateAction<{}>>,
  closeModal: () => void;
  setBankList: React.Dispatch<React.SetStateAction<never[]>>
}) => {
    const [active, setActive] = useState();
   
  const { trigger: deleteBank } = useSWRMutationHook(
    API_SERVICES_URLS.WITHDRAW.Delete_BANK(active?._id),
    "DELETE",
  );

  const {
    isOpen: isOpenEditBank,
    closeModal: closeModalEditBank,
    openModal: openModalEditBank,
  } = useToggle();
 
  const {
    isOpen: isOpenDeleteBank,
    closeModal: closeModalDeleteBank,
    openModal: openModalDeleteBank,
  } = useToggle();
 

  const handleActive = (recipient) => {
    setActive(recipient);
  };

  const handleSelected = () => {
    setSelectedBank(active);
    closeModal();
  };

  const handleEditButton = (bank)=>{
    openModalEditBank()
    setActive(bank)

  }

  const handleDeleteButton = (bank)=>{
    openModalDeleteBank();
    setActive(bank)
  } 
  
  const handleDeleteBank = () =>{
    deleteBank()
    closeModalDeleteBank()
    const banks = [...BankData.banks]
    console.log(BankData);
    
    const newBanks = banks.filter(bank=>bank._id !== active._id)
    const data = {banks:[...newBanks]}
    

    setBankList({...data})
  }

  return (
    <div className="max-h-[700px] overflow-auto p-6   ">
      <div className="  fixed top-0 left-0 p-6   bg-white w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-2xl">Recipients</h3>
          <span className="h-5 w-5 cursor-pointer font-[700]" onClick={closeModal}>
            <XMarkIconMini />
          </span>
        </div>
      </div>
      <div className="mt-16 mb-24">
        {BankData?.banks.map((bank) => (
          <div
            key={bank._id}
            className={`pr-[32px] pl-[32px] pt-[11px] pb-[11px] border-[1px] rounded-[7px] border-gray mt-[10px] ${
              active == bank ? "border-blue-light" : ""
            }`}
            onClick={() => handleActive(bank)}
          >
            <div className="flex flex-row-reverse justify-between">
              <p className="font-bold text-lg">{bank.accountName}</p>
              <div className="flex ">
                <span className="cursor-pointer mr-5">
                 
                  <TrashIconOutline className="w-5 h-5 text-gray-dark" onClick={()=>handleDeleteButton(bank)}/>
                </span>
                <span className="h-5 w-5 cursor-pointer">
                  <PencilIconOutline className="w-5 h-5 text-gray-dark" onClick={()=>handleEditButton(bank)}/>
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[#919191] text-[13px]">
              <span className="text-lg"> </span>
              <span className="text-lg">Phone: {bank.updatedAt}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 p-4   bg-white w-full">
        <div className="flex gap-5  ">
          <Button
            buttonSize="large"
            className="w-[50%] font-semibold text-xl bg-white !text-blue hover:bg-gray-light   border-[1px]  border-[#D4D4D4]"
          >
            Add
          </Button>
          <Button
            buttonSize="large"
            className="w-[50%] font-semibold text-xl border-[1px]"
            onClick={handleSelected}
          >
            Select
          </Button>
        </div>
      </div>
          <Modal isOpen={isOpenEditBank} closeModal={closeModalEditBank}>
            <ControlBankAccount closeModal={closeModal} closeCurrentModal={closeModalEditBank} setBankList={setBankList} bankForEdit={active}  precess="EditBank"/>
          </Modal>

          <Modal isOpen={isOpenDeleteBank} closeModal={closeModalDeleteBank}>
             <Delete processDescription="delete this bank" closeModal={closeModalDeleteBank} handleDelete ={handleDeleteBank}/>
          </Modal>
         
    </div>
  );
};
export default EditBanks;
 