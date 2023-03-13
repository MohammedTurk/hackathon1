import { useAxios } from "hooks";
import { API_SERVICES_URLS } from "data";
import type { SendMobileCodeResponseType } from "../../types";

export const useMobileCode = () => {
  const { fetchData, error, loading } = useAxios<
    SendMobileCodeResponseType,
    undefined
  >({
    config: {
      url: API_SERVICES_URLS.VERIFICATION.SEND_MOBILE_CODE,
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
  });

  return { sendCodeRequest: fetchData, error, loading };
};

export default useMobileCode;
