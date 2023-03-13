import { useState } from "react";
import { Button, HelperText, OtpInput } from "components";
import { useAxios } from "hooks";
import { API_SERVICES_URLS } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import type {
  VerifyMobileFormPayloadType,
  VerifyMobileResponseType,
} from "../../types";

export const VerifyMobileForm = ({ onVerify }: { onVerify: () => void }) => {
  const [otpCode, setOtpCode] = useState("");
  const [otpError, setOtpError] = useState("");
  const {
    fetchData: verifyCode,
    error,
    loading,
    clearError,
  } = useAxios<VerifyMobileResponseType, VerifyMobileFormPayloadType>({
    config: {
      url: API_SERVICES_URLS.VERIFICATION.MOBILE,
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: () => {
      onVerify();
    },
  });

  const otpChangeHandler = (value: string) => {
    setOtpCode(value);
    setOtpError("");
    clearError();
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    if (!otpCode || otpCode.length !== 6) {
      setOtpError("Please write the code to continue.");
      return;
    }
    verifyCode({ verificationCode: otpCode });
  };

  return (
    <form onSubmit={onSubmit}>
      <OtpInput onOtpChange={otpChangeHandler} error={!!error || !!otpError} />
      <HelperText
        showContent={!!error || !!otpError}
        className="text-red w-full text-xs justify-center min-h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={error?.message || otpError}
      />
      <Button type="submit" buttonSize="small" fullWidth>
        {loading ? "Loading.." : "Continue"}
      </Button>
    </form>
  );
};

export default VerifyMobileForm;
