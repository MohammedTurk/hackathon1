import { useState } from "react";
import {
    VerificationCard,
    VerifyMobileForm,
    VerifiedSuccess,
    useMobileCode,
    } from "features/verification";
    import { useCurrentUser } from "features/authentication";
    import { NoSsr } from "components";
    import type { NextPageWithLayout } from "types";
    import {XCircleIconOutline} from "lib/@heroicons";

    const VerifyPhoneOtp: NextPageWithLayout = () => {
    const { user, updateUser } = useCurrentUser();
    const [isVerified, setIsVerified] = useState(user?.verifiedMobile);
    const { sendCodeRequest, loading } = useMobileCode();

    const onVerify = () => {
        if (user) {
        updateUser({ ...user, verifiedMobile: true });
        }
        setIsVerified(true);
    };

    let imgSrc = "/assets/img/phone.png";
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
            We have sent you a verification code to your phone number {user?.mobile}
            </p>
            <VerifyMobileForm onVerify={onVerify} />
        </>
    );

    if (isVerified) {
        imgSrc = "/assets/img/check-mark.png";
        caption = null;
        content = (
        <VerifiedSuccess description="Your Phone Number has been Verified Successfully" />
        );
    }

    return (
        <NoSsr>
        <VerificationCard
            title="We need to make sure its you!"
            imgSrc={imgSrc}
            caption={caption}
        >
            {content}
        </VerificationCard>
        </NoSsr>
    );
};

VerifyPhoneOtp.mainLayoutProps = {
    title: "Talents Valley Phone Verification",
    pageDescription: "Phone verification page description",
};

export default VerifyPhoneOtp;
