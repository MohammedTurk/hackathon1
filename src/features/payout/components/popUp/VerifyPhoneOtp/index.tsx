import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  VerificationCard,
  VerifyMobileForm,
  VerifiedSuccess,
} from "features/verification";
import {
  useRecipientMobileCode,
  useSWRHook,
  useSWRMutationHook,
} from "features/payout/hooks";
import { useCurrentUser } from "features/authentication";
import { Button, NoSsr } from "components";
import { API_SERVICES_URLS } from "data";

const VerifyPhoneOtp = ({
  closeModal,
  addData,
  closePrevModal
  ,setRecipientDataState,
  verifyFor,
  id
}: {
  closeModal: () => void;
  addData: [string, string ,string];
  closePrevModal: () => void,
  setRecipientDataState: Dispatch<SetStateAction<never[]>>,
  verifyFor:string,
  id?:number

}) => {
  const[urlProcessRequest,setUrlProcessRequest] = useState<string>();
  const[methodProcessRequest,setMethodProcessRequest] = useState<string>();
  useEffect(()=>{
    if(verifyFor == "Add"){
      setUrlProcessRequest(API_SERVICES_URLS.WITHDRAW.ADD_RECIPIENT);
      setMethodProcessRequest("POST")
    }else if(verifyFor == "Edit"){
      const editUrl =API_SERVICES_URLS.WITHDRAW.EDIT_RECIPIENT(id)
      setUrlProcessRequest(editUrl)
      setMethodProcessRequest("PUT")

    }
  },[verifyFor])
 
  const [isVerified, setIsVerified] = useState(false);

  const { trigger: sendCode, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.WITHDRAW.VERIFICATION.SEND_MOBILE_CODE,
    "POST",
    { data: { mobile: addData[0], idNumber: addData[1] } }
  );
 

  const { trigger: sendProcessRequest,responseData } = useSWRMutationHook(
    urlProcessRequest,
    methodProcessRequest,
    { data: { mobile: addData[0], idNumber: addData[1],code:"123456",name:addData[2] } }
  );
  const { trigger: getRecipientsData,responseData:RecipientData  } = useSWRMutationHook(
    API_SERVICES_URLS.WITHDRAW.RECIPIENT_LIST,
    "get",
  );
 
  useEffect(() => {
    sendCode();
  }, []);

  const onVerify = () => {
    setIsVerified(true);
    sendProcessRequest()
    getRecipientsData()
    setRecipientDataState(RecipientData)

   };
 
  let imgSrc = "/assets/img/phone.png";
  let caption: React.ReactNode = (
    <>
      Didn&apos;t get the code?{" "}
      <a onClick={() => sendCode()} className="text-blue-light cursor-pointer">
        {isMutating ? "Loading..." : "Resend"}
      </a>
    </>
  );
  let content = (
    <>
      <p className="text-sm text-gray-dark mb-4">
        We have sent you a verification code to your phone number {addData[0]}
      </p>
      <VerifyMobileForm onVerify={onVerify} />
    </>
  );
    const handleClose=()=>{
      // setRecipientDataState()
      closePrevModal()
        closeModal()
    }
  if (isVerified) {
    imgSrc = "/assets/img/check-mark.png";
    caption = null;
    content = (
        <>
        <p className="text-xl my-4 text-center">Your Phone Number has been Verified Successfully</p>
        <Button
          type="submit"
          buttonSize="small"
          fullWidth
          onClick={handleClose}
        >
          Continue
        </Button>
      </>
       
    );
  }

  return (
    <NoSsr>
      <VerificationCard
        title="We need to make sure its you!"
        className="!max-w-full"
        imgSrc={imgSrc}
        caption={caption}
      >
        {content}
      </VerificationCard>
    </NoSsr>
  );
};

export default VerifyPhoneOtp;
