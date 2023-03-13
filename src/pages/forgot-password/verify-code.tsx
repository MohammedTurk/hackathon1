import {
  RegistrationCard,
  VerifyCodeForm,
  useVerifyPasswordCode,
} from "features/authentication";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const VerifyCode: NextPageWithLayout = () => {
  const { sendCodeRequest, loading } = useVerifyPasswordCode("resend");

  return (
    <NoSsr>
      <RegistrationCard
        formTitle="Check Your Email"
        formCaption={
          <>
            Didn&apos;t get the code?{" "}
            <a
              onClick={() => sendCodeRequest()}
              className="text-blue-light cursor-pointer"
            >
              {loading ? "Loading..." : "Resend"}
            </a>
          </>
        }
        withBackButton
      >
        <p className="text-sm text-gray-dark mb-4">
          We have sent you an email that contains a code to reset your password
        </p>
        <VerifyCodeForm />
      </RegistrationCard>
    </NoSsr>
  );
};

VerifyCode.mainLayoutProps = {
  title: "Talents Valley Verify Code",
  pageDescription: "Verify code page description",
  withoutNavbar: true,
};

export default VerifyCode;
