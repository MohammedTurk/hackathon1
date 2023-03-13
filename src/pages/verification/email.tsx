import { useState } from "react";
import {
  VerificationCard,
  VerifyEmailForm,
  VerifiedSuccess,
  useEmailCode,
} from "features/verification";
import { useCurrentUser } from "features/authentication";
import { NoSsr } from "components";
import type { NextPageWithLayout } from "types";

const EmailVerification: NextPageWithLayout = () => {
  const { user, updateUser } = useCurrentUser();
  const [isVerified, setIsVerified] = useState(user?.verifiedEmail);
  const { sendCodeRequest, loading } = useEmailCode();

  const onVerify = () => {
    if (user) {
      updateUser({ ...user, verifiedEmail: true });
    }
    setIsVerified(true);
  };

  let imgSrc = "/assets/img/email.png";
  let caption: React.ReactNode = (
    <>
      Didn&apos;t get the code?{" "}
      <a
        onClick={() => sendCodeRequest()}
        className="text-blue-light cursor-pointer"
      >
        {loading ? "Loading..." : "Resend"}
      </a>
    </>
  );
  let content = (
    <>
      <p className="text-sm text-gray-dark mb-4">
        {`We have sent you a verification code to your email ${user?.email}`}
      </p>
      <VerifyEmailForm onVerify={onVerify} />
    </>
  );

  if (isVerified) {
    imgSrc = "/assets/img/check-mark.png";
    caption = null;
    content = (
      <VerifiedSuccess description="Your Email has been Verified Successfully" />
    );
  }

  return (
    <NoSsr>
      <VerificationCard
        title="Email Verification"
        imgSrc={imgSrc}
        caption={caption}
      >
        {content}
      </VerificationCard>
    </NoSsr>
  );
};

EmailVerification.mainLayoutProps = {
  title: "Talents Valley Email Verification",
  pageDescription: "Email verification page description",
};

export default EmailVerification;
