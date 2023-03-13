import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS } from "data";
import type {
  ForgotPasswordFormInputType,
  ForgotPasswordResponseType,
} from "../../types";

export const useVerifyPasswordCode = (mode: "send" | "resend" = "send") => {
  const router = useRouter();
  const forgotPasswordData = router.query.forgotPasswordData;
  const emailValueRef = useRef(forgotPasswordData?.[0] || "");

  const { fetchData, error, loading } = useAxios<
    ForgotPasswordResponseType,
    ForgotPasswordFormInputType
  >({
    config: {
      url: API_SERVICES_URLS.FORGOT_PASSWORD,
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      if (mode === "send") {
        router.push(
          {
            pathname: URL_PATHS.AUTH.VERIFY_CODE,
            query: {
              forgotPasswordData: [emailValueRef.current, data.data?._id || ""],
            },
          },
          URL_PATHS.AUTH.VERIFY_CODE
        );
      }
    },
  });

  useEffect(() => {
    if (mode === "resend") {
      // maybe handle this in the middleware function
      if (!emailValueRef.current) {
        router.replace(URL_PATHS.AUTH.FORGOT_PASSWORD);
      }
    }
  }, [mode, router]);

  const sendCodeRequest = (payload?: { email: string }) => {
    const emailValue = payload?.email || emailValueRef.current;
    emailValueRef.current = emailValue;
    fetchData({ email: emailValue });
  };

  return { sendCodeRequest, error, loading };
};

export default useVerifyPasswordCode;
