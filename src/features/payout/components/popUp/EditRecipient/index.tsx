import { useState } from "react";
import { Button, Modal } from "components";
import {
  TrashIconOutline,
  XMarkIconMini,
  PencilIconOutline,
} from "lib/@heroicons";
import VerifyPhoneOtp from "../VerifyPhoneOtp";
import AddRecipient from "../AddRecipient";
import { useModal } from "hooks";
import { Delete } from "../Delete";
import { useSWRMutationHook } from "features/payout/hooks";
import { API_SERVICES_URLS } from "data";

export const EditRecipient = ({
  RecipientsData,
  setSelectedRecipient,
  closeModal,
  setRecipientDataState
}: {
  RecipientsData: never[];
  setSelectedRecipient: React.Dispatch<React.SetStateAction<{}>>,
  closeModal: () => void;
  setRecipientDataState: React.Dispatch<React.SetStateAction<never[]>>
}) => {
  const [active, setActive] = useState();
  
  const { trigger: deleteRecipient, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.WITHDRAW.Delete_RECIPIENT(active?._id),
    "DELETE",
  );

  const {
    isOpen: isOpenEditRecipient,
    closeModal: closeModalEditRecipient,
    openModal: openModalEditRecipient,
  } = useModal();
 
  const {
    isOpen: isOpenDeleteRecipient,
    closeModal: closeModalDeleteRecipient,
    openModal: openModalDeleteRecipient,
  } = useModal();
 

  const handleActive = (recipient) => {
    setActive(recipient);
  };

  const handleSelected = () => {
    setSelectedRecipient(active);
    closeModal();
  };

  const handleEditButton = (recipient)=>{
    openModalEditRecipient()
    setActive(recipient)

  }

  const handleDeleteButton = (recipient)=>{
    openModalDeleteRecipient();
    setActive(recipient)
  } 
  
  const handleDeleteRecipient = () =>{
    deleteRecipient()
    closeModalDeleteRecipient()
    const recipients = [...RecipientsData.recipients]
    console.log(RecipientsData);
    
    const newRecipients = recipients.filter(recipient=>recipient._id !== active._id)
    const data = {recipients:[...newRecipients]}
    

    setRecipientDataState({...data})
  }

  return (
    <div className="max-h-[700px] overflow-auto p-6   ">
      <div className="  fixed top-0 left-0 p-6   bg-white w-full">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-2xl">Recipients</h3>
          <span className="h-5 w-5 cursor-pointer font-[700]">
            <XMarkIconMini />
          </span>
        </div>
      </div>
      <div className="mt-16 mb-24">
        {RecipientsData?.recipients.map((recipient) => (
          <div
            key={recipient._id}
            className={`pr-[32px] pl-[32px] pt-[11px] pb-[11px] border-[1px] rounded-[7px] border-gray mt-[10px] ${
              active == recipient ? "border-blue-light" : ""
            }`}
            onClick={() => handleActive(recipient)}
          >
            <div className="flex flex-row-reverse justify-between">
              <p className="font-bold text-lg">{recipient.name}</p>
              <div className="flex ">
                <span className="cursor-pointer mr-5">
                 
                  <TrashIconOutline className="w-5 h-5 text-gray-dark" onClick={()=>handleDeleteButton(recipient)}/>
                </span>
                <span className="h-5 w-5 cursor-pointer">
                  <PencilIconOutline className="w-5 h-5 text-gray-dark" onClick={()=>handleEditButton(recipient)}/>
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[#919191] text-[13px]">
              <span className="text-lg">ID: {recipient.idNumber}</span>
              <span className="text-lg">Phone: {recipient.mobile}</span>
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
          <Modal isOpen={isOpenEditRecipient} closeModal={closeModalEditRecipient}>
            <AddRecipient closeModal={closeModal} closeCurrentModal={closeModalEditRecipient} setRecipientDataState={setRecipientDataState} recipientForEdit={active}  precess="Edit"/>
          </Modal>

          <Modal isOpen={isOpenDeleteRecipient} closeModal={closeModalDeleteRecipient}>
             <Delete processDescription="delete this recipient" closeModal={closeModalDeleteRecipient} handleDelete ={handleDeleteRecipient}/>
          </Modal>
         
    </div>
  );
};
export default EditRecipient;
 