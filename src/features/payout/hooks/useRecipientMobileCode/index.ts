import { useAxios } from "hooks";
import { API_SERVICES_URLS } from "data";
import type { SendMobileCodeRecipientResponseType } from "../../types";

export const useRecipientMobileCode = () => {
  const { fetchData, error, loading } = useAxios<
  SendMobileCodeRecipientResponseType,
    undefined
  >({
    config: {
      url: API_SERVICES_URLS.WITHDRAW.VERIFICATION.SEND_MOBILE_CODE,
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
  });

  return { sendCodeRequest: fetchData, error, loading };
};

export default useRecipientMobileCode;
