import { useRef } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "features/authentication";
import { URL_PATHS } from "data";
import { VERIFICATION_METHODS } from "../../data";
import { useEmailCode, useMobileCode } from "../../hooks";
import type { VerificationMethodsUrlType } from "../../types";

export const useVerificationMethods = () => {
  let { current: canContinue } = useRef(false);
  let { current: verificationMethods } = useRef([...VERIFICATION_METHODS]);
  const router = useRouter();
  const { user } = useCurrentUser();

  const { sendCodeRequest: sendEmailCodeRequest, loading: emailLoading } =
    useEmailCode();
  const { sendCodeRequest: sendMobileCodeRequest, loading: mobileLoading } =
    useMobileCode();

  if (user) {
    const [email, mobile, identity, address] = verificationMethods;
    const { verifiedEmail, verifiedMobile, verifiedId, verifiedAddress } = user;

    email.status = verifiedEmail ? "Verified" : "Not verified";
    mobile.status = verifiedMobile ? "Verified" : "Not verified";

    if (verifiedId.status === "not_uploaded") {
      identity.status = "Not verified";
    } else if (verifiedId.status === "pending") {
      identity.status = "Pending";
    } else if (verifiedId.status === "rejected") {
      identity.status = "Rejected";
    } else {
      identity.status = "Verified";
    }

    if (verifiedAddress.status === "not_uploaded") {
      address.status = "Not verified";
    } else if (verifiedAddress.status === "pending") {
      address.status = "Pending";
    } else if (verifiedAddress.status === "rejected") {
      address.status = "Rejected";
    } else {
      address.status = "Verified";
    }

    const formattedMobile =
      user.mobile.slice(0, 4) +
      user.mobile.slice(4, -3).replaceAll(/\d/g, "*") +
      user.mobile.slice(-3);

    email.caption = user.email;
    mobile.caption = formattedMobile;

    email.loading = emailLoading;
    mobile.loading = mobileLoading;

    canContinue = email.status === "Verified" && mobile.status === "Verified";
  }

  const onMethodClick = (url: VerificationMethodsUrlType) => {
    if (url === "/verification/email") {
      sendEmailCodeRequest().then(() => router.push(url));
    } else if (url === "/verification/phone") {
      sendMobileCodeRequest().then(() => router.push(url));
    } else {
      router.push(url);
    }
  };

  const onContinue = () => router.push(URL_PATHS.HOME);

  return { verificationMethods, onMethodClick, canContinue, onContinue };
};

export default useVerificationMethods;
