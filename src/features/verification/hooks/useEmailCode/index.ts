import { useAxios } from "hooks";
import { API_SERVICES_URLS } from "data";
import type { SendEmailCodeResponseType } from "../../types";

export const useEmailCode = () => {
  const { fetchData, error, loading } = useAxios<
    SendEmailCodeResponseType,
    undefined
  >({
    config: {
      url: API_SERVICES_URLS.VERIFICATION.SEND_EMAIL_CODE,
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
  });

  return { sendCodeRequest: fetchData, error, loading };
};

export default useEmailCode;
