import { useState } from "react";
import { useRouter } from "next/router";
import { Button, HelperText, OtpInput } from "components";
import { useAxios } from "hooks";
import { API_SERVICES_URLS, URL_PATHS } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import type {
  VerifyCodeFormPayloadType,
  VerifyCodeResponseType,
} from "../../types";

export const VerifyCodeForm = () => {
  const [otpCode, setOtpCode] = useState("");
  const router = useRouter();
  const {
    fetchData: verifyCode,
    error,
    loading,
  } = useAxios<VerifyCodeResponseType, VerifyCodeFormPayloadType>({
    config: {
      url: API_SERVICES_URLS.VERIFY_CODE,
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      router.push(
        {
          pathname: URL_PATHS.AUTH.NEW_PASSWORD,
          query: {
            recoverToken: data.data?.recoverToken,
          },
        },
        URL_PATHS.AUTH.NEW_PASSWORD
      );
    },
  });

  const otpChangeHandler = (value: string) => setOtpCode(value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    const payload = {
      _id: router.query.forgotPasswordData?.[1] || "",
      verificationCode: otpCode,
    };
    verifyCode(payload);
  };

  return (
    <form onSubmit={onSubmit}>
      <OtpInput onOtpChange={otpChangeHandler} />
      <HelperText
        showContent={!!error}
        className="text-red w-full text-xs justify-center min-h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error?.message}
      />
      <Button type="submit" buttonSize="small" fullWidth>
        Continue
      </Button>
    </form>
  );
};

export default VerifyCodeForm;
